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
        case 10004: //房间正忙
            getStartGame(data);
        break;
        case 10010: //开始游戏
            getStartGame(data);
        break;
    	case 10011: //获取旁观信息
    		getOnlooker(data.d);
    	break;
        case 10012: //离开游戏
            getLeaveGame(data.d);
        break;  
        case 10018: //接收弹幕
            getBarrage(data.d);
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
};
//发生了错误事件
socket.onerror = function(){
    console.log("发生了错误");
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
/**
 * 获取旁观头像 
 */
function getOnlookerImg(data){
	var item = data.viewers_head;
	for (var i = 0; i < 3; i++) {
		$('#head-img'+(i+1)).html('<img src='+item[i].img+' alt="头像" />');
	}
}
/**
 * 获取用户碎片数
 */
function getFragment(data){

}

/**
 * 获取是否有人在玩
 */
function getIsHavePerson(data){
	var content = '<div class="head-img" id="head-img0"><img src='+data.do_headimg+' alt="头像" /></div>';
    content += '<div class="status1">';
    content += '<div class="status-name">'+data.do_name+'</div>';
    content += '<div class="status-content">正在抓取...</div>';
    content += '</div>';
    $('#game-user').html(content);
}

/**
 * 开始游戏
 */
function getStartGame(data){
    if (data.i == 10010) {
        addTip('请下载app开始游戏!');
    }
    if (data.i == 10004) {
        addTip(data.d.msg);
    }
}
/**
 * 离开游戏
 */
function getLeaveGame(data){
    
}
/**
 * 接收弹幕
 */
function getBarrage(data){
    // var msg = data.d.result;
    var time = window.setInterval(function(){
        $('canvas').barrager([{"msg":'弹幕消息'}]);
    },1000)
}