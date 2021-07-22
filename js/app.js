function onImageLoaded(url, cb) {
	var image = new Image()
	image.src = url
	if (image.complete) {
		cb(image)
	} else {
		image.onload = function () {
		cb(image)
		}
	}
}

$(function(){
	var test = /_min\./
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
		if(test.test($(this).css('background-image'))){
			var tmp = $(this)
			var reSrc = $(this).css('background-image').replace(test,".");
			reSrc = reSrc.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
			onImageLoaded(reSrc,function(icon){
				tmp.css('background-image', 'url(' + reSrc + ')');
			})
		}		
	})

})
