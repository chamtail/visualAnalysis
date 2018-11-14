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
        categoryData: categoryData,
        valueData: valueData
    };
}

function abnormalVisual(abnomalData) {
    // var abnomalData = new Object();
    // abnomalData.timestamp = ["00:00", '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'];
    // abnomalData.value = [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400];
    // abnomalData.pointlabel = [0,4];
    // abnomalData.arealabel =[[0,3],[5,6]];

    var myChart = echarts.init(document.getElementById('bnormalChart'));


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
}

/**
function showGraph() {
    var chartDom = document.getElementById('sample');
    var myChart = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom);
    myChart.showLoading();
    var dataCount = 100;
    var data = generateData(dataCount);

    var option = {
        title: {
            text: echarts.format.addCommas(dataCount) + ' Data',
            left: 10
        },
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
            data: data.categoryData,
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
            data: data.valueData,
            // Set `large` for large data amount
            large: true
        }]
    };
    myChart.hideLoading();
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    //用于使chart自适应高度和宽度
    window.onresize = myChart.resize();
}*/