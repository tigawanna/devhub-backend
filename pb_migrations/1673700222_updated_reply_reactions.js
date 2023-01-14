migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x6ltpo56lq1vyv4")

  collection.listRule = "@request.auth.id !=\"\""
  collection.viewRule = "@request.auth.id !=\"\""
  collection.createRule = "@request.auth.id !=\"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x6ltpo56lq1vyv4")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
