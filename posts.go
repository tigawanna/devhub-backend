package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
)

// CustomPostRoute  defines the HTTP route for getting custom posts
func CustomPostsRoute(app *pocketbase.PocketBase) echo.Route {
	return echo.Route{
		Method: http.MethodGet,
		Path:   "/custom_posts",
		Handler: func(c echo.Context) error {
			result := []*struct {
				CreatorId    string `db:"creator_id" json:"creator_id"`
				CreatorName  string `db:"creator_name" json:"creator_name"`
				CreatorImage string `db:"creator_image" json:"creator_image"`

				PostId       string `db:"post_id" json:"post_id"`
				PostBody     string `db:"post_body" json:"post_body"`
				PostMedia    string `db:"post_media" json:"post_media"`
				PostParent    string `db:"post_parent" json:"post_parent"`
				PostDepth    string `db:"post_depth" json:"post_depth"`

				CreatedAT    string `db:"created_at" json:"created_at"`
				Likes        int    `db:"likes" json:"likes"`
				MyLike       string `db:"mylike" json:"mylike"`
				
				ReactionId   string `db:"reaction_id" json:"reaction_id"`
				Replies       int `db:"replies" json:"replies"`
				MyReply   string `db:"myreply" json:"myreply"`
			}{}
			queryErr := app.Dao().DB().NewQuery(` 
SELECT 

pp.user creator_id,
dv.username creator_name,
dv.avatar creator_image,

pp.id post_id,
pp.body post_body,
pp.media post_media,
pp.created created_at,
pp.depth post_depth,
IFNULL(pp.parent,"op") post_parent,

(SELECT COUNT(*) FROM reactions WHERE liked = 'yes' AND post = pp.id) likes,
IFNULL((SELECT  liked FROM reactions WHERE user = {:user} AND post = pp.id),'virgin')mylike,
IFNULL((SELECT id FROM reactions WHERE user = {:user} AND post = pp.id),"virgin") reaction_id,

(SELECT COUNT(*) FROM posts WHERE parent = pp.id AND depth = pp.depth + 1) replies,
IFNULL((SELECT  id FROM posts WHERE pp.user = {:user} AND parent = pp.id AND depth = pp.depth + 1 ),'virgin')myreply
 
FROM posts pp
LEFT JOIN devs dv on dv.id = pp.user
WHERE (
    (pp.created < {:created} OR (pp.created = {:created} AND pp.id < {:id})) 
    AND pp.depth={:depth}
	AND (CASE WHEN {:profile} = 'general' THEN 1 ELSE pp.user = {:profile} END)
  )
ORDER BY pp.created DESC, pp.id DESC
LIMIT 10
							
`).Bind(dbx.Params{
"user": c.QueryParam("user"), 
"id": c.QueryParam("id"), 
"created": c.QueryParam("created"),
"depth": c.QueryParam("depth"),
"profile": c.QueryParam("profile"),
}).All(&result)

			if queryErr != nil {
				fmt.Print("\n")
				return apis.NewBadRequestError("Failed to fetch custom posts ", queryErr)
			}
			return c.JSON(200, result)
		},
		Middlewares: []echo.MiddlewareFunc{apis.ActivityLogger(app)},
		Name:        "",
	}
}
