$(function(){
	//点击获取验证码按钮
	$('button#verification-btn').on('click',function(){
		$(this).css('display','none');
		$('.verification span#CountDown').css('display','block');
		countDownTime60();
	})





})
/**
 *倒计时1分钟
 */
function countDownTime60(){
	var num = 59;
	var time = window.setInterval(function(){
		num = num - 1;
		if (num==-1) {//倒计时结束
			$('button#verification-btn').css('display','block');
			$('.verification span#CountDown').css('display','none');
			window.clearInterval(time);
		} else {
			$('.verification span#CountDown').html(num+'S');		
		}
	},1000)
}