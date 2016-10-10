$(document).ready(function() {
	$(document).scroll(function() {
		var offset = $(document).scrollTop();
		var height = $(document).height()/4;
		var n = (offset * 0.5 + height).toString();
		// alert(offset.top);
		$("#about-content").css("background-position", "center " + n + "px");
	});
});