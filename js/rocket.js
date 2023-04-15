
let timer = null;
let countdownNumber = 10;



let changeState = function (state){
	document.body.className = "body-state"+state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;


	if (state == 2){
		timer = setInterval(function (){
			countdownNumber=countdownNumber-1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			if(countdownNumber<=0){
				
				changeState(3);
			}
		},100)
		
	} else if (state == 3){
		let success = setTimeout( function ()
		{
			let randomNumber = Math.round(Math.random()*10);
			if (randomNumber > 5){
					changeState(4);
			} else{
				changeState(5);

			}
		}, 2000)

	};
}