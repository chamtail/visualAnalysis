function generateMotifData(count) {
    var motifSets = new Array();
    for(var i =0; i<count; i++)
    {
        var motifSet = new Object();



        var value = new Array();
        for(var j = 1; j<21;j++)
        {
            value.push(Math.round(Math.random()*100));
        }
        motifSet.timestamp = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
        motifSet.value = value;
        motifSet.motifLabel = [[1,4],[6,7]];

        motifSet.attributes = ["id","level","frequency","rule","expandRule","used","meanLength","minMaxLenth"];
        motifSet.id = i;
        motifSet.level = i
        motifSet.frequency = "2";
        motifSet.rule = "aabb";
        motifSet.expandRule = "aabbcc";
        motifSet.used = "0";
        motifSet.meanLength = "10";
        motifSet.minMaxLenth = "10-20";
        motifSet.subSetTimestamp = [1,2,3,4];

        var subSetVaule = new Array();
        var temlist = new Array();
        var templist2 = new Array();
        for(var j = 1; j<=4; j++)
        {
            temlist.push(value[j]);
        }

        for(var k=6; k<=7; k++)
        {
            templist2.push(value[k]);
        }
        subSetVaule.push(temlist);
        subSetVaule.push(templist2);

        motifSet.subSetVaule = subSetVaule;
        motifSets.push(motifSet)

        console.log("the",i,"'s value is :",value,"the subSet Vaule is :",subSetVaule);
    }

    return motifSets;
}

function motifVisual(chartID,motifData)
{
    console.log("the whole series's id:",motifData.id);
    echarts.dispose(document.getElementById(chartID));

    if(motifData == null){
        motifData = new Object();
        motifData.timestamp = ["00:00", '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'];
        motifData.value = [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400];
        motifData.motifLabel =[[0,3],[5,6]];
    }



    var myChart = echarts.init(document.getElementById(chartID));
    xdata = motifData.timestamp;
    ydata = motifData.value;
    motifLabel = motifData.motifLabel;
    // console.log("label:",motifLabel);

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
    // console.log("abnormalArea:",motifArea);


    /*--------处理异常区域显示数据，线段标记红色--------*/
    var st=0;
    for(var i in motifLabel)
    {

        var normalPiece = new Object();
        var abnormalPiece = new Object();

        normalPiece.gt = st;
        normalPiece.lte = motifLabel[i][0];
        normalPiece.color = 'green';

        abnormalPiece.gt = motifLabel[i][0];
        abnormalPiece.lte = motifLabel[i][1];
        abnormalPiece.color = 'red';

        piecesData.push(normalPiece);
        piecesData.push(abnormalPiece);

        st = motifLabel[i][1];
    }
    var endPiece = new Object();
    endPiece.gt = st;
    endPiece.lte = xdata.length;
    endPiece.color = 'green';
    piecesData.push(endPiece);


    /*---------设置图标显示的牌配置项------------*/
    option = {
        title: {
            text: 'motif检测结果',
            textStyle:{//标题内容的样式
                // fontWeight:"lighter",//可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
                // fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                fontSize:14//主题文字字体大小，默认为18px
            }
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
                    data: motifArea

                }
            }
        ]
    };

    myChart.clear();
    myChart.setOption(option);

    // $("#"+chartID).resize(function () {
    //     myChart.resize();
    // });

    window.onresize = function () {
        ///用于使chart自适应高度和宽度
        myChart.resize();
    };
}

function subMotifVisual(chartID,subMotifData) {
    console.log("the sub series's id:",subMotifData.id);
    echarts.dispose(document.getElementById(chartID));

    if(subMotifData == null){
        subMotifData = new Object();
        subMotifData.subSetVaule = [[6,2,3,4,5],[2,3,4,5,6,7,8]];
        subMotifData.subSetTimestamp = [1,2,3,4,5,6,7];
    }
    var myChart = echarts.init(document.getElementById(chartID));
    xdata = subMotifData.subSetTimestamp;
    subMotifYdatas = subMotifData.subSetVaule;
    var seriesData = new Array();

    for(var i = 0; i< subMotifYdatas.length; i++)
    {
        var y = new Object();
        y.type = 'line';
        y.smooth = true;
        y.data = subMotifYdatas[i];

        seriesData.push(y);
    }

    // console.log("ydata:",subMotifYdatas,seriesData);
    option = {
        title: {
            text: 'motif子序列',
            textStyle:{//标题内容的样式
                fontWeight:"lighter",//可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
                // fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                fontSize:12//主题文字字体大小，默认为18px
            }
        },
        animation: false,
        tooltip: {
            trigger: 'axis',  //坐标轴触发提示
            // formatter: function (params) {
            //     // return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
            //     console.log('tooltip:',params);
            // }

        },
        grid:{
            x:'15%',
            y:'15%',
            x2:'10%',
            y2:'15%',

        },
        // toolbox: {
        //     right: 0,
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: false
        //         },
        //         brush: {
        //             type: ['lineX', 'clear']
        //         },
        //         saveAsImage: {}
        //     }
        // },
        // brush: {
        //     xAxisIndex: 'all',
        //     brushLink: 'all',
        //     outOfBrush: {
        //         colorAlpha: 0.1
        //     }
        // },
        // dataZoom: [
        //     {
        //         type: 'slider',
        //         start: 0,
        //         end: 100
        //     }, {
        //         type: 'inside',  //鼠标缩放
        //         start: 0,
        //         end: 100
        //     }
        // ],
        xAxis: {
            type: 'category',
            boundaryGap: false,  //坐标轴两端是否留白
            data: xdata
        },
        yAxis: {
            type: 'value',
        },
        series: seriesData
    };
    myChart.clear();
    myChart.setOption(option);

    // $("#"+chartID).resize(function () {
    //     myChart.resize();
    // });

    window.onresize = function () {
        ///用于使chart自适应高度和宽度
        myChart.resize();
    };

}


