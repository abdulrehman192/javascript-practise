//Functions in javascript

let firstname = "Ali";
let lastname = "Ahmad";

//Function Definition

function getFullName()
{
    console.log(firstname,lastname);
}

//calling to the function
getFullName();

function FullName()
{
    return firstname + " " + lastname;
}

let result = FullName();
console.log(result);

//Function with parameters
function Sum(a, b)
{
    return a + b;
}

result = Sum(10,15);
console.log(result);

result = Sum(25,38);
console.log(result);

//Create Functions to take and print student data

let name, rollno, subject, contact, address;

function InsertData()
{
    this.name = "Ali";
    this.rollno = "CIT-55";
    this.subject = "Programming";
    this.contact = "0302-98545454";
    this.address = "Bypass Okara";
}

function PrintData()
{
    
    console.log("Name : " + this.name);
    console.log("Roll # : " + this.rollno);
    console.log("Subject : "+ this.subject);
    console.log("Contact : "+ this.contact);
    console.log("Address : "+ this.address);
}

InsertData();
PrintData();

// Continue statement

for(let i = 0; i <= 10; i++)
{
    
    if(i == 5)
    {
        continue;
    }
    else
    {
        console.log("Value of i = "+ i);
    }
}

//global variable
let student = 'Ali';
function Explain()
{
    //local variable
    let student = 'Adeel';
    console.log(student);
    console.log(this.student);
}

console.log(student);
Explain();

//methods expression or litrel

let xyz = function Print_Name()
{
    console.log("Abdul-Rehman");
}
xyz();

//arrays store multiple values of the same data type
let names = ['Ali','Ahmad','zain'];


//object store multiple values of different data types

let Student = {
    name: 'Hassnain',
    roll_no: 'CIT-456',
    CNIC: '33520-66454144-9',
    age:25,
    contact:'0308-9098067',
    subj: 'Web Designing',
    print: function Print()
    {
        console.log(this.roll_no);
        console.log(this.CNIC);
    }
};

Student.print();

console.log(Student); ///print whole object
console.log(Student.name);
console.log(Student['age']);
Student.name = "Talha";
console.log(Student.name);

//Empty Object
let Person = {};
//Adding properties to empty object
Person.Name = "Hassan";

let h = Student;
console.log(h);

