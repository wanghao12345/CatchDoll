
$(function(){
	// tab
	$('ul#tab li').on('click',function(){
		$('ul#tab li').removeClass('active');
		$(this).addClass('active');
		if (parseInt($(this).index()) == 4) {
			$('ul#tab li:last-child div.tab-bottom img').css('width','1.9rem');
		}
		
	})
	/**
	 *菜单
	 */
	$('#logo-btn').on('click',function(){
		$(".menu-frame").load("template/menu.html");
	})
	$('.menu-frame').on('click','.menu',function(){
		$(this).remove();
	})

	 /*******************-----意见反馈-----******************/
	 //打开
	$('.menu-frame').on('click','#menu_news',function(){
		$(".menu-list-frame").load("template/menu-Opinion.html");
	})
	//关闭
	$('.menu-list-frame').on('click','#close',function(){
		$('.menu-list-frame').html('');
	});
	//取消
	$('.menu-list-frame').on('click','#cancer',function(){
		$('.menu-list-frame').html('');
	});
	//确定
	$('.menu-list-frame').on('click','#query',function(){
		$('.menu-list-frame').html('');
	});
	//监听输入
	$('.menu-list-frame').on('input propertychange','#textarea',function(){
		var value = $(this).val().length;
		$('.menu-list-news #wordsNumber').html(value);
	})







})