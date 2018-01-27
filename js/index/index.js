
$(function(){
	// tab
	$('ul#tab li').on('click',function(){
		$('ul#tab li').removeClass('active');
		$(this).addClass('active');
		if (parseInt($(this).index()) == 4) {
			$('ul#tab li:last-child div.tab-bottom img').css('width','1.9rem');
		}
		
	})
	//menu
	$('#logo-btn').on('click',function(){
		$(".menu-frame").load("template/menu.html");
	})
	$('.menu-frame').on('click','.menu',function(){
		$(this).remove();
	})
})