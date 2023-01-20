migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a0u9jwo7",
    "name": "body",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 300,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
