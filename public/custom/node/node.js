/**
 * Created by Jeremy on 2018/11/11.
 */
/**
 * Created by Jeremy on 2018/11/6.
 */

// 全局变量
let startNode = -1;  // 开始节点
let endNode = -1;  // 结束节点

let workflow = {
    token: -1,  //校验码
    task: {},  // 所有节点记录
    used: {},  // 节点使用记录
};

// 初始化，初始化各种事件
function init() {
    let svg = d3.select('#workflow svg')
        .on('click', function () {
            onComponentDetail(vm.currentFlow, 'flow');
        });

    // 画网格
    drawGrid(svg, 5000, 5000, 20);

    // 绑定拖拽
    $('#palette .node').draggable({
        helper: 'clone',
        appendTo: "body",
        revert: !0,
        revertDuration: 0,
        addClass: false,
        connectToSortable: '#workflow',
        start: function (e, ui) {
            ui.helper.addClass('ui-draggable-helper');
        },
        stop: function (e, ui) {
            let node = {
                id: new Date().getTime(),
                type: ui.helper.attr('data-template-name'),
                status: 7,
                links: [],
                show: true,
                x: ui.position.left - 180,
                y: ui.position.top - 50,
                z: vm.currentFlow,
                label: ui.helper.text(),
                variable: "",
                size: ""
            };

            // 注入不同节点的属性
            node = nodeInject(node);

            // 添加节点
            let g = addNode(svg, node);
            if (g == null) {
                return;
            }

            // 使能部署按钮
            vm.enableA('#btn-deploy');

            // 重构代码
            if (workflow.task[node.id]){
                console.error("节点id重复！");
                return;
            }
            // 记录节点
            workflow.task[node.id] = node;
            // 当前flow下记录该节点
            workflow.task[vm.currentFlow].nodes.push(node.id.toString());
            // 计算节点使用情况
            if (!workflow.used[node.type]) {
                workflow.used[node.type] = 0;
            }
            workflow.used[node.type] += 1;
            // 重构代码
            vm.workflowChanged = true;
        }
    });
}

// 画网格
function drawGrid(svg, width, height, gap) {
    svg.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', '#fff');
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
        .attr('status', node.status)
        .attr('id', node.id)
        .attr('transform', 'translate(' + node.x + ', ' + node.y + ')')
        .on('click', function () {
            onComponentDetail(node.id, node.type);
            // 阻止事件向后传递
            d3.event.stopPropagation();
        })
        .on('dblclick', function () {
            onComponentConfig();
            d3.event.stopPropagation();
        });

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
        .text(node.label)
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
        .text('\uf04b')
        .on('click', function () {
            runNode(node.id);
            d3.event.stopPropagation();
        });

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

    let id = dragElem.attr('id');
    let translate = getTranslate(dragElem);
    updateNode(id, translate);
    updatePath(id, translate);
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
    let injectedNode = component_config[node.type]['params'];
    for (let i = 0, len = injectedNode.length; i < len; i++) {
        let paramKey = injectedNode[i].name;
        if (node[paramKey] == undefined){
            node[paramKey] = injectedNode[i].default;
        }
    }
    return node;
}

// 更新节点
function updateNode(id, translate) {
    // 重构代码
    workflow.task[dragElem.attr('id')].x = translate[0];
    workflow.task[dragElem.attr('id')].y = translate[1];
}

// 更新节点状态
function updateNodeStatus(status) {
    for (let nodeId in status) {
        let s = $('#' + nodeId).attr('status');
        let statusNow = status[nodeId];
        if(!node_status_map[statusNow]){
            statusNow = 5;
        }
        d3.selectAll('g[id="' + nodeId + '"]')
            .attr('class', 'node ' + node_status_map[statusNow])
            .attr('status', statusNow);

        // 重构代码
        workflow.task[nodeId].status = parseInt(statusNow);
        // 重构代码
        if (statusNow == 4 || statusNow == "4"){
            vm.onNodeReRun(nodeId);
        }
        if (statusNow == 5 || statusNow == "5"){
            vm.onNodeStop(nodeId);
        }
    }
}

