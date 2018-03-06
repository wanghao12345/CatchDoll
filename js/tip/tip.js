	
/**
 * 提示
 */
function addTip(msg){
	var content = '<div class="tip" id="tip">';
	content += '<div class="tip-content">';
	content += '<div class="tip-main-content">';
	// content += '<div class="close" id="tip-close"></div>';
	content += '<button class="close" id="tip-close"></button>';
	// content += '<div class="button" id="tip-btn"></div>';
	content += '<button class="button" id="tip-btn"></button>';
	content += '<div class="tip-info" id="tip-info">'+msg+'</div>';
	content += '</div>';
	content += '</div>';
	content += '</div>';
	$('body').append(content);
}