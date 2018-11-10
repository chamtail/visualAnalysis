/**
 * Created by Jeremy on 2018/11/10.
 */

// 节点分类
var nodes_category = {
    "input": {
        "data-upload": "上传数据集",
        "data-load": "加载数据集"
    },
    "process": {
        "z-normalization": "z-标准化",
        "outlier-detection": "异常检测"
    },
    "output": {
        "data-save": "保存数据",
        "model-save": "保存模型"
    }
};

// 配置参数
var params = {
    "data-upload": {
        "display": {
            "zh": "上传数据",
            "en": "upload data",
        },
        "attr": [
            {
                "name": "path",
                "label": {
                    "zh":"数据集文件",
                    "en":"data set file"
                },
                "type": "path",
                "default": "",
                "enable": true,
                "configurable": true
            },
            {
                "name": "inputs",
                "label": {
                    "zh":"输入节点个数",
                    "en":"input number"
                },
                "type": "number",
                "default": 0,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh":"输出节点个数",
                    "en":"output number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            }],
        "description":""
    },
    "data-load": {
        "display": {
            "zh": "导入数据",
            "en": "import data",
        },
        "attr": [
            {
                "name": "data_set",
                "label": {
                    "zh":"数据集",
                    "en":"data set"
                },
                "type": "list",
                "list": ["ECG", "TEK"],
                "default": 0,
                "enable": true,
                "configurable": true
            },
            {
                "name": "read_number",
                "label": {
                    "zh":"读入数量",
                    "en":"read number"
                },
                "type": "number",
                "default": 0,
                "enable": true,
                "configurable": true
            },
            {
                "name": "inputs",
                "label": {
                    "zh":"输入节点个数",
                    "en":"input number"
                },
                "type": "number",
                "default": 0,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh":"输出节点个数",
                    "en":"output number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            }],
        "description":""
    },
    "normalization": {
        "display": {
            "zh": "标准化",
            "en": "normalization",
        },
        "attr": [
            {
                "name": "strategy",
                "label": {
                    "zh":"类型",
                    "en":"strategy"
                },
                "type": "list",
                "list":['Z-score', 'Min-Max'],
                "default": 0,
                "enable": true,
                "configurable": true
            },
            {
                "name": "inputs",
                "label": {
                    "zh":"输入节点个数",
                    "en":"input number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh":"输出节点个数",
                    "en":"output number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
        ],
        "description":""
    },
    "outlier-detection": {
        "display": {
            "zh": "异常检测",
            "en": "outlier detection",
        },
        "attr": [
            {
                "name": "inputs",
                "label": {
                    "zh":"输入节点个数",
                    "en":"input number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh":"输出节点个数",
                    "en":"output number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
        ],
        "description":""
    },
    "data-save": {
        "display": {
            "zh": "导出数据",
            "en": "export data",
        },
        "attr": [
            {
                "name": "data_path",
                "label": {
                    "zh":"文件名称",
                    "en":"file name"
                },
                "type": "text",
                "default": "",
                "enable": true,
                "configurable": true
            },
            {
                "name": "inputs",
                "label": {
                    "zh":"输入节点个数",
                    "en":"input number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh":"输出节点个数",
                    "en":"output number"
                },
                "type": "number",
                "default": 0,
                "enable": false,
                "configurable": false
            },
        ],
        "description":""
    },
    "model-save": {
        "display": {
            "zh": "导出模型",
            "en": "export model",
        },
        "attr": [
            {
                "name": "model_path",
                "label": {
                    "zh":"模型名称",
                    "en":"model name"
                },
                "type": "text",
                "default": "",
                "enable": true,
                "configurable": true
            },
            {
                "name": "inputs",
                "label": {
                    "zh":"输入节点个数",
                    "en":"input number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh":"输出节点个数",
                    "en":"output number"
                },
                "type": "number",
                "default": 0,
                "enable": false,
                "configurable": false
            },
        ],
        "description":""
    }
};