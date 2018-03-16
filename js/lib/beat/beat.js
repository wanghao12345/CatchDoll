/**
 *跳动
 */
var Beat_tips_time1,Beat_tips_time2;
function DocumentBeat1(Document){
	Beat_tips_time1 = window.setInterval(function(){
		DocumentBeatTop(Document);
	},1000);
}
function DocumentBeat2(Document){
	Beat_tips_time2 = window.setInterval(function(){
		DocumentBeatTop(Document);
	},1000);
}

function DocumentBeatTop(Document){
	var time1 = window.setTimeout(function(){
		$(Document).css('margin-top','-0.3rem');
		DocumentBeatBottom(Document);
	},300);	
}
function DocumentBeatBottom(Document){
	var time2 = window.setTimeout(function(){
		$(Document).css('margin-top','0rem');
	},300);
}



