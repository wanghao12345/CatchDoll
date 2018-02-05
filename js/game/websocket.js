
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



