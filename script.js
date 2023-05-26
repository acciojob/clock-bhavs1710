//your JS code here. If required.
const time=document.getElementById("time");
SetInterval() => {
	let d= new Date();
	time.innerText=d.getSeconds();
},1000)