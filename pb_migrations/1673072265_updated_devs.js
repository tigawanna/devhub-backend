migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5sckr8a13top3zs")

  // remove
  collection.schema.removeField("jqjtptoe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pyqotc3s",
    "name": "bio",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5sckr8a13top3zs")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("pyqotc3s")

  return dao.saveCollection(collection)
})
