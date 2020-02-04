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

const pageSize = 1;

let imageCount = [];

let imageIndex = [];

let currentData;

function clickPagePrev(i,data) {
    currentData = data;
    const index = imageIndex[i];
    if (index === 0) {
        return;
    }
    imageIndex[i] -= pageSize;
    showCluster(data);
}

function clickPageNext(i,data) {
    currentData = data;
    const index = imageIndex[i];
    if (index + pageSize >= imageCount[i]) {
        return;
    }
    imageIndex[i] += pageSize;
    showCluster(data);
}

function refreshCluster() {
    if (currentData == null) {
        return;
    }
    showCluster(currentData);
}

function initCluster(data) {
    const clusterNum = data.Num;
    const seriesInfo = data.Series;
    imageCount = [];
    imageIndex = [];
    for (let i = 0; i < clusterNum; i++) {
        imageCount.push(seriesInfo[i].length - 1);
        imageIndex.push(0);
    }
    showCluster(data);
}

function showCluster(data) {
    if (currentData === data) {
        return;
    }
    currentData = data;
    var dom = document.getElementById("cluster");
    while (dom.firstChild) {
        dom.removeChild(dom.firstChild);
    }
    var clusterNum = data.Num;
    var seriesInfo = data.Series;
    for (var i = 0; i < clusterNum; i++) {
        let j;
        const line = document.createElement("div");
        line.setAttribute("class", "line");
        dom.appendChild(line);
        let leftContainer = document.createElement("div");

        leftContainer.setAttribute('class', 'left-container');
        line.appendChild(leftContainer);
        let rightContainer = document.createElement("div");
        rightContainer.setAttribute('class', 'right-container');
        line.appendChild(rightContainer);

        const seriesData = [];
        console.log("show cluster");
        for (j = 1; j < seriesInfo[i].length; ++j) {
            var lineColor = j === 0 ? '#000000' : colors[i];
            seriesData.push(
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
                    })
                });
        }

            var imageContainer;
            let id= i.toString();
                let container = document.createElement("div");

                container.setAttribute('class', 'cluster-image');
                container.setAttribute('id',id);
                rightContainer.appendChild(container);
                imageContainer = container;
            var myChart = echarts.init(imageContainer);
            let option = null;
            let xAxis = seriesInfo[i].map(function (items) {
                return items.map(function (item) {
                    return item[0];
                });
            })[0];
            myChart.setOption(option = {
                title: {
                    text: "Class " + i,
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
                series: seriesData,
            });
            myChart.setOption(option);
            $("#"+ id).resize(function () {
                myChart.resize();
            });
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
            // if (j === 0) {
            //     j = imageIndex[i];
            // }
        let pageContainer = document.createElement("div");
        pageContainer.setAttribute('class', 'page-container');
        line.appendChild(pageContainer);
        let leftArrow = document.createElement("a");
        leftArrow.setAttribute('class', 'page-component left-arrow');
        leftArrow.text = "<";
        leftArrow.style.color = "#4285f4";
        const index = i;
        leftArrow.addEventListener('click', function () {
            clickPagePrev(index, data);
        });
        pageContainer.appendChild(leftArrow);
        let rightArrow = document.createElement("a");
        rightArrow.setAttribute('class', 'page-component right-arrow');
        rightArrow.text = ">";
        rightArrow.style.color = "#4285f4";
        rightArrow.addEventListener('click', function () {
            clickPageNext(index, data);
        });
        pageContainer.appendChild(rightArrow);
    }
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