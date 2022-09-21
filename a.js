// var a: number=100;
// var b="abrakadabra";
// let f1: number[]=[1,2,3,4]
var Name = "Onkar";
var age = 24;
var isFetching = false;
var array = [1, 2, 3, 4];
var arrayofstrings = ["onkar", "deshmukh"];
var Taple;
Taple = [2, true, "ddcdvfbvv"];
var data;
(function (data) {
    data["User"] = "onkar";
    data["SuperUser"] = "onkarrr";
    data["Admin"] = "onkarr";
    data["SuperAdmin"] = "onkarrrr";
})(data || (data = {}));
function add(x, y) {
    if (x === void 0) { x = 50; }
    if (y === void 0) { y = 50; }
    return console.log(x + y);
}
function divide(x, y) {
    if (x === void 0) { x = 100; }
    if (y === void 0) { y = 50; }
    return console.log(x / y);
}
function names(x) {
    if (x === void 0) { x = "onkar"; }
    console.log(x);
}
function getName(_a) {
    var fname = _a.fname, lname = _a.lname;
    console.log(fname + " " + lname);
}
//  data=[
//   const PersonDetails :{
// }]
var persons = [];
function PhoneBook(data) {
    persons.push(data);
    return persons;
}
var User = {
    type: 'user',
    name: 'onk',
    age: 24,
    occupation: "engineer"
};
var Admin = {
    type: 'admin',
    name: "onk",
    age: 24,
    role: "bjbhjb"
};
function check(User) {
    return User.type;
}
console.log(check(User));
