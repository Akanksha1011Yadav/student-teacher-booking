function searchTeacher(){

let teachers = JSON.parse(localStorage.getItem("teachers")) || []

let list = document.getElementById("teacherList")

if(!list) return

list.innerHTML=""

if(teachers.length===0){
list.innerHTML="<p>No teachers available</p>"
return
}

teachers.forEach(function(t){

list.innerHTML+=`
<div class="teacher">
<b>${t.name}</b><br>
${t.dept} - ${t.subject}
</div>
`

})

console.log("Teacher list loaded")

}


function bookAppointment(){

let teacher=document.getElementById("teacherName").value
let date=document.getElementById("date").value
let time=document.getElementById("time").value

if(teacher=="" || date=="" || time==""){
alert("Please fill all fields before booking appointment")
return
}

let appointments=JSON.parse(localStorage.getItem("appointments")) || []

appointments.push({
teacher:teacher,
date:date,
time:time
})

localStorage.setItem("appointments",JSON.stringify(appointments))

console.log("Appointment Booked:",teacher,date,time)

alert("Appointment booked successfully")

document.getElementById("teacherName").value=""
document.getElementById("date").value=""
document.getElementById("time").value=""

}


function sendMessage(){

let msg=document.getElementById("message").value

if(msg==""){
alert("Please write a message")
return
}

console.log("Message Sent:",msg)

alert("Message Sent")

document.getElementById("message").value=""

}


function loadAppointments(){

let appointments=JSON.parse(localStorage.getItem("appointments")) || []

let container=document.getElementById("appointments")

if(!container) return

if(appointments.length===0){

container.innerHTML="<p>No appointments available</p>"
return

}

container.innerHTML=""

appointments.forEach(function(a,index){

container.innerHTML+=`
<div class="teacher">

<b>Teacher:</b> ${a.teacher}<br>
<b>Date:</b> ${a.date}<br>
<b>Time:</b> ${a.time}

<br><br>

<button onclick="deleteAppointment(${index})">Delete</button>

</div>
`

})

console.log("Appointments Loaded")

}


function deleteAppointment(index){

let appointments=JSON.parse(localStorage.getItem("appointments")) || []

appointments.splice(index,1)

localStorage.setItem("appointments",JSON.stringify(appointments))

console.log("Appointment Deleted:",index)

alert("Appointment Deleted")

loadAppointments()

}
