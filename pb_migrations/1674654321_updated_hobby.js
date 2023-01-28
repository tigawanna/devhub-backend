migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ajyr4m7354zhpcb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pfvwkinz",
    "name": "refresh_token",
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
  const collection = dao.findCollectionByNameOrId("ajyr4m7354zhpcb")

  // remove
  collection.schema.removeField("pfvwkinz")

  return dao.saveCollection(collection)
})
