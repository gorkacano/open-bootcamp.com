const myPersonalData = {
  name: "Gorka",
  surename: "Cano",
  age: 38,
  height: 1.80,
  isDeveloper: true
}

const age = myPersonalData.age;
console.log(age);

const contacts = [
  myPersonalData,
  {
    name: "Asier",
    surename: "Garcia",
    age: 38,
    height: 1.95,
    isDeveloper: true
  },
  {
    name: "Lydia",
    surename: "Rosario",
    age: 35,
    height: 1.60,
    isDeveloper: false
  }
];

console.log(contacts);

const sortedContacts = contacts.sort((a,b) => a.age - b.age);
console.log(sortedContacts);