// migrate(
//   (db) => {
//     // up
//     const collection = new Collection({
//       id: '4wcaptlpivjve1o',
//       created: '2023-01-07 05:35:56.662Z',
//       updated: '2023-01-07 05:35:56.662Z',
//       name: 'reactions',
//       type: 'base',
//       system: false,
//       schema: [
//         {
//           system: false,
//           id: 'nyreyfss',
//           name: 'post',
//           type: 'relation',
//           required: true,
//           unique: false,
//           options: {
//             maxSelect: 1,
//             collectionId: 'vbse1l0qet8z4hu',
//             cascadeDelete: true
//           }
//         },
//         {
//           system: false,
//           id: 'sgwol8dx',
//           name: 'user',
//           type: 'relation',
//           required: true,
//           unique: false,
//           options: {
//             maxSelect: 1,
//             collectionId: '5sckr8a13top3zs',
//             cascadeDelete: false
//           }
//         },
//         {
//           system: false,
//           id: 'iyckrxwp',
//           name: 'liked',
//           type: 'select',
//           required: true,
//           unique: false,
//           options: {
//             maxSelect: 1,
//             values: ['yes', 'no']
//           }
//         }
//       ],
//       listRule: null,
//       viewRule: null,
//       createRule: null,
//       updateRule: null,
//       deleteRule: null,
//       options: {}
//     });

//     return Dao(db).saveCollection(collection);
//   },
//   (db) => {
//     // down
//     const dao = new Dao(db);
//     const collection = dao.findCollectionByNameOrId('4wcaptlpivjve1o');

//     return dao.deleteCollection(collection);
//   }
// );
