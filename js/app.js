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

// series of if else statement

let marks = prompt("Enter Your Marks");
console.log(marks);

if(marks >= 50 && marks <=60)
{
    alert("You got C Grade");
}
else if(marks > 60 && marks <= 70)
{
    alert("You got B Grade");
}
else if (marks > 70 && marks <= 80)
{
    alert("You got A Grade");
}
else if(marks > 80)
{
    alert("You got A+ Grade");
}
else
{
    alert("Sorry You are failed");
}

//nested if else

let g = 45, h = 50,j = 30;

if(h > g) //outer if
{
    if(h > j) //inner if
    {
        console.log('h is greater than j');
    }
    else //inner else
    {
        console.log('j is greated than h');
    }
}
else //outer else
{
    console.log('h is smaller than g');
}

let eng = prompt("Enter Your English Marks Here");
console.log(eng);
eng = Number(eng);
switch(eng)
{
    case 50 :
        console.log("You Obtain C Grade in English");
        break;
    case 60:
        console.log("You Obtain 60 Marks in English");
        break;
    case 70:
        console.log("You Obtain 70 Marks in English");
        break;
    case 80:
        console.log("You Obtain 80 Marks in English");
        break;
    default:
        console.log("Invalide Input Value");
        break;
}

let table = prompt("Enter the number for table");
for(let i = 1; i <= 10; i++)
{
    console.log(table + " * "+ i + " = "+ table * i);
}

console.log("While Loop")

let i = 1;
while(i <= 20)
{
    console.log(table + " * "+ i + " = "+ table * i);
    i++;
}

console.log("Do-While Loop");

do
{
    console.log(table + " * "+ i + " = "+ table * i);
    i++;
}while(i<=10)

console.log("For-in Loop");

let names = ['Ali','Ahmad','Zain','Hassan','Hussain'];


for(let w in names)
{
    console.log(names[w]);
}

for(let i = 0; i<names.length; i++)
{
    console.log(names[i]);
}



