migrate((db) => {
  const collection = new Collection({
    "id": "ajyr4m7354zhpcb",
    "created": "2023-01-25 13:45:03.596Z",
    "updated": "2023-01-25 13:45:03.596Z",
    "name": "hobby",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5tufsowc",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
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
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ajyr4m7354zhpcb");

  return dao.deleteCollection(collection);
})
