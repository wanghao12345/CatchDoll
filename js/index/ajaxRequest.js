/**
 *获取机器类型
 */
RequestMachineType();
function RequestMachineType(){
	var myUrl = 'http://ateam.ticp.io:9107/45';
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    var item = data.ret[0].d.categoryList;
	    var width = item.length*2.8+1;
	    $('#tab').css('width',width+'rem');
	    $('#tab').html('');
	    for (var i = 0; i < item.length; i++) {
	    	var id = item[i].id;
	    	var name = item[i].name;
	    	if (i == 0) {
	    		var content = '<li class="active" value='+id+'>';
	    	} else {
	    		var content = '<li value='+id+'>';
	    	}
	    	content += '<div class="tab">';
	    	content += '<div class="tab-bottom">'+name+'</div>';
	    	content += '</div>';
	    	content += '</li>';
	    	$('#tab').append(content);
	    }
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})	
}

/**
 *获取机器列表
 */
RequestMachineList(0);
function RequestMachineList(type) {
	var myUrl = 'http://ateam.ticp.io:9107/14?type='+type;
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    $('ul#machineList').html('');
	    var item = data.ret[0].d.machineData;
	    for (var i = 0; i < item.length; i++) {
	    	var mid = item[i].mid;//机器id
	    	var doll_id = item[i].doll_id;//玩偶id
	    	var price = item[i].price;
	    	var inventory = item[i].inventory;//库存
	    	var status = item[i].status;//状态
	    	var img_url = 'http://ateam.ticp.io:9107/'+item[i].img_url;
	    	var name = item[i].name;//名字

	    	var content = '<li>';
	    	content += '<input type="hidden" id="mid" value='+mid+' />';
	    	content += '<input type="hidden" id="doll_id" value='+doll_id+' />';
	    	content += '<div class="list">';
	    	content += '<div class="list-top">';
	    	content += '<div class="list-num">'+inventory+'</div>';
	    	switch(status){
	    		case 1://使用中
			    	content += '<div class="list-status list-status2">';
			    	content += '<img src="img/index/list_status2.png" alt="维修中">';
			    	content += '<span>使用中......</span>';
			    	content += '</div>';	    		
	    		break;
	    		case 2://维护
			    	content += '<div class="list-status list-status1">';
			    	content += '<img src="img/index/list_status1.png" alt="维修中">';
			    	content += '<span>维修中......</span>';
			    	content += '</div>';		    		
	    		break;
	    	}
	    	content += '<div class="list-img">';
	    	content += '<img src='+img_url+' alt="测试">';
	    	content += '</div>';
	    	content += '</div>';
	    	content += '<div class="list-bottom">';
	    	content += '<div class="list-title">'+name+'</div>';
	    	content += '<div class="list-coin">'+price+'/次</div>';
	    	content += '</div>';
	    	content += '</div>';
	    	content += '</li>';
	    	$('ul#machineList').append(content);
	    }
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})	
}
/**
 * 获取测试token,guestno
 */
var token = '';
var guestno = ''
getTestToken();
function getTestToken(){
	var myUrl = 'http://ateam.ticp.io:9107/2?deviceid=apple11s';
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    token = data.ret[0].d.token;
	    guestno = data.ret[0].d.guestno;
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})		
}

/**
 * 意见反馈
 */
function feelbackOpinion(advice){
	var myUrl = 'http://ateam.ticp.io:9107/23?tk='+token+'&advice='+advice;
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)
	    if (data.ret[0].d.errcode == 0) {
	    	alert('意见反馈成功！');
	    }
	    if (data.ret[0].d.errcode == -1) {
	    	alert(data.ret[0].d.msg);
	    }
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})	
}





/**
 * 分享游戏接口(邀请码分享)
 */
function InvitationCodeShare(token){
	var myUrl = 'http://ateam.ticp.io:9107/43?tk='+token+'&type=invite';
	$.ajax({
	  url: myUrl,
	  type: 'get',
	  dataType: 'json',
	  success: function (data) {
	    console.log(data)

	    var inviteCode = data.ret[0].d.inviteCode;//邀请码
	    var QR_img = 'http://ateam.ticp.io:9107'+data.ret[0].d.qrCode;//邀请二维码
	    var inviteCodeArr = inviteCode.split('');
	    $('.share1 #share1-Invitation').html('');
	    $('.share1 #share1-QR').html('');
	    var content = "";
	    for (var i = 0; i < inviteCodeArr.length; i++) {
	    	content += '<span>'+inviteCodeArr[i]+'</span>'
	    }
	    $('.share1 #share1-Invitation').append(content);
	    $('.share1 #share1-QR').append('<img src='+QR_img+' alt="二维码">');
	  },
	  fail: function (err) {
	    console.log(err)
	  }
	})		
}
