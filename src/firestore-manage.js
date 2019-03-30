// //Manual request of FIRESTORE (google documentation)
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

console.log(`HELLO! Firestore is here!`);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

//////Add DATA to FIRESTORE ///


//LEARNING COLLECTION
  db.collection("theClaudiaLearningCollection").add({ //creates COLLECTION "users" then adds a DOCUMENT into it
    first: "Claudia",
    last: "Garfias",
    born: 1914,
    profilePic: "https://claudiagarfias.works/contents/uploads/media/claudia-garfias-web-developer-profile-photo.jpg?"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id); //DOCUMENT ID
})
.catch(function(error) {
    console.error("Error adding document: ", error.code);//Catches ERROR
});

// //POSTS COLLECTION
// db.collection("ourSocialAppPosts").add({ //creates COLLECTION "users" then adds a DOCUMENT into it
//     postText: "Lorem Ipsum Texto de la publicación",
//     //postImage: "https://claudiagarfias.works/contents/uploads/media/claudia-garfias-web-developer-profile-photo.jpg?",
//     likes: [],
//     postvisibility: "public"
// })
// .then(function(docRef) {
//     console.log("ID del POST: ", docRef.id); //DOCUMENT ID
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error.code);//Catches ERROR
// });