// GET STUDENTS FROM LOCALSTORAGE OR CREATE EMPTY ARRAY
let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

// DISPLAY STUDENTS
function displayStudents(){

let table = document.getElementById("studentTable");

table.innerHTML="";

students.forEach((student,index)=>{

table.innerHTML += `
<tr>

<td>${student.name}</td>
<td>${student.id}</td>
<td>${student.class}</td>
<td>${student.email}</td>
<td>${student.contact}</td>
<td>${student.address}</td>

<td>
<button onclick="editStudent(${index})">Edit</button>
<button onclick="deleteStudent(${index})">Delete</button>
</td>

</tr>
`;

});

localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {

// GET INPUT VALUES
    
let name = document.getElementById("name").value.trim();
let id = document.getElementById("sid").value.trim();
let stuclass = document.getElementById("class").value.trim();
let email = document.getElementById("email").value.trim();
let contact = document.getElementById("contact").value.trim();
let saddress = document.getElementById("address").value.trim();

// RESET BORDERS
document.getElementById("name").style.border = "";
document.getElementById("sid").style.border = "";
document.getElementById("class").style.border = "";
document.getElementById("email").style.border = "";
document.getElementById("contact").style.border = "";
document.getElementById("address").style.border = "";

// EMPTY FIELD VALIDATION
if(name === "" || id === "" || stuclass === "" ||  email === "" || contact === "" || saddress === "" ){
    
    alert("All fields are required!");

// HIGHLIGHT EMPTY FIELDS

    if(name === ""){
        document.getElementById("name").style.border = "2px solid red";
    }

    if(id === ""){
        document.getElementById("sid").style.border = "2px solid red";
    }

    if(stuclass === ""){
        document.getElementById("class").style.border = "2px solid red";
    }

    if(email === ""){
        document.getElementById("email").style.border = "2px solid red";
    }

    if(contact === ""){
        document.getElementById("contact").style.border = "2px solid red";
    }

     if(saddress=== ""){
        document.getElementById("address").style.border = "2px solid red";
    }

    return;
}


// NAME VALIDATION (A-Z only)
let namePattern = /^[A-Za-z ]+$/;

if(!namePattern.test(name)){
    alert("Student name must contain characters only");
    document.getElementById("name").style.border = "2px solid red";
    return;
}


// ID VALIDATION (numbers only)
let idPattern = /^[0-9]+$/;

if(!idPattern.test(id)){
    alert("Student ID must contain numbers only");
    document.getElementById("sid").style.border = "2px solid red";
    return;
}


// ADDRESS VALIDATION 
let addressPattern = /^[A-Za-z0-9\s,.-]+$/;

if(!addressPattern.test(saddress)){
    alert("Student Address contains invalid characters");
    document.getElementById("address").style.border = "2px solid red";
    return;
}



// EMAIL VALIDATION
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
    alert("Enter a valid email address");
    document.getElementById("email").style.border = "2px solid red";
    return;
}


// CONTACT VALIDATION (10 digits)
let contactPattern = /^[0-9]{10}$/;

if(!contactPattern.test(contact)){
    alert("Contact number must contain 10 digits");
    document.getElementById("contact").style.border = "2px solid red";
    return;
}


// ADD STUDENT
students.push({
    name: name,
    id: id,
    class: stuclass,
    email: email,
    contact: contact,
    address:saddress
});

alert("Student Added Successfully")
displayStudents();
clearForm();

}


// DELETE STUDENT
function deleteStudent(index){

students.splice(index,1);

displayStudents();

}



// EDIT STUDENT
function editStudent(index){

let student = students[index];

document.getElementById("name").value = student.name;
document.getElementById("sid").value = student.id;
document.getElementById("class").value = student.class;
document.getElementById("email").value = student.email;
document.getElementById("contact").value = student.contact;
document.getElementById("address").value = student.address;

students.splice(index,1);

displayStudents();

}



// CLEAR FORM
function clearForm(){

document.getElementById("name").value="";
document.getElementById("sid").value="";
document.getElementById("class").value="";
document.getElementById("email").value="";
document.getElementById("contact").value="";
document.getElementById("address").value="";

}





