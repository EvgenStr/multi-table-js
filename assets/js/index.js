const table = {};

function multiTable(x) {
  for (let i = 1; i <= x; i++) {
    for (let r = 1; r <= x; r++) {
      table[`${i} * ${r} = `] = i * r;
    }
  }
}

multiTable(10);
console.log(table);

// const SAFE_MODE = true;

// const PROTOCOL_HTTP = "http://";
// const PROTOCOL_HTTPS = "https://";

// const SERVER_IP = "localhost";
// const PORT = 3000;

// function CreateQuery(path = "/", isSave = true) {
//   if (path.charAt(0) !== "/") path = `/${path}`;
//   return isSave
//     ? `${PROTOCOL_HTTP}${SERVER_IP}:${PORT}${path}`
//     : `${PROTOCOL_HTTPS}${SERVER_IP}${path}`;
//   return `${isSave ? PROTOCOL_HTTP : PROTOCOL_HTTPS}${SERVER_IP}${
//     isSave ? ":" + PORT : ""
//   }${path}`;
// }

// const User = function (firsName, lastName, age, isMale) {
//   this.firstName = firsName;
//   this.lastName = lastName;
//   this.age = age;
//   this.isMale = isMale;
//   this.sayHello = function () {
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
//   };
//   this.isAdult = function () {
//     return this.age >= 18;
//   };
// };

// const user1 = new User("John", "Doe", 18, true);
// console.log(user1);
