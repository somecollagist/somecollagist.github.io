let backdrop = "";
let unixtime = Number(Date.now()).toString(2);
for(let x = 0; x < 4096; x++)
	backdrop += unixtime

document.getElementById("background").innerHTML = backdrop;