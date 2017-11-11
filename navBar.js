function navandtitle(){
	string='<h1 id="title">Zuzanna Sochaczewska</h1><div id="navdiv"><div id="navcontain">';
	string = string + '<a href="index.html">Projects</a>, ';
	string = string + '<a href="cv.html">CV</a></div></div>';
	$('#nav').html(string);
	

}

$(document).ready(function(){
	navandtitle();
});