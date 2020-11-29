import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAvDvG3C4LprYfmoNERcNwWqziIe-QZ1oQ",
  authDomain: "expensify-91809.firebaseapp.com",
  databaseURL: "https://expensify-91809.firebaseio.com",
  projectId: "expensify-91809",
  storageBucket: "expensify-91809.appspot.com",
  messagingSenderId: "724935341967",
  appId: "1:724935341967:web:4bfd22ab05d3221e633dfa",
  measurementId: "G-R3M5N6GQ72",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database
  .ref()
  .set({
    name: "Nick de Waal",
    age: 26,
    stressLevel: "6",
    job: {
      title: "Software developer",
      company: "Google",
    },
    location: {
      city: "Busan",
      country: "Canada",
    },
  })
  .then(() => {
    console.log("Data is saved");
  })
  .catch((error) => {
    console.log("error", error);
  });

database.ref().update({
  "job/company": "Amazon",
  stressLevel: 9,
  "location/city": "seatle",
});

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
