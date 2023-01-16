migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu")

  // remove
  collection.schema.removeField("chnflxdo")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
