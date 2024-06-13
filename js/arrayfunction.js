let users = [
  {
    name: "ram",
    address: "xyz",
  },
  {
    name: "shyam",
    address: "abc",
  },
];

users.forEach((element) => {
  console.log(element.name + " lives in " + element.address);
});

/* cart database */
let cartItems = [
  {
    user: {
      name: "Ram",
      adress: "abc",
      items: [
        { name: "watch", price: 1000 },
        { name: "keybord", price: 500 },
      ],
    },
  },
  {
    user: {
      name: "hari",
      adress: "xyz",
      items: [
        { name: "watch", price: 2000 },
        { name: "keybord", price: 5000 },
      ],
    },
  },
  {
    user: {
      name: "sita",
      adress: "xyz",
      items: [],
    },
  },
];

// using loop

// for (let index = 0; index < cartItems.length; index++) {
//   let user = cartItems[index].user;
//   let total = 0;
//   for (let j = 0; j < user.items.length; j++) {
//     total += user.items[j].price;
//   }
//   console.log(`${user.name} has ordered of ${total}`);
// }

// using for each

cartItems.forEach((element) => {
  let total = 0;
  element.user.items.forEach((element) => {
    total = total + element.price;
  });
  console.log(`${element.user.name} has ordered of ${total}`);
});

// push function using if else

// let filteredCartItems = [];
// for (let index = 0; index < cartItems.length; index++) {
//   let user = cartItems[index].user;
//   if (user.items.length > 0) {
//     filteredCartItems.push(cartItems[index]);
//   }
// }
// console.log(filteredCartItems);

// push function using forEach

// let filteredCartItems = [];
// cartItems.forEach((element) => {
//   if (element.user.items.length > 0) {
//     filteredCartItems.push(element);
//   }
// });
// console.log(filteredCartItems);

// push function using filter

let filteredCartItems = cartItems.filter((element) => {
  if (element.user.items.length > 0) {
    return true;
  }
});
console.log(filteredCartItems);

let student1 = {
  name: "ram",
  gender: "male",
  paidStatus: false,
  hasScholorship: true,
  hasMetAttandence: true,
};

let student2 = {
  name: "sita",
  gender: "female",
  paidStatus: false,
  hasScholorship: false,
  hasMetAttandence: false,
};

let student3 = {
  name: "gita",
  gender: "others",
  paidStatus: true,
  hasScholorship: true,
  hasMetAttandence: false,
};

let students = [student1, student2, student3];
let eligibleStudents = [];
let nonEligibleStudents = [];

eligibleStudents = students.filter((element) => {
  if (
    (element.hasScholorship || element.paidStatus) &&
    element.hasMetAttandence
  ) {
    return true;
  }
});
console.log(eligibleStudents);

/* eligible students */
/* non eligible students */

// map funtion and reducing code as much as possible

let numbers = [1, 2, 3, 4, 5];

console.log("original array is " + numbers);

let doubleNumbers = numbers.map((element) => element * 2);
console.log("double of the above array is " + doubleNumbers);

let tripleNumbers = numbers.map((element) => element * 3);
console.log("triple of the above array is " + tripleNumbers);

let names = ["ram", "hari", "shyam", "gita"]

// let newUsers = []

// names.forEach((name, index) => {
//     newUsers.push({
//         name: name,
//         email: `${name}@gmail.com`,
//         password: `${name}${index}`,
//     })
// })

// console.log(newUsers)

// using map

let fakeUsers = names.map((name, index) => {
    return {
        name,
        email: `${name}@gmail.com`,
        password: `${name}${index}`,
    }
})

console.log(fakeUsers)