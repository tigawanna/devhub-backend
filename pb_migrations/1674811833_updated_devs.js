migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5sckr8a13top3zs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xi9j9mna",
    "name": "githuburl",
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

  // remove
  collection.schema.removeField("xi9j9mna")

  return dao.saveCollection(collection)
})
