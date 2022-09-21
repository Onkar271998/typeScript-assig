// var a: number=100;

// var b="abrakadabra";

// let f1: number[]=[1,2,3,4]

let Name: string = "Onkar";

let age: number = 24;

let isFetching: boolean = false;

let array: number[] = [1, 2, 3, 4];
let arrayofstrings: string[] = ["onkar", "deshmukh"];

let Taple: [number, boolean, string];
Taple = [2, true, "ddcdvfbvv"];

enum data {
  User = "onkar",
  SuperUser = "onkarrr",
  Admin = "onkarr",
  SuperAdmin = "onkarrrr",
}

function add(x: number = 50, y: number = 50) {
  return console.log(x + y);
}

function divide(x: number = 100, y: number = 50) {
  return console.log(x / y);
}

function names(x: string = "onkar") {
  console.log(x);
}


interface User {
  title: string;
  status: boolean;
  id: number;
 
}    //not 


function getName({fname,lname}){
     console.log(fname+" "+lname)
}


interface Address {
 
  houseNumber:number 
  street:string
  city:string
  state:string
  postalCode:number[] 
  country:string
 
}


interface PersonDetails {
  prefix:string;
  phone:number[];
  address:string[];
  email:string;
  firstname:string;
  lastname:string;

}

//  data=[
//   const PersonDetails :{

// }]

let persons :PersonDetails[] =[]

function PhoneBook (data:PersonDetails) 
{
     persons.push(data)
     return persons

}




interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

const   User =
{
  type: 'user',
  name: 'onk',
  age: 24,
  occupation:"engineer"
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

const  Admin =
{
  type: 'admin',
  name: "onk",
  age: 24,
  role: "bjbhjb",
}

function check(User) {
   
  return User.type
}
console.log(check(User))





