/**
 * Created by Jeremy on 2018/11/11.
 */
/**
 * Created by Jeremy on 2018/11/6.
 */

// 全局变量
let currentTab = 1;  // 当前工作流tab
let startNode = -1;  // 开始节点
let endNode = -1;  // 结束节点
let workflow = {
    verCode: -1,  //校验码
    tab: [],  // 标签记录，对应了分析任务
    nodes: {},  // 所有节点记录
    used: {},  // 节点使用记录
    links: {},  // 节点连接记录
};

// 初始化
function init() {
    let svg = d3.select('#workflow svg');

    // 画网格
    drawGrid(svg, 5000, 5000, 20);

    // 绑定拖拽
    $('#palette .node').draggable({
        helper: 'clone',
        addClass: false,
        connectToSortable: '#workflow',
        start: function (e, ui) {
            ui.helper.addClass('ui-draggable-helper');
        },
        stop: function (e, ui) {
            let node = {
                id: new Date().getTime(),
                status: 6,
                type: ui.helper.attr('data-template-name'),
                x: ui.position.left - 180,
                y: ui.position.top - 50,
                z: currentTab,
                text: ui.helper.text()
            };

            // 注入不同节点的属性
            node = nodeInject(node);

            // 添加节点
            let g = addNode(svg, node);
            if (g == null) {
                return;
            }

            // 记录节点
            if (!workflow.nodes[currentTab]) {
                workflow.nodes[currentTab] = {};
            }
            workflow.nodes[currentTab][node.id] = node;

            // 计算节点编号
            if (workflow.used[node.type]) {
                workflow.used[node.type] += 1;
            } else {
                workflow.used[node.type] = 1;
            }

        }
    });
}

// 画网格
function drawGrid(svg, width, height, gap) {
    svg.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', "#fff");
    for (let i = 0; i < width; i += gap) {
        svg.append('line')
            .attr('class', 'horizontal')
            .attr('x1', 0)
            .attr('x2', width)
            .attr('y1', i)
            .attr('y2', i)
            .attr('fill', 'none')
            .attr('shape-rendering', 'crispEdges')
            .attr('stroke', '#eee')
            .attr('stroke-width', '1px');
        svg.append('line')
            .attr('class', 'vertical')
            .attr('x1', i)
            .attr('x2', i)
            .attr('y1', 0)
            .attr('y2', height)
            .attr('fill', 'none')
            .attr('shape-rendering', 'crispEdges')
            .attr('stroke', '#eee')
            .attr('stroke-width', '1px');
    }

}

/**
 * 节点相关 Start
 */
// 添加节点
function addNode(svg, node) {
    if (node.x < 0 || node.y < 0) {
        return null;
    }
    let g = svg.append('g')
        .attr('class', 'node deactivate')
        .attr('data-template-name', node.type)
        .attr('status', 6)
        .attr('id', node.id)
        .attr('transform', 'translate(' + node.x + ', ' + node.y + ')')
        .attr('onclick', 'onNodeDetail(' + node.id + ')')
        .attr('ondblclick', 'onNodeConfig(' + node.id + ')');

    let rect = g.append('rect')
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('stroke-width', 2)
        .attr('stroke', '#333')
        .attr('fill', '#fff');

    let bound = rect.node().getBoundingClientRect();
    let width = bound.width;
    let height = bound.height;

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
    let inputs = node.inputs || 0;
    g.attr('inputs', inputs);
    for (let i = 0; i < inputs; i++) {
        g.append('circle')
            .attr('class', 'input')
            .attr('input', (i + 1))
            .attr('cx', 0)
            .attr('cy', height * (i + 1) / (inputs + 1))
            .attr('r', cableR);
    }

    // output circle
    let outputs = node.outputs || 0;
    g.attr('outputs', outputs);
    for (i = 0; i < outputs; i++) {
        g.append('circle')
            .attr('output', (i + 1))
            .attr('class', 'output')
            .attr('cx', width)
            .attr('cy', height * (i + 1) / (outputs + 1))
            .attr('r', cableR);
    }

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

    return g;
}

