$(function(){
	//点击获取验证码按钮
	$('button#verification-btn').on('click',function(){
		$(this).css('display','none');
		$('.verification span#CountDown').css('display','block');
		getZipCode(getParams());
		// countDownTime60();
	})





})
/**
 *倒计时1分钟
 */
function countDownTime60(){
	var num = 59;
	$('.verification span#CountDown').html(num+'S');
	var time = window.setInterval(function(){
		num = num - 1;
		if (num==-1) {//倒计时结束
			$('button#verification-btn').css('display','block');
			$('.verification span#CountDown').css('display','none');
			window.clearInterval(time);
			$('.verification span#CountDown').html('59S');
		} else {
			$('.verification span#CountDown').html(num+'S');		
		}
	},1000)
}

/**
 *获取当前时间戳
 */
function getTimeStamp(){
	var time = (new Date()).valueOf();
	return time;
}
/**
 *获取sign
 */
function getSign(time,token){
 	return $.md5(time+'.'+token+'.'+'tomcatch');
 }
/**
 *获取随机字符串
 */
function randomString(len) {
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}
/**
 *获取参数
 */
function getParams(){
	var p = {};
	p.time = getTimeStamp();
	p.token = randomString(12);
	// p.token = '213213sfsdfsf';
	p.sign = getSign(p.time,p.token);
	p.phone = $('input#login-phone').val();
	return p;
}


/**
 *请求验证码
 */ 
function getZipCode(data){
 	var myUrl = 'http://web.zhuazhuale.4utec.cn:9107/12';
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  data:data,
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    if (data.ret[0].d.errcode == 0) {
	    	countDownTime59();
	    } else {
	    	tip(data.ret[0].d.msg);
	    }

	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})	
 }