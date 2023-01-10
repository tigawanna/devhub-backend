migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bmpn2ceujltwqy7")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bmpn2ceujltwqy7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jziagucc",
    "name": "depth",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
