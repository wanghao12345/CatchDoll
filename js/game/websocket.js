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
}



