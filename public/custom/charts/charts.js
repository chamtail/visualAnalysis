/**
 * Created by Jeremy on 2018/11/13.
 */

function generateData(count) {
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

    var categoryData = [];
    var valueData = [];

    for (var i = 0; i < count; i++) {
        categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
        valueData.push(next(i).toFixed(2));
        time += 1000;
    }

    return {
        label0: categoryData,
        label1: valueData
    };
}

function abnormalVisual(abnomalData) {
    if(abnomalData == null){
        abnomalData = new Object();
        abnomalData.timestamp = ["00:00", '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'];
        abnomalData.value = [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400];
        abnomalData.pointlabel = [0,4];
        abnomalData.arealabel =[[0,3],[5,6]];
    }

    var myChart = echarts.init(document.getElementById('abnormalChart'));

    xdata = abnomalData.timestamp;
    ydata = abnomalData.value;
    pointlabel = abnomalData.pointlabel;
    arealabel = abnomalData.arealabel;

    //数据格式：
    //abnormalPoints = [{xAxis:"00:00",yAxis:300},{xAxis:'01:15',yAxis:280}];
    //abnormalArea = [ [{xAxis: '07:30'}, {xAxis: '10:00'}],[]]
    //pieces = [{gt:2,lte: 3,color: 'red'}

    /*-------------数据预处理------------*/

    var abnormalPoints = new Array();
    var abnormalArea = new Array();
    var piecesData = new Array();

    /*--------处理异常点数据，标记红色空心圆--------*/
    for(var i in pointlabel)
    {
        var point = new Object();
        point.xAxis = xdata[pointlabel[i]];
        point.yAxis = ydata[pointlabel[i]];
        abnormalPoints.push(point);
    }
    //console.log(abnormalPoints);

    /*--------处理异常区域显示数据，区域标记红色--------*/
    for(var i in arealabel)
    {
        var area = new Array();

        for(var j in arealabel[i])
        {
            var point = new Object();
            point.xAxis = xdata[arealabel[i][j]];
            area.push(point);
        }
        abnormalArea.push(area);
    }
    console.log("abnormalArea:",abnormalArea);


    /*--------处理异常区域显示数据，线段标记红色--------*/
    var st=0;
    for(var i in arealabel)
    {

        var normalPiece = new Object();
        var abnormalPiece = new Object();

        normalPiece.gt = st;
        normalPiece.lte = arealabel[i][0];
        normalPiece.color = 'green';

        abnormalPiece.gt = arealabel[i][0];
        abnormalPiece.lte = arealabel[i][1];
        abnormalPiece.color = 'red';

        piecesData.push(normalPiece);
        piecesData.push(abnormalPiece);

        st = arealabel[i][1];
    }
    var endPiece = new Object();
    endPiece.gt = st;
    endPiece.lte = xdata.length;
    endPiece.color = 'green';
    piecesData.push(endPiece);


    /*---------设置图标显示的牌配置项------------*/
    option = {
        title: {
            text: '异常检测结果显示'
            // subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis',  //坐标轴触发提示
        },
        dataZoom : {
            show : true,
            realtime : true,
            start : 0,
            end : 100
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,  //坐标轴两端是否留白
            data: xdata
        },
        yAxis: {
            type: 'value',
        },
        visualMap: {
            show: false,
            dimension: 0,
            pieces:piecesData
        },
        series: [
            {
                type: 'line',
                smooth: true,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: "green"
                    }
                },
                data: ydata,
                markPoint: {
                    symbol: "emptyCircle", //标注类型
                    symbolSize: 10, //标记大小
                    itemStyle: {
                        normal: {
                            color: "red"
                        }
                    },
                    data: abnormalPoints
                },
                markArea: {
                    itemStyle: {
                        normal: {
                            color: "pink"
                        }
                    },
                    data: abnormalArea
                    // [ [{xAxis: '07:30'}, {xAxis: '10:00'}]]
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    $("#abnormalChart").resize(function () {
        myChart.resize();
    });

    window.onresize = function () {
        ///用于使chart自适应高度和宽度
        myChart.resize();
    };
}

function motifVisual(motifData)
{
    if(motifData == null){
        motifData = new Object();
        motifData.timestamp = ["00:00", '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'];
        motifData.value = [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400];
        motifData.motifLabel =[[0,3],[5,6]];
    }
    var myChart = echarts.init(document.getElementById('motifChart'));
    xdata = motifData.timestamp;
    ydata = motifData.value;
    motifLabel = motifData.motifLabel;

    var motifArea = new Array();
    var piecesData = new Array();

    /*--------处理异常区域显示数据，区域标记红色--------*/
    for(var i in motifLabel)
    {
        var area = new Array();

        for(var j in motifLabel[i])
        {
            var point = new Object();
            point.xAxis = xdata[motifLabel[i][j]];
            area.push(point);
        }
        motifArea.push(area);
    }
    //console.log("abnormalArea:",abnormalArea);


    /*--------处理异常区域显示数据，线段标记红色--------*/
    var st=0;
    for(var i in motifLabel)
    {

        var normalPiece = new Object();
        var abnormalPiece = new Object();

        normalPiece.gt = st;
        normalPiece.lte = motifLabel[i][0];
        normalPiece.color = 'black';

        abnormalPiece.gt = motifLabel[i][0];
        abnormalPiece.lte = motifLabel[i][1];
        abnormalPiece.color = 'green';

        piecesData.push(normalPiece);
        piecesData.push(abnormalPiece);

        st = motifLabel[i][1];
    }
    var endPiece = new Object();
    endPiece.gt = st;
    endPiece.lte = xdata.length;
    endPiece.color = 'black';
    piecesData.push(endPiece);


    /*---------设置图标显示的牌配置项------------*/
    option = {
        title: {
            text: 'Motif结果显示'
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
        xAxis:  {
            type: 'category',
            boundaryGap: false,  //坐标轴两端是否留白
            data: xdata
        },
        yAxis: {
            type: 'value',
        },
        visualMap: {
            show: false,
            dimension: 0,
            pieces:piecesData
        },
        series: [
            {
                large:true, //测试开启后显示大数据时间上有没有优化
                type: 'line',
                smooth: true,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: "black"
                    }
                },
                data: ydata,
                markArea: {
                    itemStyle: {
                        normal: {
                            color: "#B6FFED"
                        }
                    },
                    data: motifArea
                }
            }
        ]
    };
    myChart.setOption(option);
    $("#motifChart").resize(function () {
        myChart.resize();
    });

    window.onresize = function () {
        ///用于使chart自适应高度和宽度
        myChart.resize();
    };
}


function showGraph(data) {
    var chartDom = document.getElementById('data-load');
    var myChart = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom);
    myChart.showLoading();
    data = data || generateData(100);
    console.log(data);
    var option = {
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            bottom: 90
        },
        dataZoom: [{
            type: 'inside'
        }, {
            type: 'slider'
        }],
        xAxis: {
            data: data.label0,
            silent: false,
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            }
        },
        yAxis: {
            splitArea: {
                show: false
            }
        },
        series: [{
            type: 'bar',
            data: data.label1,
            // Set `large` for large data amount
            large: true
        }]
    };
    myChart.hideLoading();
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    //用于使chart自适应高度和宽度
    window.onresize = myChart.resize();
}


//监听div大小变化
//之后剥离到其他util文件中去
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
