
$(function(){
	//一段正则，匹配所有_min.的图片src属性
	var test = /_min\./
	//遍历所有的图片节点
	$("img").each(function(index,obj){	
		if(test.test($(this).attr("src"))){
			var reSrc = $(this).attr("src").replace(test,".");
			var image = new Image()
			if(image.complete){
				$(this).attr("src",reSrc)
			} 
			image.src = reSrc
		}		
	})
    $("body").each(function(index,obj){	
		if(test.test($(this).css('background'))){
			var reSrc = $(this).css('background').replace(test,".");
			var image = new Image()
			if(image.complete){
				$(this).css('background',reSrc)
			} 
			image.src = reSrc
		}		
	})

})

 