//Variables in javascript
//Strings in javascript
let name = 'Ali Ahmad'; //variable declaration and initialization
console.log(name); //usage of variable
name = 'Zain'
console.log(name);
let fullname; //variable declaration with undefined status
fullname = 'Ali Hamza';
console.log(fullname);
var cnic = "35305-7896321-6";
console.log(cnic);

//Numbers in javascript
const age = 25;
console.log(age);
var x = 4545454848;
var y = 545454;
var check = false;
console.log(check);

check = (x > y);
console.log(check);
console.log(x / 0);
var student_list = ['Ali', 'Zain', 'Ahamd', 'Zoya', 'komal', 'Hassan', 'Abdullah'];
console.log(student_list);
console.log(student_list[3]);
var student_age = [20, 21, 19, 22, 25, 23];
console.log('Name : ' + student_list[0] + '  Age : ' + student_age[0]);


//Strings in javascript
console.log('Hello World');

//String Concatination
let para = 'Hello how are you?';
let graph = "I am fine.";
let paragraph = para + ' ' + graph;
console.log(paragraph);

//String Charachters
console.log(paragraph[11]);
let index = paragraph.indexOf('i');
console.log(index);

//String length
let length = paragraph.length;
console.log('Length : ' + length);

//String common methods
let result = fullname.toUpperCase();
console.log(result);
result = fullname.toLocaleLowerCase();
console.log(result);
//Type Conversion
let num = '254';
let num1 = Number(num) + 1;
console.log(num1);
let num2 = 254;
num1 = num2 + 1;
console.log(num1);

//Arithmatic Operation

let no1 = 200;
let no2 = 20;
let result1 = 0;

console.log(typeof no1);

result1 = no1 + no2;
console.log(no1 + ' + ' + no2 + ' = ' + result1);

result1 = no1 - no2;
console.log(no1 + ' - ' + no2 + ' = ' + result1);

result1 = no1 * no2;
console.log(no1 + ' * ' + no2 + ' = ' + result1);

result1 = no1 / no2;
console.log(no1 + ' / ' + no2 + ' = ' + result1);

result1 = no1 % no2;
console.log(no1 + ' % ' + no2 + ' = ' + result1);
result1 = no1 / 'hello';
console.log(result1);

//no2 = no2 + 1;
//no2++;
no2 += 1;
console.log(no2);

let username = 'Admin';
let password = 'Pakistan123';
console.log(username == 'Admin'); //comparison operator
console.log(password === 'Pakistan123'); // strict comparison operator
let m = '5';
let n = 5;
let o = 7;
console.log(m == n); // loose comparision of two variable
console.log(m === n); //strict comparision of two variables

console.log(n <= o);
console.log(n >= o);
console.log(n != o);

if (username == 'Admin' && password == 'Pakistan123') {
    console.log('You are login successfully');
} else {
    console.log('Username or Password is wrong');
}

if (username == 'Admin' || password == 'Pakistan123') {
    console.log('You are login successfully');
} else {
    console.log('Username or Password is wrong');
}
if (!true) {
    console.log(false);
} else {
    console.log(true);
}