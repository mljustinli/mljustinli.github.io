// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }

/*
	Many thanks to w3schools
*/

$(".portfolio-image").on("click", function(e) {
	e.preventDefault();
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = e.target;
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = "hi there";

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
		modal.style.display = "none";
	}
});

$(".close").on("click", function(e) {
	e.preventDefault();
	$(".modal").hide();
});