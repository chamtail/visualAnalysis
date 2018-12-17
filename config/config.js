/**
 * Created by Jeremy on 2018/11/10.
 */

// 节点分类
var nodes_category = {
    "input": {
        "display": {
            "zh": "输入模块",
            "en": "input module",
        },
        "nodes": {
            "data-upload": {
                "zh": "上传数据集",
                "en": "upload data",
                "in": 0,
                "out": 1,
            },
            "data-load": {
                "zh": "加载数据集",
                "en": "load data",
                "in": 0,
                "out": 1,
            },
        }
    },
    "process": {
        "display": {
            "zh": "处理模块",
            "en": "process module"
        },
        "sub_modules":{
            "pre-process":{
                "display": {
                    "zh": "预处理模块",
                    "en": "pre-process module"
                },
                "nodes": {
                    "prehandle": {  // normalization
                        "zh": "标准化",
                        "en": "normalization",
                        "in": 1,
                        "out": 1,
                    },
                },
            },
            "outlier":{
                "display": {
                    "zh": "异常处理模块",
                    "en": "outlier module"
                },
                "nodes": {
                    "stl": {  //outlier-detection
                        "zh": "异常检测",
                        "en": "outlier detection",
                        "in": 1,
                        "out": 1,
                    },
                },
            },
        },
    },
    "output": {
        "display": {
            "zh": "输出模块",
            "en": "process module"
        },
        "nodes": {
            "data-save": {
                "zh": "保存数据",
                "en": "save data",
                "in": 1,
                "out": 0,
            },
            "model-save": {
                "zh": "保存模型",
                "en": "save model",
                "in": 1,
                "out": 0,
            },
        }
    }
};


