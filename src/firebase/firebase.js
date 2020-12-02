import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on(
//   "value",
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   },
//   (e) => {
//     console.log("Error with data fetching");
//   }
// );

// database.ref("expenses").push({
//   description: "description 3",
//   note: "note 3",
//   amount: 3,
//   createdAt: 3,
// });

// database.ref("notes/-MNMsO-wBWfEKTWJEse2").remove();

// database.ref("notes/-MNMrj0xN1g9Cps7gwxX").update({
//   body: "please update the body",
// });

// database
//   .ref("notes/-MNMrUPFyleEa-dBhWW_")
//   .update({ body: "Who knows what this is?" });

// const firebaseNotes = {
//   notes: {
//     asdfasfd: {
//       title: "First note",
//       body: "This is my note",
//     },
//     asfdadsfasfd: {
//       title: "second note",
//       body: "This is second note",
//     },
//   },
// };

// const notes = [
//   {
//     id: "12",
//     title: "First note",
//     body: "This is my note",
//   },
//   {
//     id: "13",
//     title: "second note",
//     body: "This is second note",
//   },
// ];

// database.ref("notes").set(firebaseNotes);

// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => console.log("error fetching data:", e));

// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//   },
//   (e) => {
//     console.log("Error with data fetching");
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(27);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10000);

// database
//   .ref()
//   .set({
//     name: "Nick de Waal",
//     age: 26,
//     stressLevel: "6",
//     job: {
//       title: "Software developer",
//       company: "Google",
//     },
//     location: {
//       city: "Busan",
//       country: "Canada",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// database.ref().update({
//   "job/company": "Amazon",
//   stressLevel: 9,
//   "location/city": "seatle",
// });

// database.ref().set("This is my data.");
// database.ref("age").set(27);
// database.ref("location/city").set("Abbotsford");

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => console.log("data was removed"))
//   .catch((error) => console.log("e", e));

// database
//   .ref("isSingle")
//   .set(null)
//   .then(() => console.log("data was removed"))
//   .catch((error) => console.log("error", e));

// database.ref().update({
//   name: "booklvr",
//   age: 29,
//   job: "manager",
//   "location/city": "Boston",
// });
