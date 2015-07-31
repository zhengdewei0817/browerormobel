$(function(){
	//alert(jQuery.isSupportMobile())
	

	
	$("#aaa").zdw_addEvent("mousemove",function(e){
		console.log(e.zdwX+"-------"+e.zdwY)
		$("#Container").css({"top":e.zdwY,"left":e.zdwX})
	})
	
	
	
})
