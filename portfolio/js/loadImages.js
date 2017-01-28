// $(document).ready(function(){  

//   function readMultipleFiles(evt) {
//     //Retrieve all the files from the FileList object
//     var files = evt.target.files; 

//     if (files) {
//       for (var i=0, f; f=files[i]; i++) {
//         var r = new FileReader();
//         r.onload = (function(f) {
//           return function(e) {
//             var contents = e.target.result;
//             $('body').append('<h1>' + f.name + '</h1><img src="portfolio_images/' + f.name + '"/>');
//           };
//         })(f);

//         r.readAsText(f);
//       }   
//     } else {
//       alert("Failed to load files"); 
//     }
//   }

//this refuses to work :(


// $(document).ready(function() {
//   $.ajax({
//     url: "/JuiceTin/portfolio",
//     success: function(data){
//      $(data).find("a:contains(.jpg)").each(function(){
//       // will loop through 
//       var images = $(this).attr("href");

//       alert("herehere");
//       $('<p></p>').html(images).appendTo('#images-container')

//     });
//    }
//  });
// });