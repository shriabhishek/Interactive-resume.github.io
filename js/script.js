var pos=0;
var h=0;
var vb=0;
$(document).ready(function(){
	$("#loading-screen").fadeOut(500);
	//check1();
	moveAround();
})

function moveAround(){
	$(document).on('keydown',function(e){
		switch(e.which){
			case 37:
				moveLeft();
				break;
			case 32:
				moveUp();
				break;
			case 39:
				moveRight();
			break;
		}
	$(document).on('swipeleft',function(){
		moveLeft();
	});
	$(document).on('swiperight',function(){
		moveRight();
	});
});
}
function moveDown(){
	setTimeout(function() {
  	$("#himanshu").removeClass().addClass("himanshu5");
	}, 200);
	while(h>72){
		h-=3;
		$("#himanshu").css({"bottom":"-=3px"}).delay(100);
	}
	setTimeout(function() {
  	$("#himanshu").removeClass().addClass("himanshu1");
	}, 500);
	$("#himanshu").css({"bottom":"72px"});
}
function moveLeft(){
	if(pos>0){
		pos-=100;
		$('#scene1-container').css({"left":"+=100"});
		$('#scene1-bcontainer').css({"left":"+=45"});
		changehimanshuPosLeft();
		$('#level1').css({"left":"+=100"});
		$("#ground-container").css({"left":"+=100"});
		$('#level1-p2').css({"left":"+=100"});
		$("#level2").css({"left":"+=100"});
		$("#level3").css({"left":"+=100"});
		$("#level4").css({"left":"+=100"});
		if(pos>2300&&pos<=3900){
			$('#train').css({"left":"-=100"});
			if(pos>3100){
				$("#car").css({"left":"-=140"});
				$("#car").css({"bottom":"+=76"});
			}
		}
		var offset=$("#level2").offset();
		if(offset.left==800){
		$('#container').animate({
    	scrollTop: offset.top-1500,
    	scrollLeft: 0
		});
		if(vb==1)
			{
				$("#himanshu").css({"bottom":"72px"});
				vb=0;
			}
			moveLeft();
	}
	var offset=$("#level3").offset();
	if(offset.left==900){
		$('#container').animate({
    	scrollTop: offset.top+1500,
    	scrollLeft: 0
		});
		 
			{
				$("#himanshu").css({"bottom":"-1428px"});
				vb=1;
			}
	}
	var offset=$("#level4").offset();
	if(offset.left<=1100){
		//console.log(offset.left+"Hagridleft");
		$("#hagrid-bike").removeClass().addClass("hagrid-bike1");
		//console.log("Hagrid");
		$("#hagrid-bike").css({"bottom":"0px"});
		$("#hagrid-bike").css({"left":"0px"});
		$("#himanshu").css({"bottom":"72px"});
		$("#himanshu").show();
		moveLeft();
		moveLeft();
		moveLeft();
	}

	}
}
function moveRight(){
	pos+=100;
	var c=$("#finish").offset();
if(c.left>=300)	
	{
	$('#scene1-container').css({"left":"-=100"});
	$('#scene1-bcontainer').css({"left":"-=45"});
	changehimanshuPosRight();
	$('#level1').css({"left":"-=100"});
	$("#ground-container").css({"left":"-=100"});	
	$('#level1-p2').css({"left":"-=100"});
	$("#level2").css({"left":"-=100"});
	$("#level3").css({"left":"-=100"});
	$("#level4").css({"left":"-=100"});
	if(pos>2400&&pos<=3900){
		$('#train').css({"left":"+=100"});
		if(pos>3100){
			$("#car").css({"left":"+=140"});
			$("#car").css({"bottom":"-=76"});
		}
	}
	var offset=$("#level2").offset();
	if(offset.left==700){
		$('#container').animate({
    	scrollTop: offset.top+1500,
    	scrollLeft: 0
		});
		 
			{
				$("#himanshu").css({"bottom":"-1428px"});
				vb=1;
			}
	}
	var offset=$("#level3").offset();
	if(offset.left==900){
		$('#container').animate({
    	scrollTop: offset.top-1500,
    	scrollLeft: 0
		});
		 
			{
				$("#himanshu").css({"bottom":"72px"});
				vb=1;
			}
		moveRight();
	}
	var offset=$("#level4").offset();
	if(offset.left==1100){
		$("#himanshu").hide();
		$("#hagrid-bike").removeClass().addClass("hagrid-bike2");
		$("#hagrid-bike").css({"bottom":"+=300"});
		$("#hagrid-bike").css({"left":"-=400"});
	}
	if(offset.left<1100){
		$("#hagrid-bike").css({"left":"+=100"});
	}
	if(c.left==800){
		$("#hagrid-bike").removeClass().addClass("hagrid-bike1");
		//console.log("Hagrid");
		$("#hagrid-bike").css({"bottom":"0px"});
		$("#hagrid-bike").css({"left":"0px"});
		$("#himanshu").show();
		$("#himanshu").css({"bottom":"150px"});
	}
	if(c.left==300){
		$("#himanshu").css({"bottom":"200px"});
		$("#himanshu").removeClass().addClass("himanshuwr");
	}
  }
	//console.log("left "+c.left +"top "+c.top);
}
function moveUp(){
	pos+=100;
	h+=3;
	var c=$("#finish").offset();
	if(c.left>=300)	
	{
	changehimanshuPosUp();
	$("#himanshu").removeClass().addClass("himanshu4");
	$("#himanshu").css({"bottom":"+=3px"});
	$('#snacene1-container').css({"left":"-=100"});
	$('#scene1-bcontainer').css({"left":"-=45"});
	$('#level1').css({"left":"-=100"});
	$("#ground-container").css({"left":"-=100"});	
	$('#level1-p2').css({"left":"-=100"});	
	$("#level2").css({"left":"-=100"});
	$("#level3").css({"left":"-=100"});
	$("#level4").css({"left":"-=100"});
	if(pos>2400&&pos<=3900){
		$('#train').css({"left":"+=100"});
		if(pos>3100){
			$("#car").css({"left":"+=140"});
			$("#car").css({"bottom":"-=76"});
		}
	}
	var offset=$("#level2").offset();
	if(offset.left==700){
		$('#container').animate({
    	scrollTop: offset.top+1500,
    	scrollLeft: 0
		});
		 
			{
				$("#himanshu").css({"bottom":"-1428px"});
				vb=1;
			}
	}
	var offset=$("#level3").offset();
	if(offset.left==900){
		$('#container').animate({
    	scrollTop: offset.top-1500,
    	scrollLeft: 0
		});
		 
			{
				$("#himanshu").css({"bottom":"72px"});
				vb=1;
			}
	}
	var offset=$("#level4").offset();
	if(offset.left==1100){
		$("#himanshu").hide();
		$("#hagrid-bike").removeClass().addClass("hagrid-bike2");
		$("#hagrid-bike").css({"bottom":"+=300"});
		$("#hagrid-bike").css({"left":"-=400"});
	}
	if(offset.left<1100){
		$("#hagrid-bike").css({"left":"+=100"});
	}
	if(c.left==800){
		$("#hagrid-bike").removeClass().addClass("hagrid-bike1");
		//console.log("Hagrid");
		$("#hagrid-bike").css({"bottom":"0px"});
		$("#hagrid-bike").css({"left":"0px"});
		$("#himanshu").show();
		$("#himanshu").css({"bottom":"150px"});
	}
	if(c.left==300){
		$("#himanshu").css({"bottom":"200px"});
		$("#himanshu").removeClass().addClass("himanshuwr");
	}
}
}
function changehimanshuPosLeft(){
	$("#himanshu").removeClass().addClass("himanshu6");
	$("#himanshu").removeClass("himanshu6").addClass("himanshu7");
	setTimeout(function() {
  		$("#himanshu").removeClass("himanshu7").addClass("himanshu8");
		}, 300);
	setTimeout(function() {
  		$("#himanshu").removeClass("himanshu8").addClass("himanshu6");
		}, 600);
	if(pos<1800){
		$("#himanshu").fadeIn(500);
	}
	else if(pos>=1800&&pos<2100){
		$("#himanshu").fadeOut(500);
	}
	else if(pos>=2100&&pos<=2400){
		$("#himanshu").fadeIn(500);
	}
	else if(pos>=2400&&pos<4000){
		$("#himanshu").fadeOut(500);
	}
	else if(pos>=4000){
		$("#himanshu").fadeIn(500);
	}
}
function changehimanshuPosUp(){
	if(pos>=1800&&pos<2100){
		$("#himanshu").fadeOut(500);
	}
	if(pos==2100){
		$("#himanshu").fadeIn(500);
	}
	if(pos>=2400&&pos<4000){
		$("#himanshu").fadeOut(500);
	}
	if(pos==4000){
		$("#himanshu").fadeIn(500);
	}
}
function changehimanshuPosRight(){
	$("#himanshu").removeClass().addClass("himanshu1");
	 $("#himanshu").removeClass("himanshu1").addClass("himanshu2");
	setTimeout(function() {
  		$("#himanshu").removeClass("himanshu2").addClass("himanshu3");
		}, 300);
	setTimeout(function() {
  		$("#himanshu").removeClass("himanshu3").addClass("himanshu1");
		}, 600);
	if(pos>=1800&&pos<2100){
		$("#himanshu").fadeOut(500);
	}
	if(pos==2100){
		$("#himanshu").fadeIn(500);
	}
	if(pos>=2400&&pos<4000){
		$("#himanshu").fadeOut(500);
	}
	if(pos==4000){
		$("#himanshu").fadeIn(500);
	}
}


function check1(){
	$('#scene1-container').css({"left":"-12700px"});
	$('#scene1-bcontainer').css({"left":"-5715px"});
	$('#level1').css({"left":"-11200px"});
	$("#ground-container").css({"left":"-12700px"});
	$('#level1-p2').css({"left":"-7700px"});
	$("#level2").css({"left":"-5700px"});
	$("#level3").css({"left":"-2200px"});
	$("#level4").css({"left":"1300px"});
	$("#vinay").css({"bottom":"72px"});
	var offset=$("#level4").offset();
	if(offset.left==1100){
		$("#himanshu").hide();
		$("#hagrid-bike").removeClass().addClass("hagrid-bike2");
		$("#hagrid-bike").css({"bottom":"+=300"});
		$("#hagrid-bike").css({"left":"-=400"});
	}
	if(offset.left<1100){
		$("#hagrid-bike").css({"left":"+=100"});
	}
}