let cableR = 5;
let dx = 0;
let dy = 0;
let dragElem = null;
// 开始拖拽事件
function dragStarted() {
    let translate = getTranslate(d3.select(this));
    dx = d3.event.x - translate[0];
    dy = d3.event.y - translate[1];
    dragElem = d3.select(this);
}

// 正在拖拽事件
function dragged() {
    if (d3.event.x - dx < 0) {
        d3.event.x = dx;
    }
    if (d3.event.y - dy < 0) {
        d3.event.y = dy;
    }
    dragElem.attr('transform', 'translate(' + (d3.event.x - dx) + ', ' + (d3.event.y - dy) + ')');
    updatePath(dragElem);
}

// 结束拖拽事件
function dragEnded() {
    dx = dy = 0;
    dragElem = null;
}

// 获取节点偏移
function getTranslate(node) {
    let transform = node.attr('transform');
    let arr = transform.substring(transform.indexOf('(') + 1, transform.indexOf(')')).split(',');
    return [+arr[0], +arr[1]];
}

// 给节点注入属性
function nodeInject(node) {
    let injectedNode = node_config[node.type]['params'];
    for (let i = 0, len = injectedNode.length; i < len; i++) {
        let paramKey = injectedNode[i].name;
        node[paramKey] = injectedNode[i].default;
    }
    return node;
}

// 更新节点状态
function updateNodeStatus(status) {
    for (let nodeId in status) {
        let s = $('#' + nodeId).attr('status');
        if (s != 3) {
            d3.selectAll('g[id="' + nodeId + '"]')
                .attr('class', 'node ' + nodeStatusMap[status[nodeId]])
                .attr('status', status[nodeId]);
            workflow.nodes[currentTab][nodeId].status = status[nodeId];
        }
    }
}
/**
 * 节点相关 End
 */

/**
 * 连线相关 Start
 */
let activeLine = null;
let points = [];
let translate = null;
let drawLine = false;
function lineStarted() {
    drawLine = false;
    // 当前选中的节点
    let sNode = d3.select(this.parentNode);
    startNode = sNode.attr('id'); // 记录更新开始节点
    let delta = getPathOffset(sNode);
    let sdx = delta[0];
    let sdy = delta[1];

    translate = getTranslate(sNode);
    points.push([sdx + translate[0], sdy + translate[1]]);
    activeLine = d3.select('#workflow svg')
        .append('path')
        .attr('class', 'cable')
        .attr('from', startNode)
        .attr('start', sdx + ', ' + sdy)
        .attr('output', d3.select(this).attr('output'));
}

function lineDragged() {
    drawLine = true;
    points[1] = [d3.event.x + translate[0] - cableR, d3.event.y + translate[1]];
    activeLine.attr('d', getBezier(points));
}

function lineEnded() {
    drawLine = false;
    let anchor = d3.selectAll('circle.end');
    if (anchor.empty()) {
        activeLine.remove();
    } else {
        let eNode = d3.select(anchor.node().parentNode);
        endNode = eNode.attr('id');
        let input = eNode.node().getBoundingClientRect().height / (+anchor.attr('input') + 1);
        anchor.classed('end', false);
        let id = startNode + '_' + endNode;
        activeLine.attr('to', eNode.attr('id'))
            .attr('input', endNode)
            .attr('end', '0, ' + input)
            .attr('id', id)
            .attr('onclick', 'onPathClick("' + id + '")');
    }

    // 记录下该连接信息
    if (!workflow.links[startNode]) {
        workflow.links[startNode] = [];
    }
    workflow.links[startNode].push(endNode);

    // 重置参数
    resetPathParmas();
}

