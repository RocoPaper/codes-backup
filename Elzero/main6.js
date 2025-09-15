//* Destructuring Arrays

const myFrineds = ['Ahmed', 'Khaled', 'Mosa', 'Abdullah']

// console.log(myFrineds[1]); // normal way

const [a, k, m, b] = myFrineds

console.log(a, k, m, b);

//* Nested Arrays
const myFrineds1 = ['Ahmed', 'Khaled', 'Mosa', 'Abdullah', ['Rami', 'Aziz', ['Zain', 'Hassan']]];

const [a1, , , , [b1, ,[,c1]]] = myFrineds1
console.log(a1, b1, c1);



//* Swap values

let book = "Video";
let video = "Book";

[book, video] = [video, book];

console.log(book);
console.log(video);


/*
    Destructuring
  - Destructuring Object
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

// same key names 
const {theName, theAge, theCountry} = user;

console.log(theName, theAge, theCountry)

// change the variable names
const {theName: name, theAge: g, theCountry: cn, skills: {html: ht, css}} = user;
console.log(name, g, cn, ht, css);

const { html: skillOne, css: skillTwo } = user.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);


/*
    Destructuring
  - Destructuring Function Parameters
*/

const user1 = {
    name: 'Mosa', 
    age: 26,
    title: 'Student',
    skills: {
        rust: 50, 
        php: 90
    }
}

function getUser({name: n, age: a, skills: {rust: r, php}}){
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your Rust Skill Progress Is ${r}`);
}

getUser(user1)


//* Challenge

let chosen = 3;

let friends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
function getPerson(person, chosen) {
    const [person1, person2, person3] = person
    if(chosen === 1){
        let  {title, age, available, skills: [,skillTwo]} = person1
        console.log(title, age, available ? "Available" : "Not Available", skillTwo)
    }else if(chosen === 2){
        let  {title, age, available, skills: [,skillTwo]} = person2
        console.log(title, age, available ? "Available" : "Not Available", skillTwo)
    }else if(chosen === 3){
        let  {title, age, available, skills: [,skillTwo]} = person3
        console.log(title, age, available ? "Available" : "Not Available", skillTwo)
    }else {
        console.log("This person is Not here!")
    }
}

getPerson(friends, chosen)
// let [
//     {title: aTitle, age: aage, available: aavailable, skills: [sk1, sk2]}, ,
//     {title: bTitle, age: bage, available: bavailable, skills: [sk]}] = friends
// console.log(aTitle, aage, aavailable, hh1)
// console.log(bTitle, bage, bavailable, hh2)

// Some practice on Objects
const myObj = new Object
myObj.name = 'Rami'
// console.log(myObj)

let obj1 = {
    prop1: 1,
    methd: function() {
        return this.prop1
    }
}

let obj2 = {
    prop2: 2,
    methd: function() {
        return this.prop2
    }
}

let targetObject = {
    prop1: 5,
    prop3: 3
}

let finalObject = Object.assign({}, targetObject)

console.log(targetObject)
console.log(finalObject)
console.log(finalObject === targetObject)


// من برا الدرس قناة ديكود
const student = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    location: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1'
}  

const studentKeys = Object.keys(student)
const studentValues = Object.values(student)
const entries = Object.entries(student)

// الطريقة القديمة 
for (const key in student) {
    if(student.hasOwnProperty(key)){
        console.log(student[key]);
    }
}

for (const [key, value] of entries) {
    console.log(`${key} => ${value}`)
}
