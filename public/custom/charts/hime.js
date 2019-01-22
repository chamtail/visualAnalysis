function himeVisual(data, algorithmName) {
    if(data == null)
    {
        data = generateHimeData(14);

    }

    var himeArea = document.getElementById("hime");

    var himeTable = document.getElementById("himeTableDiv");
    var himeTableHeight = (1/2)*himeArea.offsetHeight;
    himeTable.setAttribute("style","height:"+himeTableHeight+"px;");

    // var tableWith = (2/3)*himeArea.offsetWidth;
    // var tableHeight = (1/2)*himeArea.offsetHeight;


    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#himeTable'
            // , id:'testHimeTable'
            , title: '实时数据表'
            // , height: tableHeight
            // , width: tableWith
            , page:true
            , limit: 8
            // , page : {
            //     layout: ['prev', 'page', 'next','skip','count']
            // }
            , data: data.list
            , cols: [[ //表头
                {field: 'id', title: 'ID',  sort: true, fixed: 'left'}
                , {field: 'begin1', title: 'begin1'}
                , {field: 'end1', title: 'end1'}
                , {field: 'begin2', title: 'begin2'}
                , {field: 'end2', title: 'end2'}
                , {field: 'length', title: 'length'}
                , {field: 'distance', title: 'distance'}
            ]]
        });

        //监听行单击事件（单击事件为：rowDouble）
        table.on('row(himeTable)', function(obj) {
            var himeChart1 = document.getElementById("himeChart");
            var himeChart1Height = (1/2)*himeArea.offsetHeight;
            himeChart1.setAttribute("style","height:"+himeChart1Height+"px;");

            var himeChart2 = document.getElementById("subHimeChart");
            var himeChart2Height = (1/2)*himeArea.offsetHeight;
            himeChart2.setAttribute("style","height:"+himeChart2Height+"px;");


            var id = obj.data.id;
            chartData = data.list[id];

            var areaList = [[chartData.begin1, chartData.end1], [chartData.begin2, chartData.end2]];
            himeChart("himeChart", data.value, areaList, algorithmName);

            var value1 = new Array();
            var value2 = new Array();
            for (var i = chartData.begin1; i <= chartData.end1; i++) {
                value1.push(data.value[i]);
            }
            for (var j = chartData.begin2; j <= chartData.end2; j++)
            {
                value2.push(data.value[j]);
            }
            resultChart("subHimeChart",value1,value2);
            // console.log("result:",value1,value2);


            // layer.alert(JSON.stringify(data), {
            //     title: '当前行数据：'
            // });

            obj.tr.addClass('layui-table-click').siblings().removeClass('layui-table-click'); //标注选中样式
        });

        $("#hime").resize(function () {
            var himeArea = document.getElementById("hime");
            var himeTable = document.getElementById("himeTableDiv");
            var himeTableHeight = (1/2)*himeArea.offsetHeight;
            himeTable.setAttribute("style","height:"+himeTableHeight+"px;");
            table.resize("himeTable");
        });


    });







    //-------------显示图-----------------

}

function himeChart(chartId,value,areaList, algorithmName) {

    echarts.dispose(document.getElementById(chartId));
    var myChart = echarts.init(document.getElementById(chartId));

    len = value.length;
    let f = length => Array.from({length}, (v, k) => k);
    xdata = f(len);
    // highLightArea = [ [{xAxis: '07:30'}, {xAxis: '10:00'}],[]]

    var highLightArea = new Array();
    for(var i in areaList)
    {
        var area = new Array();

        for(var j in areaList[i])
        {
            var point = new Object();
            point.xAxis = areaList[i][j];
            area.push(point);
        }
        highLightArea.push(area);
    }
    // console.log("highLightArea",highLightArea);

    option = {
        title: {
            text: algorithmName + '结果'
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
            x:'5%',
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
                itemStyle: {
                    normal: {
                        color: "green"
                    }
                },
                data: value,
                markArea: {
                    itemStyle: {
                        normal: {
                            color: "pink"
                        }
                    },
                    data: highLightArea
                }
            }
        ]

    };

    myChart.setOption(option);

    $("#hime").resize(function () {
        var himeArea = document.getElementById("hime");
        var himeChart1 = document.getElementById("himeChart");
        var himeChart1Height = (1/2)*himeArea.offsetHeight;
        himeChart1.setAttribute("style","height:"+himeChart1Height+"px;");

        myChart.resize();
    });
    window.onresize = function () {
        myChart.resize();
    };

};

function resultChart(chartId,value1,value2) {
    echarts.dispose(document.getElementById(chartId));
    var myChart = echarts.init(document.getElementById(chartId));

    len = value1.length;
    let f = length => Array.from({length}, (v, k) => k);
    xdata = f(len);

    option = {
        animation: false,
        tooltip: {
            trigger: 'axis',  //坐标轴触发提示
            // formatter: function (params) {
            //     // return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
            //     console.log('tooltip:',params);
            // }

        },
        grid:{
            x:'10%',
            y:'10%',
            x2:'5%',
            y2:'12%'

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
                type: 'line',
                smooth: true,
                symbol: 'none',
                // itemStyle: {
                //     normal: {
                //         color: '#ff7f50'
                //     }
                // },
                data: value1,
            },
            {
                type: 'line',
                smooth: true,
                symbol: 'none',
                // itemStyle: {
                //     normal: {
                //         color: '#87cefa'
                //     }
                // },
                data: value2,
            }
        ]
    };
    myChart.setOption(option);

    $("#hime").resize(function () {
        var himeArea = document.getElementById("hime");
        var himeChart2 = document.getElementById("subHimeChart");
        var himeChart2Height = (1/2)*himeArea.offsetHeight;
        himeChart2.setAttribute("style","height:"+himeChart2Height+"px;");
        myChart.resize();
    });

    window.onresize = function () {
        myChart.resize();
    };



}

function generateHimeData(count) {

    //data:
    //      { list:[{id:,begin1:,end1:,begin2:,end2:,length:,distance:},{},...]
    //        value:[]  //原始数据的value向量
    //      }

    var data = new Object();
    var list = new Array
    for(var i =0; i<count; i++)
    {
        var attributes = new Object();
        attributes.id = i ;
        attributes.begin1 = (i+1)*10;
        attributes.end1 = (i+1)*10 + 20;
        attributes.begin2 = (i+2)*20;
        attributes.end2 = (i+2)*20 + 20;
        attributes.length = 500;
        attributes.distance = 10;

        list.push(attributes);
        // var value1 = new Array();
        // var value2 = new Array();
        // for(var j =0; j<500; j++)
        // {
        //     value1.push(Math.round(Math.random()*100));
        //     value2.push(Math.round(Math.random()*100));
        // }
    }
    var value = new Array();
    for(var j=0; j<500; j++)
    {
        value.push(Math.round(Math.random()*100));
    }
    data.value = value;
    data.list = list;
    return data;
}

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

// var data = generateHimeData(14);
// himeVisual(data)