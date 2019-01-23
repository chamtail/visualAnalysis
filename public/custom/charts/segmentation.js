function segmentationVisual(data) {
    if(data == null)
    {
        data = generateSegData(3);

    }
    //---------显示列表---------------

    var himeArea = document.getElementById("segment");

    var himeTable = document.getElementById("segmentTableDiv");
    var himeTableHeight = himeArea.offsetHeight;
    himeTable.setAttribute("style","height:"+himeTableHeight+"px;");

    var himeChart1 = document.getElementById("segmentChart");
    // var himeChart1Width = himeArea.offsetWidth;
    var himeChart1Height = himeArea.offsetHeight;
    // himeChart1.setAttribute("style","width:"+himeChart1Width+"px;height:"+himeChart1Height+"px;");
    himeChart1.setAttribute("style","height:"+himeChart1Height+"px;");



    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#segmentTable'
            ,id: 'segmentTable'
            , title: '分段结果'
            // , height: tableHeight
            // , width: tableWith
            // , page : true
            // , limit: 5
            , data: data.list
            , cols: [[ //表头
                {type:'checkbox'}
                ,{field: 'id', title: 'ID'}
            ]]
        });

        //监听行单击事件（单击事件为：rowDouble）
        table.on('checkbox(segmentTable)', function(obj){
            // console.log("obj:",obj);
            var selectedData = layui.table.checkStatus('segmentTable').data;
            console.log("check:",selectedData);
            segmentChart(selectedData[0],data.value);

            // himeChart("segmentChart",chartData);     //chart's id
            //标注选中样式
            // obj.tr.addClass('layui-table-click').siblings().removeClass('layui-table-click');
        });



    });



}

function segmentChart(segmentData,originalValue) {

    echarts.dispose(document.getElementById('segmentChart'));
    var myChart = echarts.init(document.getElementById('segmentChart'));

    len = originalValue.length;
    let f = length => Array.from({length}, (v, k) => k);
    xdata = f(len);

    ydata = originalValue;

    // pointlabel = abnomalData.pointlabel;
    arealabel = segmentData.area;

    //数据格式：
    //abnormalPoints = [{xAxis:"00:00",yAxis:300},{xAxis:'01:15',yAxis:280}];
    //abnormalArea = [ [{xAxis: '07:30'}, {xAxis: '10:00'}],[]]
    //pieces = [{gt:2,lte: 3,color: 'red'}

    /*-------------数据预处理------------*/

    // var abnormalPoints = new Array();
    // var piecesData = new Array();
    var abnormalArea = new Array();

    /*--------处理异常点数据，标记红色空心圆--------*/
    // for(var i in pointlabel)
    // {
    //     var point = new Object();
    //     point.xAxis = xdata[pointlabel[i]];
    //     point.yAxis = ydata[pointlabel[i]];
    //     abnormalPoints.push(point);
    // }
    // //console.log(abnormalPoints);

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
    //console.log("abnormalArea:",abnormalArea);


    /*--------处理异常区域显示数据，线段标记红色--------*/
    // var st=0;
    // for(var i in arealabel)
    // {
    //
    //     var normalPiece = new Object();
    //     var abnormalPiece = new Object();
    //
    //     normalPiece.gt = st;
    //     normalPiece.lte = arealabel[i][0];
    //     normalPiece.color = 'green';
    //
    //     abnormalPiece.gt = arealabel[i][0];
    //     abnormalPiece.lte = arealabel[i][1];
    //     abnormalPiece.color = 'red';
    //
    //     piecesData.push(normalPiece);
    //     piecesData.push(abnormalPiece);
    //
    //     st = arealabel[i][1];
    // }
    // var endPiece = new Object();
    // endPiece.gt = st;
    // endPiece.lte = xdata.length;
    // endPiece.color = 'green';
    // piecesData.push(endPiece);


    /*---------设置图标显示的牌配置项------------*/
    option = {
        title: {
            text: 'Segment Result'
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
            x:'10%',
            y:'15%',
            x2:'10%',
            y2:'15%'

        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,  //坐标轴两端是否留白
            data: xdata
        },
        yAxis: {
            type: 'value',
        },
        series: [
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
                data: ydata,
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

    $("#segment").resize(function () {
        var himeArea = document.getElementById("segment");
        var himeChart1 = document.getElementById("segmentChart");
        var himeChart1Height = himeArea.offsetHeight;
        himeChart1.setAttribute("style","height:"+himeChart1Height+"px;");

        myChart.resize();
    });

    myChart.setOption(option);



    // myChart.hideLoading();
}
function generateSegData(count) {

    //data:
    //      { list:[{id:,area:[]},{id:,area:[]},...]
    //        value:[]  //原始数据的value向量
    //      }

    var data = new Object();
    var list = new Array
    for (var i = 0; i < count; i++) {
        var attributes = new Object();
        attributes.id = i;

        attributes.area = [[0 + 3 * i, 2 + 3 * i], [6 + 3 * i, 8 + 3 * i]];

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
    for (var j = 0; j < 500; j++) {
        value.push(Math.round(Math.random() * 100));
    }
    data.value = value;
    data.list = list;
    return data;
};

// var data = generateSegData(3);
// console.log("222:",data);
// segmentationVisual(data)
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






