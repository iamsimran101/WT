var a = '';
var b = '';
var num = [];
var ans;
function sendNum(digit){
	num.push(digit);
	if(num.length != 1){
		a = '';
		document.getElementById('screen').innerHTML = a;		// clearing the screen.
	}

	for(i=0; i<num.length ; i++){

		a = a + num[i];				// concatenate the elements of the array "num" into a single string, which will be displayed on the screen
		a = a + num[i];				// concatenate the elements of the array "num" into a single string, which will be displayed on the screen.

	}

document.getElementById('screen').innerHTML = a;	// displaying the concatenated string
document.getElementById('screen').innerHTML = a;	// displaying the concatenated string.


}
@@ -28,12 +28,12 @@ function equalTo(){

	for(i=0; i<num.length ; i++){

		b += num[i];						// concatenating the array "num" into a single string
		b += num[i];						// concatenating the array "num" into a single string.
	}

	ans = eval(b);	

	document.getElementById('screen').innerHTML = ans;		// result display
	document.getElementById('screen').innerHTML = ans;		// result display.

	while(num.length > 0){
    	num.pop();				// emptying the array "num"
@@ -49,7 +49,7 @@ function clearScr(){
	document.getElementById('screen').innerHTML = '';

	while(num.length > 0){
    	num.pop();				// emptying the array "num"
    	num.pop();				// emptying the array "num".
	}

	a ='';	
	b ='';
}
Shrenika
Shrenika Sherchan
h2{
    color: #334d4d;
    text-align: center;
}
div{
	background-color: #334d4d;
	margin: 50px;
	width: 350px;
	height: 550px;
	margin: 0 auto;
	border-radius: 20px;
	padding: 10px;
}
header{
	background-color: #d1e0e0;
	width: 330px;
	height: 100px;
	border-radius: 20px;
	margin: 0 auto;	
	font-size: xx-large;
	color: #000000;
	text-align: center;
}
table{
	background-color: #FFFFFF;
	margin: 0 auto;
	margin-top: 20px;
	margin-right: 10px;
	margin-left: 10px;
	border-radius: 20px;
}
td{
	width: 110px;
	height: 60px;
	text-align: center;
	font-size: xx-large;
}
.orange{
	color: #ff3300;
}
td:active{
	background-color: #e0e0d1;
	border-radius: 20px;
}