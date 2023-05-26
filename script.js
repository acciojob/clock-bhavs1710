//your JS code here. If required.
const time= document.getElementById("timer");
SetInterval(() => {
	let d= new Date();
	console.log(d);
	time.innerText= d.getSeconds();
	time.innerText= d.getMinutes();
	time.innerText= d.getHours();
},1000)