// 清除节点，注意不是删除，只是使其在界面上消失
function hideNodesByFlow(flowId) {
    console.log("上一flowId：" + flowId);
    if(!workflow.task[flowId]){
        console.error('flow' + flowId + '不存在！');
        return;
    }
    let nodesList = workflow.task[flowId].nodes;
    for(let i=0, len=nodesList.length; i<len; i++){
        d3.selectAll('path[from="' + nodesList[i] + '"]').remove();
        d3.selectAll('g[id="' + nodesList[i] + '"]').remove();
        d3.selectAll('path[to="' + nodesList[i] + '"]').remove();
    }
}

// 显示节点
function showNodesByFlow(flowId) {
    let svg = d3.select('#workflow svg');
    // 显示节点
    let links = {};
    let status = {};
    // 重构代码
    let nodesList = workflow.task[flowId].nodes;
    for(let i=0, len=nodesList.length; i<len; i++){
        let nodeId = nodesList[i];
        let node = workflow.task[nodeId];
        nodeInject(node);
        let g = addNode(svg, node);
        if(g == null){
            console.error(node);
        }
        status[nodeId] = node.status;
        if(node.links){
            links[nodeId] = node.links;
            status[nodeId] = node.status;
            for(let i=0, len=links[nodeId].length; i<len; i++){
                let id = links[nodeId][i];
                status[id] = workflow.task[id].status;
            }
        }
    }
    // 重构代码
    
    // 显示连线
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
                .on('click', function () {
                    onPathClick(pathId);
                    d3.event.stopPropagation();
                });
            activeLine = null;
            points.length = 0;
            translate = null;
        }
    }

    updateNodeStatus(status);
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
            .on('click', function () {
                onPathClick(id);
                d3.event.stopPropagation();
            });
    }

    if(endNode == -1){
        return;
    }
    // 重构代码
    // 记录下该连接信息
    if (!workflow.task[startNode].links) {
        workflow.task[startNode].links = [];
    }
    workflow.task[startNode].links.push(endNode);
    // 重构代码
    // 重置参数
    resetPathParams();
}

