/**
 * Created by Jeremy on 2018/11/13.
 */
let lockReconnect = false;  //避免ws重复连接
let wsUrl = api_map['webSocket'];
console.log(wsUrl);
let ws = null;  // 判断当前浏览器是否支持WebSocket
createWebSocket(wsUrl); //连接ws

// 创建连接
function createWebSocket(url) {
    try{
        if('WebSocket' in window){
            ws = new WebSocket(url);
        }else if('MozWebSocket' in window){
            ws = new MozWebSocket(url);
        }else{
            alert("您的浏览器不支持websocket协议,建议使用新版谷歌、火狐等浏览器，请勿使用IE10以下浏览器，360浏览器请使用极速模式，不要使用兼容模式！");
        }
        initEventHandle();
    }catch(e){
        reconnect(url);
        console.log(e);
    }
}

// 初始化事件处理
function initEventHandle() {
    ws.onclose = function () {
        reconnect(wsUrl);
        console.log("ws连接关闭!" + new Date().toUTCString());
    };
    ws.onerror = function () {
        reconnect(wsUrl);
        console.log("ws连接错误!");
    };
    ws.onopen = function () {
        heartCheck.reset().start();      //心跳检测重置
        console.log("ws连接成功!" + new Date().toUTCString());
    };
    ws.onmessage = function (event) {    //如果获取到消息，心跳检测重置
        heartCheck.reset().start();      //拿到任何消息都说明当前连接是正常的
        console.log("ws收到消息啦:" + event.data);
        // 解析后端传入的数据
        var json = JSON.parse(event.data);
        if(json.code == 0){
            var data = json.data;
            // octave返回信息
            if(data.container === 'octave'){
                console.log('octave');
                if(data.result.type === 'text'){
                    console.log(data.result.content);//返回结果是文本就直接输出
                    var $shell = $('.shell-view');
                    var template_output = _.template('<div class="output-view"><span class="prompt"><%= separate %></span>&nbsp;<span class="output<%= error %>"><%= value %></span></div>');
                    $shell.before(template_output({separate:'&gt;', value:data.result.content, error: ''}) + '<br />');
                }
                else if(data.result.type === 'png'){
                    console.log(data.result.content);
                    var $shell = $('.shell-view');
                    var template_output = _.template('<div class="output-view"><span class="prompt"><%= separate %></span>&nbsp;<span class="output<%= error %>"><img src="<%= value %>"></span></div>');
                    $shell.before(template_output({separate:'&gt;', value:"data:image/png; base64,"+data.result.content, error: ''}) + '<br />');
                }
            }

            // docker返回信息
            if(data.container === 'docker'){
                var verCode = data.result.verCode;
                if(verCode != workflow.verCode){
                    console.log('抱歉，该用户不符合预期');
                    return;
                }
                var nodeType = data.result.type;
                var nodeId = data.result.id;
                var nodeStatus = data.result.status;
                var status = {};
                status[nodeId] = nodeStatus;
                vm.onNodeReRun(nodeId);
                updateNodeStatus(status);
            }
        }
    }
}

// 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function() {
    ws.close();
};

function reconnect(url) {
    if(lockReconnect) return;
    lockReconnect = true;
    setTimeout(function () {     //没连接上会一直重连，设置延迟避免请求过多
        createWebSocket(url);
        lockReconnect = false;
    }, 10000); // 重连时间间隔10秒钟
}

//心跳检测
var heartCheck = {
    timeout: 540000,        //9分钟发一次心跳
    timeoutObj: null,
    serverTimeoutObj: null,
    reset: function(){
        clearTimeout(this.timeoutObj);
        clearTimeout(this.serverTimeoutObj);
        return this;
    },
    start: function(){
        var self = this;
        this.timeoutObj = setTimeout(function(){
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            //onmessage拿到返回的心跳就说明连接正常
            ws.send("ping");
            console.log("ping!");
            self.serverTimeoutObj = setTimeout(function(){//如果超过一定时间还没重置，说明后端主动断开了
                ws.close();     //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
            }, self.timeout)
        }, this.timeout)
    }
};

//将消息显示在网页上
function setMessageInnerHTML(innerHTML){
    document.getElementById('message').innerHTML += innerHTML + '<br/>';
}

//关闭连接
function closeWebSocket(){
    ws.close();
}

//发送消息
function send(){
    var message = document.getElementById('text').value;
    ws.send(message);
}
