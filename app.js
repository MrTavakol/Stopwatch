let second = 0;
let count = 0;

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', () => {
	timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', () => {
	timer = false;
	document.getElementById("start").disabled = false;
});

resetBtn.addEventListener('click', () => {
	timer = false;
	second = 0;
	count = 0;
	document.getElementById('count').innerHTML = "00";
	document.getElementById('second').innerHTML = "00";
});

function stopWatch(){
	if(timer){
		document.getElementById("start").disabled = true;
		count++;
		
		if(count == 100){
			second++;
			count = 0
		}
		
		let strCount = count;
		let strSecond = second;
		
		if (strCount < 10){
			strCount = "0" + strCount;
		}
		
		if (strSecond < 10) {
			strSecond = "0" + strSecond;
		}
		
		document.getElementById('count').innerHTML = strCount;
		document.getElementById('second').innerHTML = strSecond;
		setTimeout(stopWatch, 10);
	}
}