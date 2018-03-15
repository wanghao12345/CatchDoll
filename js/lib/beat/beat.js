/**
 *跳动
 */
 DocumentBeat('#menu-email img');
 DocumentBeat('#menu-knapsack img');
function DocumentBeat(Document){
	var time = window.setInterval(function(){
		DocumentBeatTop(Document);
	},1000);
}

function DocumentBeatTop(Document){
	var time1 = window.setTimeout(function(){
		$(Document).css('margin-top','0rem');
		DocumentBeatBottom(Document);
	},300);	
}
function DocumentBeatBottom(Document){
	var time2 = window.setTimeout(function(){
		$(Document).css('margin-top','0.3rem');
	},300);
}



