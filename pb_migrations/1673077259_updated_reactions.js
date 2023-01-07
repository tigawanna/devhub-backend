migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wcaptlpivjve1o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iyckrxwp",
    "name": "liked",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "yes",
        "no"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wcaptlpivjve1o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iyckrxwp",
    "name": "liked",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "ys",
        "no"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
