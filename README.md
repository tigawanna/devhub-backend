# pocketbase as framework

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
## custom posts route

define custom posts route logic in 
[posts.go](posts.go)

then add the route in main.go

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
![custom_posts](https://user-images.githubusercontent.com/72096712/212390604-b102e1ef-346e-4bce-9d50-e12af309162c.png)


## custom replies endpoint

define custom replies route logic in 
[replies.go](replies.go)

and add the route in main.go
```go
	// Define the custom post route
	customPostsRoute := CustomPostsRoute(app)
	customRepliesRoute := CustomRepliesRoute(app)
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.AddRoute(customPostsRoute)
		e.Router.AddRoute(customRepliesRoute)

		return nil
	})
```


```sh
/custom_replies
```
Response
```ts
export interface CusromRepliesType {
    creator_id:    string;
    creator_name:  string;
    creator_image: string;
    reply_id:      string;
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
![custom_replies](https://user-images.githubusercontent.com/72096712/212390103-f2d11c83-34ef-4ed7-a6b6-78c5c9ffd12f.png)