// 节点配置
var node_config = {
    "data-upload": {
        "display": {
            "zh": "上传数据",
            "en": "upload data",
        },
        "params": [
            {
                "name": "path",
                "label": {
                    "zh": "数据集文件",
                    "en": "data set file"
                },
                "type": "file",
                "default": "",
                "enable": true,
                "configurable": true
            },
            {
                "name": "name",
                "label": {
                    "zh": "数据集名称",
                    "en": "data set name"
                },
                "type": "text",
                "default": "",
                "enable": true,
                "configurable": true
            },
            {
                "name": "variable",
                "label": {
                    "zh": "变量名称",
                    "en": "variable name"
                },
                "type": "text",
                "default": "",
                "enable": false,
                "configurable": true
            },
            {
                "name": "inputs",
                "label": {
                    "zh": "输入节点个数",
                    "en": "input number"
                },
                "type": "number",
                "default": 0,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh": "输出节点个数",
                    "en": "output number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            }],
        "description": ""
    },
    "data-load": {
        "display": {
            "zh": "导入数据",
            "en": "import data",
        },
        "params": [
            {
                "name": "data_set",
                "label": {
                    "zh": "数据集",
                    "en": "data set"
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
                    "zh": "读入数量",
                    "en": "read number"
                },
                "type": "number",
                "default": 0,
                "enable": true,
                "configurable": true
            },
            {
                "name": "inputs",
                "label": {
                    "zh": "输入节点个数",
                    "en": "input number"
                },
                "type": "number",
                "default": 0,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh": "输出节点个数",
                    "en": "output number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            }],
        "description": ""
    },
    "prehandle": {
        "display": {
            "zh": "标准化",
            "en": "normalization",
        },
        "params": [
            {
                "name": "strategy",
                "label": {
                    "zh": "类型",
                    "en": "strategy"
                },
                "type": "list",
                "list": ['zscore', 'minmaxscale'],
                "default": 'zscore',
                "enable": true,
                "configurable": true
            },
            {
                "name": "inputs",
                "label": {
                    "zh": "输入节点个数",
                    "en": "input number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh": "输出节点个数",
                    "en": "output number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
        ],
        "description": ""
    },
    "stl": {
        "display": {
            "zh": "异常检测",
            "en": "outlier detection",
        },
        "params": [
            {
                "name": "maxanoms",
                "label": {
                    "zh": "最大异常",
                    "en": "max anoms"
                },
                "type": "number",
                "default": 0.02,
                "enable": true,
                "configurable": true
            },
            {
                "name": "day",
                "label": {
                    "zh": "日期",
                    "en": "day"
                },
                "type": "text",
                "default": "day",
                "enable": true,
                "configurable": true
            },
            {
                "name": "inputs",
                "label": {
                    "zh": "输入节点个数",
                    "en": "input number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh": "输出节点个数",
                    "en": "output number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
        ],
        "description": ""
    },
    "data-save": {
        "display": {
            "zh": "导出数据",
            "en": "export data",
        },
        "params": [
            {
                "name": "data_path",
                "label": {
                    "zh": "文件名称",
                    "en": "file name"
                },
                "type": "text",
                "default": "",
                "enable": true,
                "configurable": true
            },
            {
                "name": "inputs",
                "label": {
                    "zh": "输入节点个数",
                    "en": "input number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh": "输出节点个数",
                    "en": "output number"
                },
                "type": "number",
                "default": 0,
                "enable": false,
                "configurable": false
            },
        ],
        "description": ""
    },
    "model-save": {
        "display": {
            "zh": "导出模型",
            "en": "export model",
        },
        "params": [
            {
                "name": "model_path",
                "label": {
                    "zh": "模型名称",
                    "en": "model name"
                },
                "type": "text",
                "default": "",
                "enable": true,
                "configurable": true
            },
            {
                "name": "inputs",
                "label": {
                    "zh": "输入节点个数",
                    "en": "input number"
                },
                "type": "number",
                "default": 1,
                "enable": false,
                "configurable": false
            },
            {
                "name": "outputs",
                "label": {
                    "zh": "输出节点个数",
                    "en": "output number"
                },
                "type": "number",
                "default": 0,
                "enable": false,
                "configurable": false
            },
        ],
        "description": ""
    }
};

// 算法参数列表
var node_params = {
    "data-load":['data_set', 'read_number'],
    'data-upload':['path', 'name'],
    'prehandle':['strategy'],
    'stl':['maxanoms', 'day'],
    'data-save':['data_path'],
    'model-save':['model_path'],
};

// API列表
var IP = 'localhost'; //'10.131.247.51';
var port = 8889;
var host_url = 'http://' + IP + ':' + port;
var api_map={
    'user_login': host_url + '/workflowUser/login',
    'user_logout': host_url + '/workflowUser/logout',
    'user_register': host_url + '/workflowUser/register',
    'user_verify': host_url + '/workflowUser/getVerify',
    'user_check_verify': host_url + '/workflowUser/checkVerify',
    'user_forget_password': host_url + '/workflowUser/forgetPassword',
    'user_change_password': host_url + '/workflowUser/changePassword',
    'workflow_init': host_url + '/workflow/init',
    'workflow_deploy': host_url + '/workflow/deploy',
    'workflow_save': host_url + '/workflow/save',
    'workflow_run': host_url + '/workflow/runAll',
    'workflow_stop': host_url + '/workflow/stopAll',
    'node_run': host_url + '/workflow/runOne',
    'node_stop': host_url + '/workflow/stopOne',
    'cmd_run': host_url + '/workflow/runCmd',
    'variable_save' : host_url + '/workflow/variable/save',
    'variable_load' : host_url + '/workflow/variable/load',
    'get_data': host_url + '/workflow/getData',
    'upload': host_url + '/file/upload',
    'webSocket': 'ws://'+IP+':8889/webSocket',
};

// 节点状态映射
var nodeStatusMap = {
    "1": "init_success",
    "2": "init_error",
    "3": "running",
    "4": "run_success",
    "5": "run_error",
    "6": "active",
    "7": "deactivate"
};