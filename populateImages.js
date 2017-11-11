function populateImages(name){
	console.log("Loading Images");
	//$("#title").hide();
	//$("#images").append("<h2>Start</p>");
	getImage(name, 1);
}

function getImage(name, i){
	directory = name + '/';
	filename = directory + name + "%20" + i + ".jpg";
	string = "<div id='#image'><img src=" + filename + "></div>";
	console.log(filename);
	//var image = new Image();
	//image.src = filename;
	$.ajax({
		type: "HEAD",
		url: filename,
		success: function(){
			$("#images").append(string);
			getImage(name, i + 1);
		},
		error: function(){
			console.log("Finished with images");
			images();
		}
	});
}


function images(){
	$('img').each(function(){
		//console.log($(this).height() + 'x' + $(this).width());
		if (parseInt($(this).height()) < parseInt($(this).width())){
			//console.log("Landscape");
			$(this).css("width","50em");
			$(this).css( "height", "auto");
		}
		else{
			//console.log("Portrait");
			$(this).css("height","50em");
			$(this).css( "width", "auto");
		}
	});
}

