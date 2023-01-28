migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vlkwmqnj1lduoc2");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "vlkwmqnj1lduoc2",
    "created": "2023-01-25 13:43:47.539Z",
    "updated": "2023-01-25 13:43:47.539Z",
    "name": "hobby",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f2q2yas4",
        "name": "refresh_token",
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
        "id": "ywyw52hy",
        "name": "access_token",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
