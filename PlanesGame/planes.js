
// $(document).ready( function() { 
//        flyOne();
//  });
// $(window).keypress(function(e) {
//        var ev = e || window.event;
//        var key = ev.keyCode || ev.which;
//        console.log(key);
//        if(key == '51'){
//        	alert("pressed 3");
//        }
//    });
var score = 0;
$(document).ready(playMusic);
$(document).keypress(function(event){
 
	var keycode = (event.keyCode ? event.keyCode : event.which);
	var num = String.fromCharCode(keycode);
	console.log(num);
	console.log(keycode);


	if(num == (document).getElementById("bannerOne").innerHTML){
		explodeOne();
		score ++;
		document.getElementById("score").innerHTML = score;
	}

	if(num == (document).getElementById("bannerTwo").innerHTML){
		explodeTwo();
		score ++;
		document.getElementById("score").innerHTML = score;
	}


	if(num == (document).getElementById("bannerThree").innerHTML){
		explodeThree();	
		score ++;
		document.getElementById("score").innerHTML = score;
	}	
 
});

function flyOne() {
		$('#startScreen').css({"z-index" : "-5"});
		flyTwo();
        $('#planeOne').css({left:65});
        $('#planeOne').animate ({
            left: "965",
        }, 4500, 'linear', function() {
            flyOne();
            numGenOne();
            resetOne();
            
        });
     
    }

function flyTwo() {
        $('#planeTwo').css({left:65});
        flyThree();
        $('#planeTwo').animate ({
            left: "965",
        }, 3500, 'linear', function() {
        	flyTwo();
        	numGenTwo();
        	resetTwo();
        });    
    }

function flyThree() {
	    $('#planeThree').css({left:65});
	    $('#planeThree').animate ({
	        left: "965",
	    }, 3000, 'linear', function() {
	    	flyThree();
	    	numGenThree();
	    	resetThree();
	    });
	    playAudioOne();
}

function explodeOne(){
	$("#planeOne").css({"background-image": "url(explosion3.png)"});
	playExplode();
	
}
function resetOne(){
	$("#planeOne").css({"background-image": "url(plane-banner-red.png)"});
	playAudio();

}

function explodeTwo(){
	$("#planeTwo").css({"background-image": "url(explosion3.png)"});
	playExplodeOne();


}
function resetTwo(){
	$("#planeTwo").css({"background-image": "url(plane-banner-blue.png)"});
	playAudioTwo();

}
function explodeThree(){
	$("#planeThree").css({"background-image": "url(explosion3.png)"});
	playExplodeTwo();
}
function resetThree(){
	$("#planeThree").css({"background-image": "url(plane-banner-green.png)"});

}


function numGenOne() {
    var x = Math.floor((Math.random() * 9) + 1);
    document.getElementById("bannerOne").innerHTML = x;
}

function numGenTwo() {
    var x = Math.floor((Math.random() * 9) + 1);
    document.getElementById("bannerTwo").innerHTML = x;
}

function numGenThree() {
    var x = Math.floor((Math.random() * 9) + 1);
    document.getElementById("bannerThree").innerHTML = x;
}


function playAudio(){
	document.getElementById('myAudio').play();
}
function playAudioOne(){
	document.getElementById('myAudioOne').play();
}
function playAudioTwo(){
	document.getElementById('myAudioTwo').play();
}
 
 function playExplode(){
	document.getElementById('myExplode').play();
}
function playExplodeOne(){
	document.getElementById('myExplodeOne').play();
}
function playExplodeTwo(){
	document.getElementById('myExplodeTwo').play();
}
function playMusic(){
	document.getElementById('gameMusic').play();
}

function reload() {
    location.reload();
}

var rect = element.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);






