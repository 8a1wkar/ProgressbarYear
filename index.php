<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kurdish Progress Bar</title>
		<link rel="stylesheet" href="styles.css" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
		<link rel="stylesheet" href="IBMPlexSansArabic-Bold.ttf"/>
  </head>
  <body>
		

<div class="d-flex justify-content-center container">

<div class="shadow-lg mt-5 bg-progress">		
		
	<br>
	<h1 class="ku mt-4"	style="opacity:0.9;float:right;margin-right:30px">ڕێژەی کاتەکان</h1>

	<br><br><br><br>
<div class="d-flex justify-content-between">
<p style="margin-left:38px" id="year-percentage"></p>
<p class="ku" style="margin-right:35px">ساڵ</p>
</div>

<center>
<progress style="margin-top:-30px" id="year-progress-bar" value="0" max="100">
</progress>
</center>

<div class="d-flex justify-content-between">
<p style="margin-left:38px" >41%</p>
<p class="ku" style="margin-right:35px">مانگ</p>
</div>

<center>
<progress id="progress" style="margin-top:-30px" value="0" max="100">
</progress>
</center>


<div class="d-flex justify-content-between">
<p style="margin-left:38px" id="day-percentage"></p>
<p class="ku" style="margin-right:35px">ڕۆژ</p>
</div>

<center>
<progress style="margin-top:-30px" id="day-progress-bar" value="0" max="100">
</progress>
</center>



</div>
	
<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "6383a26389164d8fa652353d052cf1d4"}'></script><!-- End Cloudflare Web Analytics -->
  <script src="script.js" type="text/javascript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="text/javascript"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </body>
	</html>