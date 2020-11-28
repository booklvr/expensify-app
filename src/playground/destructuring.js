// const person = {
//   name: "Nick",
//   age: 31,
//   location: {
//     city: "Busan",
//     temp: 15,
//   },
// };

// const { name = "Anonymous", age } = person;

// console.log(`${name} is ${age}.`);

// const { temp, city } = person.location;

// console.log(`It's ${temp} in ${city}.`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     // name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

// ARRAY DESTRUCTURING

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147",
];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state} `);

const item = ["Coffee (hot)", "$2.00", "$2.50", "2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A ${itemName} costs ${mediumPrice}`);
