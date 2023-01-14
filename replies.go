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
func CustomRepliesRoute(app *pocketbase.PocketBase) echo.Route {
	return echo.Route{
		Method: http.MethodGet,
		Path:   "/custom_replies",
		Handler: func(c echo.Context) error {
			result := []*struct {
				CreatorId    string `db:"creator_id" json:"creator_id"`
				CreatorName  string `db:"creator_name" json:"creator_name"`
				CreatorImage string `db:"creator_image" json:"creator_image"`

				ReplyId       string `db:"reply_id" json:"reply_id"`
				ReplyBody     string `db:"reply_body" json:"reply_body"`
				ReplyMedia    string `db:"reply_media" json:"reply_media"`

				RepliedAT    string `db:"replied_at" json:"replied_at"`
				ReplyDepth   string `db:"reply_depth" json:"reply_depth"`
				ReplyingTo   string `db:"replying_to" json:"replying_to"`

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

pp.id reply_id,
pp.body reply_body,
pp.media reply_media,

pp.created replied_at,
pp.depth reply_depth,
pp.parent replying_to,


(SELECT COUNT(*) FROM reply_reactions WHERE liked = 'yes' AND post = pp.id) likes,
IFNULL((SELECT  liked FROM reply_reactions WHERE user = {:user} AND post = pp.id),'virgin')mylike,
IFNULL((SELECT id FROM reply_reactions WHERE user = {:user} AND post = pp.id),"virgin") reaction_id,
(SELECT COUNT(*) FROM replies WHERE post = pp.id) replies,
IFNULL((SELECT id FROM replies WHERE user = {:user} AND post = pp.id),'virgin')myreply


FROM replies pp
LEFT JOIN devs dv on dv.id = pp.user
LEFT JOIN replies rep on rep.post = pp.id 
WHERE (
    (pp.created < {:created} OR 
    (pp.created = {:created} AND pp.id < {:id})) 
    AND pp.post={:op} AND pp.parent = {:parent}
  )
ORDER BY pp.created DESC, pp.id DESC
LIMIT 10
							
`).Bind(dbx.Params{
	"user": c.QueryParam("user"),
	 "id": c.QueryParam("id"), 
	"created": c.QueryParam("created"),
	"op": c.QueryParam("op"),
	"parent": c.QueryParam("parent"), 

}).All(&result)
			if queryErr != nil {
				fmt.Print("\n")
				return apis.NewBadRequestError("Failed to fetch custom replies ", queryErr)
			}
			return c.JSON(200, result)
		},
		Middlewares: []echo.MiddlewareFunc{apis.ActivityLogger(app)},
		Name:        "",
	}
}
