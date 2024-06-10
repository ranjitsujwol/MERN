greetings= "hi"
console.log(greetings, "ram");
console.log(greetings, "shyam");
console.log(greetings, "hari");
console.log(greetings, "laxman");
console.log(greetings, "sita");
console.log(greetings, "shreya");

let size
size = "small"
size = "medium"

console.log(size);

const PI = 3.14
console.log(PI);

let color = "red"
color = "blue"
color = "green"

let count;
console.log(count);

let colors = ["red","orange","green","purple"]
let names = ["ram","shyam","hari","laxman"]

console.log(colors[3])
console.log(colors)
colors[4]="white"
console.log(colors[4])
console.log(colors)

let user= [
    ["ram","shyam","hari"],[16,17,18],["m","m","m"],["9999999999","9999999998","9999999997"]
]

let users = {
    name: "ram",
    age: 16,
    gender: "M",
    number: 9888888888
}

users.age = "17";
console.log(users);

let user1 = {
    name: "ram",
    age: 16,
    gender: "M",
    address: "kathmandu"
}

let user2 = {
    name: "shyam",
    age: 17,
    gender: "M",
    address: "lalitpur"
}

let user3 = {
    name: "laxman",
    age: 18,
    gender: "M",
    address: "bhaktapur"
}

let user4 = {
    name: "sita",
    age: 19,
    gender: "F",
    address: "Nepalgunj"
}

userData= [
     {name: "ram",
    age: 16,
    gender: "M",
    address: "kathmandu"},
    
    {
        name: "shyam",
        age: -17,
        gender: "M",
        address: "lalitpur"
    },
    {
        name: "laxman",
        age: 18,
        gender: "M",
        address: "bhaktapur"
    },
    {
        name: "sita",
        age: 19,
        gender: "F",
        address: "Nepalgunj"
    }
];


console.log(userData);

let person = {
    name: "hari",
    age: 12,
    contact: 12321343,
    address: {
      permananetAddress: {
        province: "1",
        district: "jhapa",
        tole: "abc",
        municipality: {
          name: "jhapa nagarpalika",
          ward: 5,
        },
      },
      temporaryAddress: {
        province: "3",
        district: "kathamdnu",
        tole: "balaju",
        municipality: {
          name: "kathmandu nagarpalika",
          ward: 15,
        },
      },
    },
  }

  person.address.permananetAddress.houseNumber = 12;
  person.address.permananetAddress.municipality.name = "Kathmandu municipality";

  console.log( person.address.permananetAddress.houseNumber);
  console.log(person.address.permananetAddress.municipality.name)
  console.log( person);

userData[1].age = 17 
console.log(userData[1].age)

let classes = 
  [
    {
    name: "one",
    sectionA: {
      classteacher: "Ram",
      students: ["shyam","hari","laxman"]
    },
    sectionB: {
      classteacher: "Sita",
      students: ["rita","gita","ramita"]
    },
sectionC: {
      classteacher: "Amit",
      students: ["rita","gita","ramita"]
    }
  },
  {
    name: "two",
    sectionA: {
      classteacher: "Amit",
      students: ["shyam","hari","laxman"]
    },
    sectionB: {
      classteacher: "Anish",
      students: ["rita","gita","ramita"]
    },
sectionC: {
      classteacher: "Ayush",
      students: ["rita","gita","ramita"]
    }
  },
  ]

