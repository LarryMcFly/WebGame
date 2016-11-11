
var game = "ul.game",
gameSquare = "ul.game li.blank",
nought = "ul.game li.nought",
cross = "ul.game li.cross";

var gameResult = [nought, cross];

var squareIDs = [];

var x = 0;
function resetClick() {
	x = 0;
	gameSquare.value = x;
}

function count() {
	if(x<1)
	{
		x += 1;
	}
	else 
	{
		x = 0;
	}
}

$( "p.reset" ).click(function() {
         location.reload(true);
});

$(gameSquare).bind("click", function(){

	count();
	
	if (x == 1) {

		$(this).addClass("nought");
		$(this).removeClass("blank");


	
	} else if (x == 0) {
		
		$(this).addClass("cross");
		$(this).removeClass("blank");		
		resetClick(); 

	 
	}

	squareIDs.push(x + " " + $(this).attr("id"));

	console.log(squareIDs);	

	var nought_win = 
	   $.inArray("1 a", squareIDs) > -1 
	&& $.inArray("1 b", squareIDs) > -1 
	&& $.inArray("1 c", squareIDs) > -1
	|| $.inArray("1 a", squareIDs) > -1
	&& $.inArray("1 e", squareIDs) > -1
	&& $.inArray("1 i", squareIDs) > -1
	|| $.inArray("1 b", squareIDs) > -1
	&& $.inArray("1 e", squareIDs) > -1
	&& $.inArray("1 h", squareIDs) > -1
	|| $.inArray("1 c", squareIDs) > -1
	&& $.inArray("1 e", squareIDs) > -1
	&& $.inArray("1 g", squareIDs) > -1
	|| $.inArray("1 c", squareIDs) > -1
	&& $.inArray("1 f", squareIDs) > -1
	&& $.inArray("1 i", squareIDs) > -1
	|| $.inArray("1 d", squareIDs) > -1
	&& $.inArray("1 e", squareIDs) > -1
	&& $.inArray("1 f", squareIDs) > -1
	|| $.inArray("1 g", squareIDs) > -1
	&& $.inArray("1 h", squareIDs) > -1
	&& $.inArray("1 i", squareIDs) > -1
	|| $.inArray("1 g", squareIDs) > -1
	&& $.inArray("1 a", squareIDs) > -1
	&& $.inArray("1 d", squareIDs) > -1;	

	if(nought_win) {
		console.log("NOUGHT WINS!");

		$("h1").replaceWith("<h1><span class='nought'>DOGES WINS!</span></h1>");

		$(nought).addClass("scale");
		$(cross).addClass("fade");
    
     $(gameSquare).unbind();	   
    
		return;
	}; 	

	var cross_win = 
	   $.inArray("0 a", squareIDs) > -1 
	&& $.inArray("0 b", squareIDs) > -1 
	&& $.inArray("0 c", squareIDs) > -1
	|| $.inArray("0 a", squareIDs) > -1
	&& $.inArray("0 e", squareIDs) > -1
	&& $.inArray("0 i", squareIDs) > -1
	|| $.inArray("0 b", squareIDs) > -1
	&& $.inArray("0 e", squareIDs) > -1
	&& $.inArray("0 h", squareIDs) > -1
	|| $.inArray("0 c", squareIDs) > -1
	&& $.inArray("0 e", squareIDs) > -1
	&& $.inArray("0 g", squareIDs) > -1
	|| $.inArray("0 c", squareIDs) > -1
	&& $.inArray("0 f", squareIDs) > -1
	&& $.inArray("0 i", squareIDs) > -1
	|| $.inArray("0 d", squareIDs) > -1
	&& $.inArray("0 e", squareIDs) > -1
	&& $.inArray("0 f", squareIDs) > -1
	|| $.inArray("0 g", squareIDs) > -1
	&& $.inArray("0 h", squareIDs) > -1
	&& $.inArray("0 i", squareIDs) > -1
	|| $.inArray("0 g", squareIDs) > -1
	&& $.inArray("0 a", squareIDs) > -1
	&& $.inArray("0 d", squareIDs) > -1;		

	if(cross_win) {
		console.log("CROSS WINS!");

		$("h1").replaceWith("<h1><span class='cross'>CATES WINS!</span></h1>");

		$(cross).addClass("scale");
		$(nought).addClass("fade");
    
		$(gameSquare).unbind();	    

		return;
	}; 	

	if ($("ul.game li.blank").length) {

	} else {
		console.log("TIE!");
	};
  
   $(this).unbind();
  
});