migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kdr3guxa",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "vbse1l0qet8z4hu",
      "cascadeDelete": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ondkz2dc",
    "name": "depth",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu")

  // remove
  collection.schema.removeField("kdr3guxa")

  // remove
  collection.schema.removeField("ondkz2dc")

  return dao.saveCollection(collection)
})
