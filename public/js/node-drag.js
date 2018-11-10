/**
 * Created by Jeremy on 2018/11/6.
 */
// 全局变量
var currentTab = 1;  // 当前工作流tab
var startNode = -1;  // 开始节点
var endNode = -1;  // 结束节点
var workflow = {
    ver: -1,  //校验码
    tab:[],  // 标签记录
    nodes:{},  // 所有节点记录
    used:{},  // 节点使用记录
    links:{}  // 节点连接记录
};

function init() {
    // 默认有一个tabs
    workflow.tab.push({
        id: currentTab,
        type: "tab",
        label: "Flow " + currentTab,
        disabled: false,
        info: "",
    });

    var svg = d3.select('svg');
    // 绑定拖拽
    $('#left-wrapper .node').draggable({
        helper: 'clone',
        addClass: false,
        connectToSortable: '#idsw-bpmn',
        start: function (e, ui) {
            ui.helper.addClass('ui-draggable-helper');
        },
        stop: function (e, ui) {
            var node = {
                id: new Date().getTime(),
                type: ui.helper.attr('data-template-name'),
                x: ui.position.left - 225,
                y: ui.position.top,
                z: currentTab,
                text: ui.helper.text()
            };

            console.log(node.type);
            // 注入不同节点的属性
            node = nodeInject(node);

            // 记录节点
            if(!workflow.nodes[currentTab]){
                workflow.nodes[currentTab] = {};
            }
            workflow.nodes[currentTab][node.id] = node;

            // 计算节点编号
            if (workflow.used[node.type]) {
                workflow.used[node.type] += 1;
            } else {
                workflow.used[node.type] = 1;
            }

            // 添加节点
            var g = addNode(svg, node);

            // 将该节点加至tab节点列表
            g.call(
                d3.drag()
                    .on('start', dragStarted)
                    .on('drag', dragged)
                    .on('end', dragEnded)
            );

            g.selectAll('circle.output').call(
                d3.drag()
                    .on('start', lineStarted)
                    .on('drag', lineDragged)
                    .on('end', lineEnded)
            );

            g.selectAll('circle.input')
                .on('mouseover', function () {
                    if (drawLine) {
                        d3.selectAll('circle.end').classed('end', false);
                        d3.select(this).classed('end', true);
                    }
                });
        }
    });
}

var activeLine = null;
var points = [];
var translate = null;
var drawLine = false;
function lineStarted() {
    drawLine = false;
    // 当前选中的circle
    var anchor = d3.select(this);
    // 当前选中的节点
    var pNode = d3.select(this.parentNode);
    startNode = pNode.attr('id'); // 记录更新开始节点
    console.log("tab: " + currentTab);
    console.log("start: " + pNode.attr('id'));

    var rect = pNode.node().getBoundingClientRect();
    var dx = rect.width - 5;
    var dy = rect.height / (+anchor.attr('output') + 1);
    var transform = pNode.attr('transform');
    translate = getTranslate(transform);
    points.push([dx + translate[0], dy + translate[1]]);
    activeLine = d3.select('svg')
        .append('path')
        .attr('class', 'cable')
        .attr('from', pNode.attr('id'))
        .attr('start', dx + ', ' + dy)
        .attr('output', d3.select(this).attr('output'));
}

function lineDragged() {
    drawLine = true;
    points[1] = [d3.event.x + translate[0], d3.event.y + translate[1]];
    activeLine.attr('d', function () {
        return 'M' + points[0][0] + ',' + points[0][1]
            + 'C' + points[0][0] + ',' + (points[0][1] + points[1][1]) / 2
            + ' ' + points[1][0] + ',' + (points[0][1] + points[1][1]) / 2
            + ' ' + points[1][0] + ',' + points[1][1];
    });
}

function lineEnded(d) {
    drawLine = false;
    var anchor = d3.selectAll('circle.end');
    if (anchor.empty()) {
        activeLine.remove();
    } else {
        var pNode = d3.select(anchor.node().parentNode);
        endNode = pNode.attr('id');
        console.log("end: " + pNode.attr('id'));
        var input = pNode.node().getBoundingClientRect().height / (+anchor.attr('input') + 1);
        anchor.classed('end', false);
        activeLine.attr('to', pNode.attr('id'));
        activeLine.attr('input', anchor.attr('input'));
        activeLine.attr('end', '0, ' + input);
    }
    activeLine = null;
    points.length = 0;
    translate = null;

    // 记录下该连接信息
    if(!workflow.links[startNode]){
        workflow.links[startNode] = [];
    }
    workflow.links[startNode].push(endNode);
}

function getTranslate(transform) {
    var arr = transform.substring(transform.indexOf('(') + 1, transform.indexOf(')')).split(',');
    return [+arr[0], +arr[1]];
}

