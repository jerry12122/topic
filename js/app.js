function onImageLoaded(url, cb) {
	var image = new Image()
	image.src = url
	if (image.complete) {
		cb()
	} else {
		image.onload = function () {
			cb()
		}
	}
}

$(function () {
	var test = /_min\./
	$("img").each(function (index, obj) {
		if (test.test($(this).attr("src"))) {
			var tmp = $(this)
			var reSrc = $(this).attr("src").replace(test, ".");
			onImageLoaded(reSrc, function () {
				tmp.attr("src", reSrc)
			})
			
		}
	})

	$("body").each(function (index, obj) {
		if (test.test($(this).css('background-image'))) {
			var tmp = $(this)
			var reSrc = $(this).css('background-image').replace(test, ".");
			reSrc = reSrc.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
			onImageLoaded(reSrc, function () {
				tmp.css('background-image', 'url(' + reSrc + ')');
			})
		}
	})

})
