/**
 * Created by Jeremy on 2018/11/10.
 */

// 节点分类
var nodes_category = {
    "inputsput": {
        "data-upload":"上传数据集",
        "data-load":"加载数据集"
    },
    "process": {
        "z-normalization":"z-标准化",
        "outputslier-detection":"异常检测"
    },
    "outputsput": {
        "data-save":"保存数据",
        "model-save":"保存模型"
    }
};

// 配置参数
var params = {
    "data-upload":[
        {
            "name": "inputs",
            "label": "输入",
            "type": "number",
            "default": 0,
            "enable": false,
            "configurable": false
        },
        {
            "name": "outputs",
            "label": "输出",
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        },
    ],
    "data-load": [
        {
            "name": "path",
            "label": "数据集",
            "type": "list",
            "list":["ECG", "TEK"],
            "default": "",
            "enable": true,
            "configurable": true
        },
        {
            "name": "read_number",
            "label": "读入数量",
            "type": "number",
            "default": 0,
            "enable": true,
            "configurable": true
        },
        {
            "name": "inputs",
            "label": "输入",
            "type": "number",
            "default": 0,
            "enable": false,
            "configurable": false
        },
        {
            "name": "outputs",
            "label": "输出",
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        },
    ],
    "z-normalization":[
        {
            "name": "inputs",
            "label": "输入",
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        },
        {
            "name": "outputs",
            "label": "输出",
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        },
    ],
    "outlier-detection":[
        {
            "name": "inputs",
            "label": "输入",
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        },
        {
            "name": "outputs",
            "label": "输出",
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        },
    ],
    "data-save":[
        {
            "name": "inputs",
            "label": "输入",
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        },
        {
            "name": "outputs",
            "label": "输出",
            "type": "number",
            "default": 0,
            "enable": false,
            "configurable": false
        },
    ],
    "model-save":[
        {
            "name": "inputs",
            "label": "输入",
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        },
        {
            "name": "outputs",
            "label": "输出",
            "type": "number",
            "default": 0,
            "enable": false,
            "configurable": false
        },
    ]
};

// 输入输出个数
var inout={
    "data-upload":{
        "inputs": 0,
        "outputs": 1
    },
    "data-load":{
        "inputs": 0,
        "outputs": 1
    },
    "z-normalization":{
        "inputs": 1,
        "outputs": 1
    },
    "outputslier-detection":{
        "inputs": 1,
        "outputs": 1
    },
    "data-save":{
        "inputs": 1,
        "outputs": 0
    },
    "model-save":{
        "inputs": 1,
        "outputs": 0
    },
};
