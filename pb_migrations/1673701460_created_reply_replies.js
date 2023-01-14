migrate((db) => {
  const collection = new Collection({
    "id": "a5x0575e5gmm2rq",
    "created": "2023-01-14 13:04:20.553Z",
    "updated": "2023-01-14 13:04:20.553Z",
    "name": "reply_replies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wm6zbqvi",
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
        "id": "zbhanawn",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": true,
        "options": {
          "maxSelect": 1,
          "collectionId": "5sckr8a13top3zs",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "rdwcoqex",
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
        "id": "g3wp00hd",
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
            "image/gif",
            "image/webp"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "sjnoluc1",
        "name": "depth",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "zzeakarc",
        "name": "parent",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "bmpn2ceujltwqy7",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a5x0575e5gmm2rq");

  return dao.deleteCollection(collection);
})
