
socket = new WebSocket("ws://ateam.ticp.io:65153");
//打开事件
socket.onopen = function(){
    console.log("Socket 已打开");
};
//获得消息事件
socket.onmessage = function(msg){
    console.log(msg.data);
    var data = JSON.parse(msg.data);
};
//关闭事件
socket.onclose = function(){
    console.log("Socket 已关闭");
    socket = new WebSocket("ws://ateam.ticp.io:65153");
};
//发生了错误事件
socket.onerror = function(){
    console.log("发生了错误");
    socket = new WebSocket("ws://ateam.ticp.io:65153");
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
 * 获取url中参数
 */
function getUrlParam(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
}
/**
 * 获取当前手机的系统类型
 */
function getMobileType(){
	var u = navigator.userAgent;
	var device =""; //当前设备信息
	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
	    return 1;
	} else if (u.indexOf('iPhone') > -1) {//苹果手机
	    return 2;
	}else{
		return 1;
	}
}