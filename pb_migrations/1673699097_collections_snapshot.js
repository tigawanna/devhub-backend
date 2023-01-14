migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-01-02 05:10:56.010Z",
      "updated": "2023-01-14 09:14:48.595Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": null
          }
        }
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "5sckr8a13top3zs",
      "created": "2023-01-02 05:23:29.482Z",
      "updated": "2023-01-14 09:14:48.596Z",
      "name": "devs",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "dhr1v7xa",
          "name": "avatar",
          "type": "url",
          "required": false,
          "unique": false,
          "options": {
            "exceptDomains": null,
            "onlyDomains": null
          }
        },
        {
          "system": false,
          "id": "jojjscns",
          "name": "accessToken",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "jqjtptoe",
          "name": "displayname",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "@request.auth.id = id",
      "deleteRule": null,
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "vbse1l0qet8z4hu",
      "created": "2023-01-07 04:50:07.143Z",
      "updated": "2023-01-14 09:14:48.596Z",
      "name": "posts",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "chnflxdo",
          "name": "title",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "a0u9jwo7",
          "name": "body",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ny6krdw9",
          "name": "media",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": []
          }
        },
        {
          "system": false,
          "id": "ijbw4tgl",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "5sckr8a13top3zs",
            "cascadeDelete": false
          }
        }
      ],
      "listRule": "@request.auth.id != ''",
      "viewRule": "@request.auth.id != ''",
      "createRule": "@request.auth.id = user",
      "updateRule": "@request.auth.id = user",
      "deleteRule": "@request.auth.id = user",
      "options": {}
    },
    {
      "id": "4wcaptlpivjve1o",
      "created": "2023-01-07 05:35:56.662Z",
      "updated": "2023-01-14 12:13:54.497Z",
      "name": "reactions",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "nyreyfss",
          "name": "post",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "vbse1l0qet8z4hu",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "sgwol8dx",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "5sckr8a13top3zs",
            "cascadeDelete": false
          }
        },
        {
          "system": false,
          "id": "iyckrxwp",
          "name": "liked",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "yes",
              "no"
            ]
          }
        }
      ],
      "listRule": "@request.auth.id !=\"\"",
      "viewRule": "@request.auth.id !=\"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id = user",
      "deleteRule": "@request.auth.id = user",
      "options": {}
    },
    {
      "id": "bmpn2ceujltwqy7",
      "created": "2023-01-10 14:41:42.397Z",
      "updated": "2023-01-14 09:14:48.597Z",
      "name": "replies",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "f94qdwwh",
          "name": "user",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "5sckr8a13top3zs",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "sxzqsprc",
          "name": "post",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "vbse1l0qet8z4hu",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "gx6ygzg3",
          "name": "body",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "oc2wko4y",
          "name": "media",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": []
          }
        },
        {
          "system": false,
          "id": "jziagucc",
          "name": "depth",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null
          }
        },
        {
          "system": false,
          "id": "bljwr3b0",
          "name": "parent",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "bmpn2ceujltwqy7",
            "cascadeDelete": false
          }
        }
      ],
      "listRule": "@request.auth.id !=\"\"",
      "viewRule": "@request.auth.id !=\"\"",
      "createRule": "@request.auth.id !=\"\"",
      "updateRule": "@request.auth.id = user.id",
      "deleteRule": "@request.auth.id = user.id",
      "options": {}
    },
    {
      "id": "x6ltpo56lq1vyv4",
      "created": "2023-01-14 12:00:20.945Z",
      "updated": "2023-01-14 12:00:20.945Z",
      "name": "reply_reactions",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "xad6ds4r",
          "name": "post",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "bmpn2ceujltwqy7",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "smexo5i3",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "5sckr8a13top3zs",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "im2k1rka",
          "name": "liked",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "yes",
              "no"
            ]
          }
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
