function fadeIn(x, y) {
    var intervalID = setInterval(
        function(){
            changeBannerOpacity();
        },
        30
    );
    function changeBannerOpacity() {
        var targetElement = document.getElementById("banner_img");
        x += 0.01;
        if( x <= y ){
            targetElement.style.cssText = "opacity:" + x + ";";
        }else{
            clearInterval(intervalID);
        }
    }
}


function animateToRight(obj, from, to){
   if(from >= to){         
       	return;  
   } else {
      	obj.style.marginLeft = from + "px";
      	setTimeout(function(){
           animateToRight(obj, from + 2, to);
       	}, 15);
   }
}

function slideIn() {
	var targetElement = document.getElementById('footer_img');
	animateToRight(targetElement, -375, 0);
}

window.onload = function() {
	fadeIn(0, 1.0);
	slideIn();
}

