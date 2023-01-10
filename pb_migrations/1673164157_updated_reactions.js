migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wcaptlpivjve1o")

  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id = user"
  collection.deleteRule = "@request.auth.id = user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wcaptlpivjve1o")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
