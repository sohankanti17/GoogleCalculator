//Global variables

var toggleSideContainer = 1;		//to hold the state of the side bar	
var invState = 0;				//To hold the INV function button state

function formReset(){
	document.getElementById("form").reset();	//To reset everything
}

function toggleSideBtn(){		//Toggle Side button pannel
	var x = document.getElementById("side-btn-container");
	var y = document.getElementById("num-btn-container");
	var z = document.getElementById("optr-btn-container");

	if(toggleSideContainer == 1){
		document.getElementById("toggle-side-btn").value = "»";
		x.style.left = "75px";
		x.style.borderRadius="5px";
		y.style.filter="blur(3px)";
		z.style.filter="blur(3px)";
		toggleSideContainer=0;
	}
	else{
		document.getElementById("toggle-side-btn").value = "«";
		x.style.left = "282px";
		x.style.borderRadius="0px";
		y.style.filter="blur(0)";
		z.style.filter="blur(0)";
		toggleSideContainer=1;
	}
}

function calculate(){	//Function that does the main calculations
	var x = document.getElementById("input");
	var y = document.getElementById("result");
	if(x.value==""){
		y.value="";
	}
	else{
		y.value=eval(x.value);
	}
}
    
function inverseValues(){		//function to inverse the Button values and also to make it pressed
	var x = document.getElementsByClassName("btn-side")[0];
	if(invState==0){
		x.style.backgroundColor="#808080";
		invState=1;
		x.removeEventListener("mouseover",function(){x.style.backgroundColor="#808080";});
		x.removeEventListener("mouseout",function(){x.style.backgroundColor="aqua";});
	}
	else{
		x.style.backgroundColor="aqua";
		invState=0;
		x.addEventListener("mouseover",function(){x.style.backgroundColor="#808080";});
		x.addEventListener("mouseout",function(){x.style.backgroundColor="aqua";});
	}

}