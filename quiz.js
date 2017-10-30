document.getElementById("form1").onsubmit=function() {
	       place = parseInt(document.querySelector('input[name = “place"]:checked').value);
		   game = parseInt(document.querySelector('input[name = “game”]:checked').value);
		   color = parseInt(document.querySelector('input[name = “color”]:checked').value);
		   magic = parseInt(document.querySelector('input[name = “magic”]:checked').value);
		   sitcom = parseInt(document.querySelector('input[name = “sitcom”]:checked').value);
		   app = parseInt(document.querySelector('input[name = “app”]:checked').value);


	  // initialize score variables 
	  arthur = 0;
	  zoboomafoo = 0;
	  dragontails = 0;
	  bibbh = 0;
	  bluesclues = 0;
	  cyberchase = 0;
	  
	  //function to calculate score for each question
	  function eachscore(x){
	  if(x == “arthur”) { arthur = arthur + 1}
	  if(x == “zoboomafoo”) { zoboomafoo = zoboomafoo + 1}
	  if(x == “dragontails”) { dragontails = dragontails + 1}
	  if(x == “bibbh”) { bibbh = bibbh + 1}
	  if(x == “bluesclues”) { bluesclues = bluesclues + 1}
	  if(x == “cyberchase”) { cyberchase = cyberchase + 1}
	  }
	  // for the above function, you could also change the 1 to a variable so you could give more points for certain questions
	  
	  //call function for each question
	  eachscore(eval(“place”));
	  eachscore(eval(“game”));
	  eachscore(eval(“color”));
	  eachscore(eval(“magic”));
	  eachscore(eval(“sitcom”));
	  eachscore(eval(“app”));
	  
	  
	  
	  all = [arthur, zoboomafoo, dragontails, bibbh, bluesclues, cyberchase];
	  
	//get the max score  in the array
	maxscore = Math.max.apply(Math,all);
	
    //figure out which score is the max score by identifying its index number
	for(i=0; i<all.length; i++) {
	if(all[i]==maxscore) {
	highest = i;
	}
	}
	

// object holding scores and feedback	
scores = [{index:0, feedback: "You got Arthur”},
{index:1, feedback: "You got Zoboomafoo”},
{index:2, feedback: "You got Dragon Tails”}
{index:3, feedback: "You got Bear in the Big Blue House”},
{index:4, feedback: "You got Blues Clues”},
{index:5, feedback: "You got Cyberchase”},];


//loop to match index to score and reply with feedback
for(i=0;i<scores.length; i++) {
if(highest == scores[i].index) {
document.getElementById(“grade2”).innerHTML = scores[i].feedback;
}


	return false; // required to not refresh the page; just leave this here
	} //this ends the submit function