// 更新Path
function updatePath(elem) {
    let id = elem.attr('id');
    let t1 = getTranslate(elem);

    // 更新输出线的位置
    d3.selectAll('path[from="' + id + '"]')
        .each(function () {
            let start = d3.select(this).attr('start').split(',');
            start[0] = +start[0] + t1[0];
            start[1] = +start[1] + t1[1];

            let path = d3.select(this).attr('d');
            let end = path.substring(path.lastIndexOf(' ') + 1).split(',');
            end[0] = +end[0];
            end[1] = +end[1];

            d3.select(this).attr('d', getBezier([start, end]));
        });

    // 更新输入线的位置
    d3.selectAll('path[to="' + id + '"]')
        .each(function () {
            let path = d3.select(this).attr('d');
            let start = path.substring(1, path.indexOf('C')).split(',');
            start[0] = +start[0];
            start[1] = +start[1];

            let end = d3.select(this).attr('end').split(',');
            end[0] = +end[0] + t1[0] - cableR;
            end[1] = +end[1] + t1[1];

            d3.select(this).attr('d', getBezier([start, end]));
        });
}

// 获取path偏移量
function getPathOffset(node) {
    let inOut =  parseInt(node.attr('outputs')) + parseInt(node.attr('inputs'));
    let XDelta = 0;
    if(inOut > 1){
        XDelta = -cableR;
    }
    let rect = node.node().getBoundingClientRect();
    let dx = rect.width + XDelta;
    let dy = rect.height / (+node.attr('outputs') + 1);
    return [dx, dy];
}

// 获取Path曲线
function getBezier(points) {
    if(points[0][0] > points[1][0]){
        console.log('四次平滑');
    }
    return 'M' + points[0][0] + ',' + points[0][1]
        + 'C' + points[0][0] + ',' + (points[0][1] + points[1][1]) / 2
        + ' ' + points[1][0] + ',' + (points[0][1] + points[1][1]) / 2
        + ' ' + points[1][0] + ',' + points[1][1];
}

// 重置参数
function resetPathParmas() {
    activeLine = null;
    points.length = 0;
    translate = null;
    startNode = null;
    endNode = null;
}
/**
 * 连线相关 End
 */

// 加载工作流
function loadWorkflow() {
    $.getJSON('../config/workflow.json', function (data) {
        // 更新workflow
        workflow = data;
        let svg = d3.select('#workflow svg');
        // 读取tab信息
        let tabs = data.tab;

        // to do
        // ...
        // 前端添加tab
        for (let i = 0; i < tabs.length; i++) {
            // 读取node信息
            let tabId = tabs[i].id;
            let nodes = data.nodes[tabId];
            for (let nodeId in nodes) {
                addNode(svg, nodes[nodeId]);
            }
        }

        // 读取link信息
        let links = data.links;
        for (let nodeId in links) {
            let sNode = d3.select('g[id="' + nodeId + '"]');
            for (let i = 0; i < links[nodeId].length; i++) {
                let delta = getPathOffset(sNode);
                let sdx = delta[0];
                let sdy = delta[1];
                translate = getTranslate(sNode);
                points.push([sdx + translate[0], sdy + translate[1]]);

                let eNode = d3.select('g[id="' + links[nodeId][i] + '"]');
                let pathId = sNode.attr('id') + "_" + eNode.attr('id');

                let eRect = eNode.node().getBoundingClientRect();
                let edy = eRect.height / (+eNode.attr('inputs') + 1);
                translate = getTranslate(eNode);

                points[1] = [translate[0]-cableR, translate[1] + edy];

                let input = eRect.height / (+eNode.attr('inputs') + 1);
                activeLine = d3.select('#workflow svg')
                    .append('path')
                    .attr('class', 'cable')
                    .attr('from', sNode.attr('id'))
                    .attr('start', sdx + ', ' + sdy)
                    .attr('output', sNode.attr('output'))
                    .attr('d', getBezier(points))
                    .attr('to', eNode.attr('id'))
                    .attr('input', eNode.attr('input'))
                    .attr('end', '0, ' + input)
                    .attr('id', pathId)
                    .attr('onclick', 'onPathClick("' + pathId + '")');
                activeLine = null;
                points.length = 0;
                translate = null;
            }
        }
    });
}
