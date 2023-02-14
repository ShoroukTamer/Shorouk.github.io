let contactname = document.getElementById("name")
let contactnum = document.getElementById("num")
let myform = document.getElementById("form")

function addc() {     
let mydiv = document.createElement("div")
mydiv.setAttribute("id","list")
document.body.appendChild(mydiv)
let mylist = document.createElement("p")
mylist.setAttribute("class","info")
mylist.innerText="Name: " + contactname.value;
mydiv.appendChild(mylist)
let mynum = document.createElement("p")
mynum.setAttribute("class","info")
mynum.innerText="Number: " + contactnum.value;
mydiv.appendChild(mynum)
let remove = document.createElement("button")
remove.setAttribute("id","remove")
remove.innerText="X"
mydiv.appendChild(remove)
remove.onclick=JustHide
function JustHide(){
	document.getElementById('list').style.display = "none"; 
	}
return true;
}
