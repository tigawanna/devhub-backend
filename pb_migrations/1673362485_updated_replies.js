migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bmpn2ceujltwqy7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bljwr3b0",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "bmpn2ceujltwqy7",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bmpn2ceujltwqy7")

  // remove
  collection.schema.removeField("bljwr3b0")

  return dao.saveCollection(collection)
})
