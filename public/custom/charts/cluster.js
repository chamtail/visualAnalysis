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

const pageSize = 2;

let imageCount = [];

let imageIndex = [];

function clickPagePrev(i) {
    const index = imageIndex[i];
    if (index === 0) {
        return;
    }
    imageIndex[i] -= pageSize;
    showCluster();
}

function clickPageNext(i) {
    const index = imageIndex[i];
    if (index + pageSize >= imageCount[i]) {
        return;
    }
    imageIndex[i] += pageSize;
    showCluster();
}

function initCluster() {
    $.getJSON('../data/Classification.json', function (data) {
        const clusterNum = data.clusterNum;
        const seriesInfo = data.clusteredSeries;
        imageCount = [];
        imageIndex = [];
        for (let i = 0; i < clusterNum; i++) {
            imageCount.push(seriesInfo[i].length - 1);
            imageIndex.push(0);
        }
    });
    showCluster();
}

function showCluster() {
    var dom = document.getElementById("cluster");
    while (dom.firstChild) {
        dom.removeChild(dom.firstChild);
    }
    $.getJSON('../data/Classification.json', function (data) {
            var clusterNum = data.clusterNum;
            var seriesInfo = data.clusteredSeries;
            for (var i = 0; i < clusterNum; i++) {
                const line = document.createElement("div");
                line.setAttribute("class", "line");
                dom.appendChild(line);
                let leftContainer = document.createElement("div");
                leftContainer.setAttribute('class', 'left-container');
                line.appendChild(leftContainer);
                let rightContainer = document.createElement("div");
                rightContainer.setAttribute('class', 'right-container');
                line.appendChild(rightContainer);

                for (var j = 0; j < seriesInfo[i].length && j < imageIndex[i] + pageSize + 1; ++j) {
                    var imageContainer;
                    if (j === 0) {
                        imageContainer = leftContainer;
                    } else {
                        let container = document.createElement("div");
                        container.setAttribute('class', 'cluster-image');
                        rightContainer.appendChild(container);
                        imageContainer = container;
                    }
                    var myChart = echarts.init(imageContainer);
                    let option = null;
                    var lineColor = j === 0 ? '#000000' : colors[i];
                    var series = [
                        {
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
                            data: seriesInfo[i][j].map(function (item) {
                                return item[1];
                            }),
                        }];
                    let xAxis = seriesInfo[i].map(function (items) {
                        return items.map(function (item) {
                            return item[0];
                        });
                    })[0];
                    myChart.setOption(option = {
                        title: {
                            text: j === 0 ? "Cluster" + " " + (i + 1) : "序列" + j,
                            x: 'center',
                            align: 'right'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        xAxis: {
                            data: xAxis
                        },
                        yAxis: {},
                        toolbox: {
                            // left: 'right',
                            // feature: {
                            //     dataZoom: {
                            //         yAxisIndex: 'none'
                            //     },
                            //     restore: {},
                            //     saveAsImage: {}
                            // }
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
                    if (j === 0) {
                        j = imageIndex[i];
                    }
                }
                let pageContainer = document.createElement("div");
                pageContainer.setAttribute('class', 'page-container');
                line.appendChild(pageContainer);
                let leftArrow = document.createElement("a");
                leftArrow.setAttribute('class', 'page-component left-arrow');
                leftArrow.text = "<";
                leftArrow.style.color = "#4285f4";
                const index = i;
                leftArrow.addEventListener('click', function () {
                    clickPagePrev(index);
                });
                pageContainer.appendChild(leftArrow);
                let rightArrow = document.createElement("a");
                rightArrow.setAttribute('class', 'page-component right-arrow');
                rightArrow.text = ">";
                rightArrow.style.color = "#4285f4";
                rightArrow.addEventListener('click', function () {
                    clickPageNext(index);
                });
                pageContainer.appendChild(rightArrow);
            }
        }
    );
}
