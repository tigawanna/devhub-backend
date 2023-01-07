// migrate(
//   (db) => {
//     const collection = new Collection({
//       id: "vbse1l0qet8z4hu",
//       created: "2023-01-07 04:50:07.143Z",
//       updated: "2023-01-07 04:50:07.143Z",
//       name: "posts",
//       type: "base",
//       system: false,
//       schema: [
//         {
//           system: false,
//           id: "chnflxdo",
//           name: "title",
//           type: "text",
//           required: false,
//           unique: false,
//           options: {
//             min: null,
//             max: null,
//             pattern: "",
//           },
//         },
//         {
//           system: false,
//           id: "a0u9jwo7",
//           name: "body",
//           type: "text",
//           required: false,
//           unique: false,
//           options: {
//             min: null,
//             max: null,
//             pattern: "",
//           },
//         },
//         {
//           system: false,
//           id: "ny6krdw9",
//           name: "media",
//           type: "file",
//           required: false,
//           unique: false,
//           options: {
//             maxSelect: 1,
//             maxSize: 5242880,
//             mimeTypes: [
//               "image/jpg",
//               "image/jpeg",
//               "image/png",
//               "image/svg+xml",
//               "image/gif",
//             ],
//             thumbs: [],
//           },
//         },
//         {
//           system: false,
//           id: "ijbw4tgl",
//           name: "user",
//           type: "relation",
//           required: true,
//           unique: false,
//           options: {
//             maxSelect: 1,
//             collectionId: "5sckr8a13top3zs",
//             cascadeDelete: false,
//           },
//         },
//       ],
//       listRule: null,
//       viewRule: null,
//       createRule: null,
//       updateRule: null,
//       deleteRule: null,
//       options: {},
//     });

//     return Dao(db).saveCollection(collection);
//   },
//   (db) => {
//     const dao = new Dao(db);
//     const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu");

//     return dao.deleteCollection(collection);
//   }
// );
