function matrixProfileVisual(chartId,data) {
    if(data == null)
    {
        data = generateMatrixData(100);
    }
    var matrixChart1 = document.getElementById(chartId+'1');
    var matrixChart2 = document.getElementById(chartId+'2');

    var chartWidth = document.getElementById(chartId).offsetWidth;
    var chartHeight = (1/2)*(document.getElementById(chartId).offsetHeight);
    console.log("width:",chartWidth,"height:",chartHeight);
    console.log("youmuyou:",matrixChart1,matrixChart2);
    matrixChart1.setAttribute("style","width:"+chartWidth+"px;height:"+chartHeight+"px;");
    matrixChart2.setAttribute("style","width:"+chartWidth+"px;height:"+chartHeight+"px;");

    var myChart1 = echarts.init(matrixChart1);
    var myChart2 = echarts.init(matrixChart2);

    xdata = data.timestamp;
    y1 = data.startXs;
    y2 = data.similarities;

    option1 = {
        title: {
            text: 'matrixProfile检测结果'
            // subtext: '纯属虚构'
        },
        animation: false,
        tooltip: {
            trigger: 'axis',  //坐标轴触发提示
            // formatter: function (params) {
            //     // return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
            //     console.log('tooltip:',params);
            // }

        },
        toolbox: {
            right:0,
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                brush: {
                    type: ['lineX', 'clear']
                },
                saveAsImage: {}
            }
        },
        brush: {
            xAxisIndex: 'all',
            brushLink: 'all',
            outOfBrush: {
                colorAlpha: 0.1
            }
        },

        dataZoom : [
            {
                type:'slider',
                start:0,
                end:100
            },{
                type:'inside',  //鼠标缩放
                start:0,
                end:100
            }
        ],
        grid:{
            x:'8%',
            y:'15%',
            x2:'2%'

        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,  //坐标轴两端是否留白
            data: xdata
        },
        yAxis: {
            type: 'value',
        },
        series:[
            {
                large:true, //测试开启后显示大数据时间上有没有优化
                type: 'line',
                smooth: true,
                symbol: 'none',
                data: y1
            }
        ]

    };

    myChart1.setOption(option1);

    option2 = JSON.parse(JSON.stringify(option1));
    option2.title = {};
    option2.series[0].data = y2;
    myChart2.setOption(option2);



    $("#matrixProfile1").resize(function () {
        myChart1.resize();
    });
    $("#matrixProfile2").resize(function () {
        myChart2.resize();
    });


};

function generateMatrixData(count) {
    var data = new Object();
    var timestamp = new Array();
    var value = new Array();
    var similarities = new Array();

    var baseValue = Math.random() * 1000;
    var time = +new Date(2011, 0, 1);
    var smallBaseValue;

    function next(idx) {
        smallBaseValue = idx % 30 === 0
            ? Math.random() * 700
            : (smallBaseValue + Math.random() * 500 - 250);
        baseValue += Math.random() * 20 - 10;
        return Math.max(
            0,
            Math.round(baseValue + smallBaseValue) + 3000
        );
    }


    for (var i = 0; i <= count; i++) {
        timestamp.push(i);
        value.push(next(i).toFixed(2));
        similarities.push(Math.random());

    }
    data.timestamp=timestamp;
    data.startXs = value;
    data.similarities = similarities;


    return data;
}
// data = new Object();
// data.timestamp = ["00:00", '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30','18:45', '20:00', '21:15', '22:30', '23:45'];
// data.startXs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// data.similarities = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6];

// matrixProfileVisual("matrixProfile",null);
(function($, h, c) {
    var a = $([]),
        e = $.resize = $.extend($.resize, {}),
        i,
        k = "setTimeout",
        j = "resize",
        d = j + "-special-event",
        b = "delay",
        f = "throttleWindow";
    e[b] = 250;
    e[f] = true;
    $.event.special[j] = {
        setup: function() {
            if (!e[f] && this[k]) {
                return false;
            }
            var l = $(this);
            a = a.add(l);
            $.data(this, d, {
                w: l.width(),
                h: l.height()
            });
            if (a.length === 1) {
                g();
            }
        },
        teardown: function() {
            if (!e[f] && this[k]) {
                return false;
            }
            var l = $(this);
            a = a.not(l);
            l.removeData(d);
            if (!a.length) {
                clearTimeout(i);
            }
        },
        add: function(l) {
            if (!e[f] && this[k]) {
                return false;
            }
            var n;
            function m(s, o, p) {
                var q = $(this),
                    r = $.data(this, d);
                r.w = o !== c ? o: q.width();
                r.h = p !== c ? p: q.height();
                n.apply(this, arguments);
            }
            if ($.isFunction(l)) {
                n = l;
                return m;
            } else {
                n = l.handler;
                l.handler = m;
            }
        }
    };
    function g() {
        i = h[k](function() {
                a.each(function() {
                    var n = $(this),
                        m = n.width(),
                        l = n.height(),
                        o = $.data(this, d);
                    if (m !== o.w || l !== o.h) {
                        n.trigger(j, [o.w = m, o.h = l]);
                    }
                });
                g();
            },
            e[b]);
    }
})(jQuery, this);