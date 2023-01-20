migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5sckr8a13top3zs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pogclk1x",
    "name": "refreshtoken",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jyr6ydsa",
    "name": "bio",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 300,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jojjscns",
    "name": "accesstoken",
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
  collection.schema.removeField("pogclk1x")

  // remove
  collection.schema.removeField("jyr6ydsa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jojjscns",
    "name": "accessToken",
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
