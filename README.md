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




## ⚠️⚠️
this method of having separate tables for posts and replies is getting hard to implement especially with mutations and aggregated fields , will switch to making replies in the posts table but with different depth levels 

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

## deploying to fly.io

Add a [Dockerfile](Dockerfile)

run 
```sh
fly launch
```
![fly launch](https://user-images.githubusercontent.com/72096712/213918321-0253f043-4f65-4838-a8f8-bf0d4c0c4814.png)

then add this to the fly.toml

```toml
[mounts]
  destination = "/pb/pb_data"
  source = "pb_data"
```



then you can run 
```sh 
fly deploy 
```
if it takes too long you can configure docker locally and use
```sh
fly deploy --local-only 
```
![fly_deploy](https://user-images.githubusercontent.com/72096712/213918782-fffdb8f0-1f55-4080-be46-22c9e2e110c3.png)

