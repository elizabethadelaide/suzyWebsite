function images(){
	$('img').each(function(){
		//console.log($(this).height() + 'x' + $(this).width());
		if (parseInt($(this).height()) < parseInt($(this).width())){
			//console.log("Landscape");
			$(this).css("width","40em");
			$(this).css( "height", "auto");
		}
		else{
			//console.log("Portrait");
			$(this).css("height","40em");
			$(this).css( "width", "auto");
		}
	});
}

$(document).ready(function(){
	images();
});