# browerormobel

目前为止  通过Jquery扩展


$("#aaa").zdw_addEvent("mousemove",function(e){

		console.log(e.zdwX+"-------"+e.zdwY)
		
		$("#Container").css({"top":e.zdwY,"left":e.zdwX})
		
	})
	
	目前支持mousemove   mousedown  mouseup  
	
	无需注册移动端的touch事件
	
	e.zdwX获取鼠标坐标点


注册zdw_addEvent(a,b,c)
a:事件类型  ：mousemove  mousedown  mouseup
b:事件执行回调函数
c:是否允许浏览器默认事件   false为不允许，true为允许  默认为false
