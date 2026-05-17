const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = function(){
   navLinks.classList.toggle("show");
}



function takeAttendance() {
    let selectedCourse = document.getElementById("courses").value
    
    if(selectedCourse === ""){
      alert("Please select a course")
      
      return;
    }
    
    localStorage.setItem('selectedCourse' , selectedCourse);
    
    window.location.href = "Attendance.html"
 }
 
 
 
  let course =
     localStorage.getItem("selectedCourse");

   let display =
     document.getElementById("displayCourse");

   if (display) {
     display.innerHTML = 'Selected Course: ' + course;
}


const themeBtn =
  document.getElementById("themeBtn");

themeBtn.onclick = function() {
  
  document.body.classList.toggle("dark");
  
}

const el = document.getElementById('typing');
const text = el.textContent;
el.textContent = '';
let i = 0;

function type() {
    if (i <text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 30);

    }else{
        setTimeout(() => el.classList.add('typing-done'), 1000);
    }
}

type()
   
function submitAttendance() {

  let course = localStorage.getItem("selectedCourse");
  let session = document.getElementById("session").value;
  let lecturer = document.getElementById("lecturer").value;
  let name = document.getElementById('name').value;
  let matric = document.getElementById('matric').value;

  if(!name || !matric) {
    alert('Please fill all fields');

    return;
  }

  let attendance = {
    course: course,
    session: session,
    lecturer: lecturer,
    name: name,
    matric: matric
  };

  let records = JSON.parse(localStorage.getItem('records')) || [];
  records.push(attendance);

  localStorage.setItem(
    "records",
    JSON.stringify(records)
  );
  
  alert('Submitted Successfully')
}




function loginAdmin() {
  let name = document.getElementById('adminName').value;
  let pass = document.getElementById('adminPass').value;

  if(name === "admin" && pass === "admin1234") {
    document.getElementById('form').style.display = 'none';
    document.getElementById('dashboard').style.display = 'flex';
    loadRecords();

  }

  else {
    alert('Invalid Admin Credentials');
  }
}

function loadRecords() {
  let tableBody = document.getElementById('tableBody');

let records = JSON.parse(localStorage.getItem('records')) || [];

if(tableBody) {
  records.forEach(function(record) {
    tableBody.innerHTML += `
    
    <tr>

    <td> ${record.name}</td>

    <td> ${record.matric}</td>

    <td> ${record.course}</td>

    <td> ${record.session}</td>

    <td> ${record.lecturer}</td>

    `;
  });
};



}

