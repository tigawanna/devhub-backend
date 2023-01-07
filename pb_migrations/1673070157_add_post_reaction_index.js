// migrate((db) => {
//   // add up queries...
//   db.createUniqueIndex(
//     'reactions',
//     'reaction_user_post_idx',
//     'user',
//     'post'
//   ).execute();
// }, (db) => {
//   // add down queries...
//   db.dropIndex('reactions', 'reaction_user_post_idx').execute();
// });
