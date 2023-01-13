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

<details>
<summary> Click to expand posts.go</summary>

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

// CustomPostRoute  defines the HTTP route for getting custom posts
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

(SELECT COUNT(*) FROM reactions WHERE liked = 'yes' AND post = pp.id) likes,
IFNULL((SELECT  liked FROM reactions WHERE user = {:user} AND post = pp.id),'virgin')mylike,
IFNULL((SELECT id FROM reactions WHERE user = {:user} AND post = pp.id),"virgin") reaction_id,

(SELECT COUNT(*) FROM replies WHERE post = pp.id) replies,
IFNULL((SELECT  id FROM replies WHERE user = {:user}  AND post = pp.id),'virgin')myreply
 
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
</details>


```sh
/custom_posts
```

|query parameter|description|
|----------------|----------|
| user | logged in user id |
|id | record id 
| created   | SQLite date format  |


The initial request requires 
`user`: the logged in user id and `created`: the latest date the rest can be sent as empty strings 
```js
const currentdate = dayjs(new Date()).format("[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]")
```


returns
```ts
export interface CustomPostType {
    creator_id: string;
    creator_name: string;
    creator_image: string;
    post_id: string;
    post_body: string;
    post_media: string;
    created_at: string;
    likes: number;
    mylike: "yes" | "no" | "virgin";
    myreply: string | "virgin";
    replies: number;
    reaction_id: string;
}
```


## custom replies endpoint

```sh
/custom_replies
```
Response
```ts
export interface Main {
    creator_id:    string;
    creator_name:  string;
    creator_image: string;
    op_post_id:    string;
    reply_body:    string;
    reply_media:   string;
    replied_at:    Date;
    reply_depth:   string;
    replying_to:   string;
    likes:         number;
    mylike:        string;
    reaction_id:   string;
    replies:       number;
    myreply:       string;
}
```

|query parameter|description|
|----------------|----------|
| user | logged in user id |
|id | record id 
| created   | SQLite date format  |
| parent    | reply id for the reply its nested under|
| op | original post all the replies are on |



The initial request requires 
`user`: the logged in user id and `created`: the latest date the rest can be sent as empty strings 
```js
const currentdate = dayjs(new Date()).format("[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]")
```