function createTable(tableId,data,tableWidth) {
    var table = document.getElementById(tableId);
    //table.setAttribute("style","width:"+tableWidth+"px;overflow:auto;");

//             var caption=document.createElement('caption');//定义表格标题
//             caption.innerHTML ='学生信息表';
//             table.appendChild(caption);//将标题添加进表格

    table.appendChild(createHeader(data[0].attributes));
    table.childNodes[0].setAttribute('style','background:#d0d8e2;');

    for(var i=0;i<data.length;i++){
        table.appendChild(createTr(data[i]));
    }

    return table;
};

function createHeader(attributes) {  //Create ti
    var tr = document.createElement('tr');
    for(var i = 0; i<attributes.length; i++)
    {
        createTd(tr,attributes[i]);
    }
    return tr;
}

function createTr(motifSet) {  //Create one line
    console.log("let me see..:",motifSet);
    var tr = document.createElement('tr');
    tr.setAttribute("onclick", "selectRow(this)");
    tr.setAttribute("style","cursor:pointer");
    for(var i = 0; i< motifSet.attributes.length;i++)
    {
        var attribute = motifSet.attributes[i];
        createTd(tr,motifSet[attribute]);
    }

    return tr;
};

function createTd(tr,cellValue) {    //Create one cell
    var td = document.createElement('td');
    td.innerHTML = cellValue;
    tr.appendChild(td);  //add to the line dom
}

var curRow;
var curColor;
function selectRow(tr){
    if(curRow){
        curRow.bgColor = curColor;
        curColor = tr.bgColor;
        tr.bgColor = "#FFE9B3";
    }else{
        curColor = tr.bgColor;
        tr.bgColor = "#FFE9B3";
    }
    curRow = tr;
    var id = tr.cells[0].innerText;


    // var data = getmotifData(id);
    console.log("selected line id :",id,"data: ",tempData[id]);
    motifVisual("motifChart",tempData[id]);
    subMotifVisual("subMotifChart",tempData[id]);

}


//
var tempData;
//
function motifAreaVisual(motifData){
    //var body=document.getElementsByTagName('body')[0];

    var motifChart = document.getElementById("motifChart");
    var motifChartWidth = document.getElementById("motifArea").offsetWidth;
    var motifChartHeight = (2/3)*(document.getElementById("motifArea").offsetHeight);
    motifChart.setAttribute("style","width:"+motifChartWidth+"px;height:"+motifChartHeight+"px;display:block;")
    motifVisual("motifChart",motifData[0]);  //display the whole chart

    var motifList = document.getElementById("motifList");   //display the motiflist table
    var tableWidth = (2/3)*(document.getElementById("motifChart").offsetWidth);
    var tableLeft = document.getElementById("motifChart").offsetLeft + 20;
    motifList.setAttribute("style","width:"+tableWidth+"px;left:"+tableLeft+"px;overflow:scroll;display: inline-block;");
    motifList.appendChild(createTable("motifTable",motifData,tableWidth));

    var subMotifChart = document.getElementById("subMotifChart"); //display the subsquence
    var subMotifChartWidth = (1/3)*(document.getElementById("motifChart").offsetWidth);
    var subMotifChartHeight = document.getElementById("motifList").offsetHeight;
    subMotifChart.setAttribute("style","width:"+subMotifChartWidth+"px;height:"+subMotifChartHeight+"px;overflow:scroll;display: inline-block;")

    subMotifVisual("subMotifChart",motifData[0]);

    tempData = motifData;

};