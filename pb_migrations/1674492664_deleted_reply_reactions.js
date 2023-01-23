migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x6ltpo56lq1vyv4");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "x6ltpo56lq1vyv4",
    "created": "2023-01-14 12:00:20.945Z",
    "updated": "2023-01-23 16:49:54.032Z",
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
    "listRule": "@request.auth.id !=\"\"",
    "viewRule": "@request.auth.id !=\"\"",
    "createRule": "@request.auth.id !=\"\"",
    "updateRule": "@request.auth.id = user",
    "deleteRule": "@request.auth.id = user",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
