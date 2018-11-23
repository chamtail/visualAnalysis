/**
 * Created by Jeremy on 2018/11/13.
 */

var websocket = null;

//判断当前浏览器是否支持WebSocket
if('WebSocket' in window){
    websocket = new WebSocket(api_map['webSocket']);
}
else{
    alert('Not support websocket')
}

//连接发生错误的回调方法
websocket.onerror = function(){
    setMessageInnerHTML("error");
};

//连接成功建立的回调方法
websocket.onopen = function(event){
    setMessageInnerHTML("open");
};

//接收到消息的回调方法
websocket.onmessage = function(event){
    setMessageInnerHTML(JSON.stringify(event.data));
    // 解析后端传入的数据
    var data = JSON.stringify(event.data);

    // 更新节点状态
    var info = data.replace(/\"/g, "").split("_");
    var verCode = info[0];
    var nodeType = info[1];
    var nodeId = info[2];
    var nodeStatus = info[3];
    var status = {};
    status[nodeId] = nodeStatus;
    updateNodeStatus(status);
};

//连接关闭的回调方法
websocket.onclose = function(){
    setMessageInnerHTML("close");
    // location.reload();
};

//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function(){
    websocket.close();
};

//将消息显示在网页上
function setMessageInnerHTML(innerHTML){
    document.getElementById('message').innerHTML += innerHTML + '<br/>';
}

//关闭连接
function closeWebSocket(){
    websocket.close();
}

//发送消息
function send(){
    var message = document.getElementById('text').value;
    websocket.send(message);
}