// 更新Path
function updatePath(id, translate) {
    // 更新输出线的位置
    d3.selectAll('path[from="' + id + '"]')
        .each(function () {
            let start = d3.select(this).attr('start').split(',');
            start[0] = +start[0] + translate[0];
            start[1] = +start[1] + translate[1];

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
            end[0] = +end[0] + translate[0] - cableR;
            end[1] = +end[1] + translate[1];

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
        // console.log('四次平滑');
    }
    return 'M' + points[0][0] + ',' + points[0][1]
        + 'C' + points[0][0] + ',' + (points[0][1] + points[1][1]) / 2
        + ' ' + points[1][0] + ',' + (points[0][1] + points[1][1]) / 2
        + ' ' + points[1][0] + ',' + points[1][1];
}

// 重置参数
function resetPathParams() {
    activeLine = null;
    points.length = 0;
    translate = null;
    startNode = null;
    endNode = null;
    vm.enableA('#btn-deploy');
}
/**
 * 连线相关 End
 */

/**
 * 组件相关 Start
 */
// 显示组件
function onComponentDetail(id, type, force=false){
    // 过滤重复事件
    if(id == vm.component.id && type == vm.component.type && !force){
        console.log(vm.component.id, vm.component.type);
        console.log('重复点击组件，事件无效！');
        return;
    }
    // 更新状态
    update();
    // 更新组件信息
    vm.component = getComponent(id, type, vm.lang);
    if(type == 'flow'){
        return;
    }
    let node = $('#' + id);
    node.addClass('active');
    let nodeType = node.attr("data-template-name");
    vm.node = getComponent(id, nodeType);
    console.log('显示节点细节&显示节点可视化');
    // 如果该节点状态为已运行, 则进行可视化
    let status = node.attr('status');
    if (status == 4) {
        console.log("可视化");
        $.ajax({
            url: api_map.get_data,
            type: 'POST',
            data: {
                token: workflow.token,
                nodeId: id,
                limit: 0
            },
            dataType: 'json',
            success: function (res) {
                if (res.code == 0) {
                    console.log(res);
                    visualize(res.data);
                } else {
                    alert(res.msg);
                }
            }
        });
    }
}

// 配置组件
function onComponentConfig() {
    $('#configModal').modal('show');
}

// 删除组件
function onComponentDelete(id, type) {
    console.log("删除" + type + "#" + id);
    if(type == 'flow'){
        // 先隐藏该工作流上的节点
        hideNodesByFlow(id);
        // 删除工作流下的所有节点
        let nodesList = workflow.task[id].nodes;
        for(let i=0, len=nodesList.length; i<len; i++) {
            let nodeId = nodesList[i];
            workflow.used[workflow.task[nodeId].type] -= 1;
            delete workflow.task[nodeId];
        }
    } else{
        // 删除与之相连的路径
        d3.selectAll('path[from="' + id + '"]').remove();
        d3.selectAll('g[id="' + id + '"]').remove();
        d3.selectAll('path[to="' + id + '"]').remove();

        // 删除与该节点相关的记录
        let flowId = workflow.task[id].z;
        let index = workflow.task[flowId].nodes.indexOf(id.toString());
        if (index > -1) {
            workflow.task[flowId].nodes.splice(index, 1);
        }
        for(let i=0, len=workflow.task[flowId].nodes.length; i<len; i++){
            let nodeId = workflow.task[flowId].nodes[i];
            let index = workflow.task[nodeId].links.indexOf(id.toString());
            if (index > -1) {
                workflow.task[nodeId].links.splice(index, 1);
            }
        }
    }
    // 删除该组件
    delete workflow.task[id];
    // 组件使用次数减一
    if (workflow.used[type]) {
        workflow.used[type] -= 1;
    }
    // 更新workflow
    vm.workflowChanged = true;
    //vm.updateWorkflow(workflow);
    $('#configModal').modal('hide');
}

// 保存组件配置
function onComponentConfigSave() {
    updateComponentParams();
}

// 获取组件参数
function getComponentParams(id, type) {
    if (!workflow.task[id]) {
        return;
    }
    let currentParams = workflow.task[id];

    let keyList = {};
    for (let key in currentParams) {
        keyList[key] = 1;
    }
    let params = [];
    let attrInfo = component_config[type]['params'];

    for (let i = 0, len = attrInfo.length; i < len; i++) {
        if (attrInfo[i]['configurable']) {
            for (let key in keyList) {
                if (attrInfo[i]['name'] == key) {
                    attrInfo[i]['default'] = currentParams[key];
                }
                // if (attrInfo[i]['type'] == 'file') {
                //     vm.uploadFile = true;
                //     onUploadFileChange();
                // }
            }
            params.push(attrInfo[i]);
        }
    }
    return params;
}

// 更新组件参数
function updateComponentParams() {
    let id = vm.component.id;
    if (!workflow.task[id]) {
        return;
    }
    let newParams = vm.component.params;
    for (let i = 0, len = newParams.length; i < len; i++) {
        workflow.task[id][newParams[i].name] = newParams[i].default;
    }
}

// 获取组件信息
function getComponent(id, type, lang='zh') {
    if(!workflow.task[id]){
        return;
    }
    let component = {};
    component.id = id;
    component.name = component_config[type]['display'][lang];
    component.type = type;
    component.params = getComponentParams(id, type);
    if(component_config[type].description){
        component.description = component_config[type].description;
    }
    return component;
}

/**
 * 组件相关 End
 */

// 运行节点
function runNode(id) {
    vm.runNode(id);
}

// 暂停节点
function stopNode(id) {
    vm.stopNode(id);
}

// 点击连线
function onPathClick(id) {
    // 事件过滤
    if (id == vm.path.id) {
        console.log('重复点击连线，事件无效！');
        return;
    }
    // 更新状态
    update();
    d3.selectAll('path[id="' + id + '"]').attr('class', 'cable active');
    vm.path.from = d3.select('path[id="' + id + '"]').attr('from');
    vm.path.to = d3.select('path[id="' + id + '"]').attr('to');
    vm.path.id = id;
    console.log(JSON.stringify(vm.path));
}

// 删除连线
function onPathDelete(id) {
    d3.select('path[id="' + id + '"]').remove();
    let nodeIds = id.split("_");
    let sId = nodeIds[0];
    let eId = nodeIds[1];
    let index = workflow.task[sId].links.indexOf(eId.toString());
    if (index > -1) {
        workflow.task[sId].links.splice(index, 1);
    }
    vm.workflowChanged = true;
}

// 加载工作流
function loadWorkflow(workflowFile) {
    $.getJSON('../config/'+workflowFile+'.json', function (data) {
        workflow = data;
        vm.updateWorkflow(workflow);
        // 重构代码
        console.log(workflow);
        showNodesByFlow(1);
        // 重构代码
    });
}
