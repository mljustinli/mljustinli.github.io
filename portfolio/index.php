<!DOCTYPE html>
<html>
<head>
	<!-- Custom -->
	<link type="text/css" rel="stylesheet" href="../css/stylesheet.css">
	<link type="text/css" rel="stylesheet" media="screen and (min-width: 1201px)"` href="../css/stylesheet-large.css" />
	<link type="text/css" rel="stylesheet" media="screen and (min-width: 768px) and (max-width: 1200px)" href="../css/stylesheet-small.css" />
	<link type="text/css" rel="stylesheet" media="screen and (max-width: 767px)" href="../css/stylesheet-mobile.css" />
	<link type="text/css" rel="stylesheet" media="handheld" href="../css/stylesheet-mobile.css" />

	<!-- Portfolio Style Sheets -->
	<link type="text/css" rel="stylesheet" href="css/stylesheet-portfolio.css">

	<link rel="shortcut icon" href="img/favicon.ico" type="../image/x-icon">
	<link rel="icon" href="img/favicon.ico" type="../image/x-icon">

	<title>Portfolio</title>
</head>
<body>

	

	<div class = "portfolio-wrapper">
		<div class = "portfolio-wrapper">
			<div class = "portfolio-title">

				<!-- <iframe data-src="https://www.youtube.com/embed/3wzejH7DZ8g?autoplay=0&controls=0&disablekb=1&iv_load_policy=3&loop=1&modestbranding=1&enablejsapi=1&showinfo=0&playlist=3wzejH7DZ8g&html5=1&VQ=HD1080" frameborder="0" class="" style="" src="https://www.youtube.com/embed/3wzejH7DZ8g?autoplay=0&controls=0&disablekb=1&iv_load_policy=3&loop=1&modestbranding=1&enablejsapi=1&showinfo=0&playlist=3wzejH7DZ8g&html5=1&VQ=HD1080"></iframe> -->
			</div>

			<div class = "images-container">

				<?php
				$dir    = 'portfolio_images/';
				$files1 = scandir($dir);

				echo getcwd();

				foreach ($files1 as &$value) {
					if (strcmp($value, ".") != 0 && strcmp($value, "..") != 0) {
						echo '<div class = "image-container">';
						echo '<img src = "portfolio_images/' . $value . '" class = "portfolio-image">';
						echo '</div>';
					}
				}
				?>


				<!-- <div class = "image-container"> 
					<img src = "portfolio_images/unfoldedCube (1).jpg" class = "portfolio-image">
				</div> -->
			</div>
		</div>
	</div>

	<!-- width: 1621.88px; height: 1038px; -->



	<!-- <input type="file" id="fileinput" multiple /> -->




	<!-- <div class = "image-content-container">
		<div class = "image-content-border">
			<div class = "image-container">
				<a href = "#" class ="img-shadow"><img src = "portfolio_images/unfoldedCube (1).jpg" class = "portfolio-image"></a>
			</div>
			<div class = "image-info">

			</div>
		</div>
	</div> -->
	<!-- <div>
		<img src = "portfolio_images/unfoldedCube (1).jpg" class = "portfolio-image">
	</div>
	<div>
	<img src = "portfolio_images/bodyObservationalDrawings (2) - Copy.jpg" class = "portfolio-image">
	</div>
	<img src = "portfolio_images/unfoldedCube (1).jpg" class = "portfolio-image">
	<img src = "portfolio_images/unfoldedCube (1).jpg" class = "portfolio-image">
	<img src = "portfolio_images/unfoldedCube (1).jpg" class = "portfolio-image">
	<img src = "portfolio_images/unfoldedCube (1).jpg" class = "portfolio-image">
	<img src = "portfolio_images/unfoldedCube (1).jpg" class = "portfolio-image">
	<img src = "portfolio_images/unfoldedCube (1).jpg" class = "portfolio-image"> -->






</body>
<script type = "text/javascript" src = "../js/jquery-1.12.3.min.js"></script>
<script type = "text/javascript" src = "js/loadImages.js"></script>
</body>
</html>