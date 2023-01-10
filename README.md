# steps to recreate

- clone your pocketbase fork
```sh
git clone https://github.com/tigawanna/my-pocketbase-fork.git
```

-  get the main.go file inside `examples/base`

- add it to another directory and run

```sh
go mod init "your new package name"
go mod tidy
```
## progress
- added posts route 

```go
main.go
	// ---------------------------------------------------------------
	// Plugins and hooks:
	// ---------------------------------------------------------------
	// Define the custom post route
	customPostRoute := CustomPostRoute(app)
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.AddRoute(customPostRoute)

		return nil
	})

```

```go
posts.go


package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
)

// CustomPostRoute defines the HTTP route for getting custom posts
func CustomPostRoute(app *pocketbase.PocketBase) echo.Route {
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
				CreatedAT    string `db:"created_at" json:"created_at"`
				Likes        int    `db:"likes" json:"likes"`
				MyLike       string `db:"mylike" json:"mylike"`
				ReactionId   string `db:"reaction_id" json:"reaction_id"`
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

(SELECT COUNT(*) FROM reactions WHERE liked = 'yes' AND post = pp.id) likes,
IFNULL((SELECT  liked FROM reactions WHERE user = {:user} AND post = pp.id),'virgin')mylike,
IFNULL((SELECT id FROM reactions WHERE user = {:user} AND post = pp.id),"virgin") reaction_id
FROM posts pp
LEFT JOIN devs dv on dv.id = pp.user
WHERE (pp.created < {:created} OR (pp.created = {:created} AND pp.id < {:id}))
ORDER BY pp.created DESC, pp.id DESC
LIMIT 10
							
`).Bind(dbx.Params{"user": c.QueryParam("user"), "id": c.QueryParam("id"), "created": c.QueryParam("created")}).All(&result)
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
```
