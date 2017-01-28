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
  
//   var el = document.getElementById('fileinput');
//   if(el){
//     alert("got here");
//     document.getElementById('fileinput').addEventListener('change', readMultipleFiles, false);
//   }

// });