var colors = [
    "#95d1ad",
    "#1e5670",
    "#f7ac1a",
    "#6bb3c0",
    "#e8e613",
    "#00997f",
    "#8ca581",
    "#b1d238",
    "#ffc808",
    "#c7c7c9",
    "#91cfc9",
    "#f26a21",
    "#4198b9",
    "#ee8b22"
];

function showCluster() {
    var dom = document.getElementById("cluster");
    while (dom.firstChild) {
        dom.removeChild(dom.firstChild);
    }
    $.get('../data/csvToJson.json', function (data) {
        var clusterNum = data.clusterNum;
        var seriesInfo = data.clusteredSeries;
        for (var i = 0; i < clusterNum; i++) {
            let container1 = document.createElement("div");
            container1.setAttribute('style', "height: 300px; width: 50%; display: inline-block");
            dom.appendChild(container1);
            var myChart = echarts.init(container1);
            let option = null;
            var series = seriesInfo[i].map(function (items, j) {
                var lineColor = j === 0 ? '#000000' : colors[i];
                return {
                    type: 'line',
                    itemStyle: {
                        normal: {
                            color: lineColor,
                            lineStyle: {
                                width: 1,
                                color: lineColor
                            }
                        }
                    },
                    data: items.map(function (item) {
                        return item[1];
                    }),
                };
            });

            let xAxis = seriesInfo[i].map(function (items) {
                return items.map(function (item) {
                    return item[0];
                });
            })[0];
            myChart.setOption(option = {
                title: {
                    text: "Cluster" + " " + (i + 1),
                    x: 'center',
                    align: 'right'
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    data: xAxis
                },
                yAxis: {

                },
                toolbox: {
                    left: 'right',
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                dataZoom: [{
                    startValue: seriesInfo[i][0][0][0]
                }, {
                    type: 'inside'
                }],
                series: series,
            });
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        }
    });
}
