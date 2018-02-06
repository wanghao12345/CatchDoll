socket = new WebSocket("ws://ateam.ticp.io:65154");
// socket = new WebSocket("ws://ateam.ticp.io:55151");
//打开事件
socket.onopen = function(){
    console.log("Socket 已打开");
    sendTcpLogin();
};
//获得消息事件
socket.onmessage = function(msg){
    console.log(msg.data);
    var data = JSON.parse(msg.data);
    switch(data.i){
    	case 10002: //tcplogin请求
    		getTcpLogin(data.d);
    	break;
    	case 10011: //获取旁观信息
    		getOnlooker(data.d);
    	break;
    	case 10020: //获取旁观头像
    		getOnlookerImg(data.d);
    	break;
    	case 10022: //获取用户碎片数
    		getFragment(data.d);
    	break;
    	case 10023: //是否有人在玩
    		getIsHavePerson(data.d);
    	break;    	
    }
};
//关闭事件
socket.onclose = function(){
    console.log("Socket 已关闭");
    // socket = new WebSocket("ws://ateam.ticp.io:65153");
};
//发生了错误事件
socket.onerror = function(){
    console.log("发生了错误");
    // socket = new WebSocket("ws://ateam.ticp.io:65153");
}
//发送
var sendSocket = function(data){
    socket.send(data);
}
//关闭
var closeSocket = function(){
    socket.close();
}


/**
 * 获取长连接登录的数据
 */
function getTcpLogin(data){

	//发起获取旁观信息请求
	sendOnlooker();
}
/**
 * 获取旁观信息
 */
function getOnlooker(data){
	var money = data.money;
	$('span#coin-number').html(money);
	var watch = data.watch;
	$('i#watch').html(watch);
	//发起获取旁观头像
	sendOnlookerImg();
}
/**
 * 获取旁观头像 
 */
function getOnlookerImg(data){
	var item = data.viewers_head;
	for (var i = 0; i < 3; i++) {
		$('#head-img'+(i+1)).html('<img src='+item[i].img+' alt="头像" />');
	}
	//获取用户碎片数
	sendFragment();
}
/**
 * 获取用户碎片数
 */
function getFragment(data){

	//获取是否有人在玩
	sendIsHavePerson();
}

/**
 * 获取是否有人在玩
 */
function getIsHavePerson(data){
	
}