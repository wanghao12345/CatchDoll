$(function(){

	//menu
	$('#menu-btn').on('click',function(){
		/*var height = $('.menu-list').height();
		if (height == 'auto') {
			$('.menu-list').css('height','1.8rem');
		} else {
			$('.menu-list').css('height','auto');
		}*/
		var value = $(this).attr("value");
		if (value == '1') {//展开状态
			// $('.menu-list').css('height','1.8rem');
  			$(".menu-list").animate({'height':'1.8rem'});


			$(this).attr("value","0");
		} else {//收缩状态
			// $('.menu-list').css('height','auto');
			$(".menu-list").animate({'height':'9rem'});
			$(this).attr("value","1");
		}


	})






})