var dx = 0;
var dy = 0;
var dragElem = null;
function dragStarted() {
    var transform = d3.select(this).attr('transform');
    var translate = getTranslate(transform);
    dx = d3.event.x - translate[0];
    dy = d3.event.y - translate[1];
    dragElem = d3.select(this);
}

function dragged() {
    dragElem.attr('transform', 'translate(' + (d3.event.x - dx) + ', ' + (d3.event.y - dy) + ')');
    updateCable(dragElem);
}

function updateCable(elem) {
    var bound = elem.node().getBoundingClientRect();
    var width = bound.width;
    var height = bound.height;
    var id = elem.attr('id');
    var transform = elem.attr('transform');
    var t1 = getTranslate(transform);
    
    // 更新输出线的位置
    d3.selectAll('path[from="' + id + '"]')
        .each(function () {
            var start = d3.select(this).attr('start').split(',');
            start[0] = +start[0] + t1[0];
            start[1] = +start[1] + t1[1];

            var path = d3.select(this).attr('d');
            var end = path.substring(path.lastIndexOf(' ') + 1).split(',');
            end[0] = +end[0];
            end[1] = +end[1];

            d3.select(this).attr('d', function () {
                return 'M' + start[0] + ',' + start[1]
                    + ' C' + start[0] + ',' + (start[1] + end[1]) / 2
                    + ' ' + end[0] + ',' + (start[1] + end[1]) / 2
                    + ' ' + end[0] + ',' + end[1];
            });
        });

    // 更新输入线的位置
    d3.selectAll('path[to="' + id + '"]')
        .each(function () {
            var path = d3.select(this).attr('d');
            var start = path.substring(1, path.indexOf('C')).split(',');
            start[0] = +start[0];
            start[1] = +start[1];

            var end = d3.select(this).attr('end').split(',');
            end[0] = +end[0] + t1[0];
            end[1] = +end[1] + t1[1];

            d3.select(this).attr('d', function () {
                return 'M' + start[0] + ',' + start[1]
                    + ' C' + start[0] + ',' + (start[1] + end[1]) / 2
                    + ' ' + end[0] + ',' + (start[1] + end[1]) / 2
                    + ' ' + end[0] + ',' + end[1];
            });
        });

}

function dragEnded() {
    dx = dy = 0;
    dragElem = null;
}

function addNode(svg, node) {
    var g = svg.append('g')
        .attr('class', 'node')
        .attr('data-template-name', node.type)
        .attr('id', node.id)
        .attr('transform', 'translate(' + node.x + ', ' + node.y + ')')
        .attr('onclick', 'onNodeClick(' + node.id + ')')
        .attr('data-toggle', 'modal')
        .attr('data-target', '#nodeParamsModal')
        .attr('data-whatever', 'modal');

    var rect = g.append('rect')
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('stroke-width', 2)
        .attr('stroke', '#333')
        .attr('fill', '#fff');

    var bound = rect.node().getBoundingClientRect();
    var width = bound.width;
    var height = bound.height;

    // text
    g.append('text')
        .text(node.text)
        .attr('x', width / 2)
        .attr('y', height / 2)
        .attr('dominant-baseline', 'central')
        .attr('text-anchor', 'middle');

    // left icon
    g.append('text')
        .attr('x', 18)
        .attr('y', height / 2)
        .attr('dominant-baseline', 'central')
        .attr('text-anchor', 'middle')
        .attr('font-family', 'FontAwesome')
        .text('\uf1c0');

    // right icon
    g.append('text')
        .attr('class', 'run')
        .attr('x', width - 18)
        .attr('y', height / 2)
        .attr('dominant-baseline', 'central')
        .attr('text-anchor', 'middle')
        .attr('font-family', 'FontAwesome')
        .attr('fill', '#1aad19 !important')
        .attr('onclick', 'onNodeRun(' + node.id + ')')
        .text('\uf04b');

    // input circle
    var inputs = node.inputs || 0;
    g.attr('inputs', inputs);
    for (var i = 0; i < inputs; i++) {
        g.append('circle')
            .attr('class', 'input')
            .attr('input', (i + 1))
            .attr('cx', 0)
            .attr('cy', height * (i + 1) / (inputs + 1))
            .attr('r', 5);
    }

    // output circle
    var outputs = node.outputs || 0;
    g.attr('outputs', outputs);
    for (i = 0; i < outputs; i++) {
        g.append('circle')
            .attr('output', (i + 1))
            .attr('class', 'output')
            .attr('cx', width)
            .attr('cy', height * (i + 1) / (outputs + 1))
            .attr('r', 5);
    }

    return g;
}

// 给节点注入属性
function nodeInject(node) {
    var injectedNode = params[node.type]['attr'];
    for (var i=0, len=injectedNode.length; i<len; i++){
        var paramKey = injectedNode[i].name;
        node[paramKey] = injectedNode[i].default;
    }
    console.log(node);
    return node;
}
