# browerormobel

目前为止  通过Jquery扩展


$("#aaa").zdw_addEvent("mousemove",function(e){

		console.log(e.zdwX+"-------"+e.zdwY)
		
		$("#Container").css({"top":e.zdwY,"left":e.zdwX})
		
	})
	
	目前支持mousemove   mousedown  mouseup  
	
	无需注册移动端的touch事件
	
	e.zdwX获取鼠标坐标点
