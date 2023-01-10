migrate((db) => {
  const collection = new Collection({
    "id": "bmpn2ceujltwqy7",
    "created": "2023-01-10 14:41:42.397Z",
    "updated": "2023-01-10 14:41:42.397Z",
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
      }
    ],
    "listRule": "@request.auth.id !=\"\"",
    "viewRule": "@request.auth.id !=\"\"",
    "createRule": "@request.auth.id !=\"\"",
    "updateRule": "@request.auth.id = user.id",
    "deleteRule": "@request.auth.id = user.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bmpn2ceujltwqy7");

  return dao.deleteCollection(collection);
})
