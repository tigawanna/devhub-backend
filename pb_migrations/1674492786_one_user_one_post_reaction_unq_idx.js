migrate((db) => {
  // up
  db.createUniqueIndex("reactions", "one_user_one_post_reaction_unq_idx", "user", "post").execute()
}, (db) => {
  // down
  db.dropIndex("reactions", "one_user_one_post_reaction_unq_idx").execute()
})
