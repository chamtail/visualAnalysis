/**
 * Created by Jeremy on 2018/11/10.
 */

// 节点分类
var nodes_category = {
    "input": {
        "display": {"zh": "输入模块", "en": "input module"},
        "nodes": {
            "data-upload": {"zh": "上传数据", "en": "upload data", "in": 0, "out": 1},
            "data-load": {"zh": "导入数据", "en": "import data", "in": 0, "out": 1}
        }
    },
    "process": {
        "display": {"zh": "处理模块", "en": "process module"},
        "sub_modules": {
            "pre-process": {
                "display": {"zh": "预处理模块", "en": "pre-process module"},
                "nodes": {"prehandle": {"zh": "标准化", "en": "normalization", "in": 1, "out": 1}}
            },
            "outlier": {
                "display": {"zh": "异常处理模块", "en": "outlier module"},
                "nodes": {"stl": {"zh": "异常检测", "en": "outlier detection", "in": 1, "out": 1}}
            },
            "classification": {
                "display": {"zh": "分类模块", "en": "classification module"},
                "nodes": {
                    "fsh": {"zh": "Shapelet分类", "en": "Shapelet for classification", "in": 1, "out": 1},
                    "sax-classify": {"zh": "SAX分类", "en": "SAX for classification", "in": 1, "out": 1},
                    "elis": {"zh": "ELIS分类", "en": "SAX for classification", "in": 1, "out": 1}
                }
            },
            "segmentation": {
                "display": {"zh": "分段模块", "en": "segmentation module"},
                "nodes": {
                    "mpsegment": {
                        "zh": "mp-based分段",
                        "en": "matrix-profile-based segmentation",
                        "in": 1,
                        "out": 1
                    }
                }
            },
            "clustering": {
                "display": {"zh": " 聚类模块", "en": "clustering module"},
                "nodes": {"kshape": {"zh": "kshape", "en": "clustering", "in": 1, "out": 1}}
            }
        }
    },
    "output": {
        "display": {"zh": "输出模块", "en": "process module"},
        "nodes": {
            "data-save": {"zh": "导出数据", "en": "export data", "in": 1, "out": 0},
            "model-save": {"zh": "导出模型", "en": "export model", "in": 1, "out": 0}
        }
    }
};

// 节点配置
var node_config = {
    "data-upload": {
        "display": {"zh": "上传数据", "en": "upload data"},
        "in": 0,
        "out": 1,
        "params": [{
            "name": "path",
            "label": {"zh": "数据集文件", "en": "data set file"},
            "type": "file",
            "default": "",
            "enable": true,
            "configurable": true
        }, {
            "name": "name",
            "label": {"zh": "数据集名称", "en": "data set name"},
            "type": "text",
            "default": "",
            "enable": true,
            "configurable": true
        }, {
            "name": "variable",
            "label": {"zh": "变量名称", "en": "variable name"},
            "type": "text",
            "default": "",
            "enable": false,
            "configurable": true
        }, {
            "name": "inputs",
            "label": {"zh": "输入节点个数", "en": "input number"},
            "type": "number",
            "default": 0,
            "enable": false,
            "configurable": false
        }, {
            "name": "outputs",
            "label": {"zh": "输出节点个数", "en": "output number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }],
        "description": "A node for uploading data",
        "category": "input"
    },
    "data-load": {
        "display": {"zh": "导入数据", "en": "import data"},
        "in": 0,
        "out": 1,
        "params": [{
            "name": "data_set",
            "label": {"zh": "数据集", "en": "data set"},
            "type": "list",
            "list": ["ECG", "TEK"],
            "default": 0,
            "enable": true,
            "configurable": true
        }, {
            "name": "read_number",
            "label": {"zh": "读入数量", "en": "read number"},
            "type": "number",
            "default": 0,
            "enable": true,
            "configurable": true
        }, {
            "name": "variable",
            "label": {"zh": "变量名称", "en": "variable name"},
            "type": "text",
            "default": "",
            "enable": false,
            "configurable": true
        }, {
            "name": "inputs",
            "label": {"zh": "输入节点个数", "en": "input number"},
            "type": "number",
            "default": 0,
            "enable": false,
            "configurable": false
        }, {
            "name": "outputs",
            "label": {"zh": "输出节点个数", "en": "output number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }],
        "description": "A node for loading data",
        "category": "input"
    },
    "prehandle": {
        "display": {"zh": "标准化", "en": "normalization"},
        "in": 1,
        "out": 1,
        "params": [{
            "name": "strategy",
            "label": {"zh": "类型", "en": "strategy"},
            "type": "list",
            "list": ["zscore", "minmaxscale"],
            "default": "zscore",
            "enable": true,
            "configurable": true
        }, {
            "name": "variable",
            "label": {"zh": "变量名称", "en": "variable name"},
            "type": "text",
            "default": "",
            "enable": false,
            "configurable": true
        }, {
            "name": "inputs",
            "label": {"zh": "输入节点个数", "en": "input number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }, {
            "name": "outputs",
            "label": {"zh": "输出节点个数", "en": "output number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }],
        "description": "",
        "category": "process/pre-process"
    },
    "stl": {
        "display": {"zh": "异常检测", "en": "outlier detection"},
        "in": 1,
        "out": 1,
        "params": [{
            "name": "maxanoms",
            "label": {"zh": "最大异常", "en": "max anoms"},
            "type": "number",
            "default": 0.02,
            "enable": true,
            "configurable": true
        }, {
            "name": "day",
            "label": {"zh": "日期", "en": "day"},
            "type": "text",
            "default": "day",
            "enable": true,
            "configurable": true
        }, {
            "name": "variable",
            "label": {"zh": "变量名称", "en": "variable name"},
            "type": "text",
            "default": "",
            "enable": false,
            "configurable": true
        }, {
            "name": "inputs",
            "label": {"zh": "输入节点个数", "en": "input number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }, {
            "name": "outputs",
            "label": {"zh": "输出节点个数", "en": "output number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }],
        "description": "",
        "category": "process/outlier"
    },
    "fsh": {
        "display": {"zh": "Shapelet分类", "en": "Shapelet for classification"},
        "in": 1,
        "out": 1,
        "params": [{
            "name": "number_of_class",
            "label": {"zh": "类数", "en": "number of class"},
            "type": "number",
            "min": 1,
            "default": 2,
            "enable": true,
            "configurable": true
        }, {
            "name": "number_of_instance",
            "label": {"zh": "时间序列条数", "en": "number of instance"},
            "type": "number",
            "default": 50,
            "enable": true,
            "configurable": true
        }, {
            "name": "max_length",
            "label": {"zh": "shapelet最长长度", "en": "max length of shapelet"},
            "type": "number",
            "default": 150,
            "enable": true,
            "configurable": true
        }, {
            "name": "min_length",
            "label": {"zh": "shapelet最短长度", "en": "min length of shapelet"},
            "type": "number",
            "default": 10,
            "enable": true,
            "configurable": true
        }, {
            "name": "step",
            "label": {"zh": "步长", "en": "step"},
            "type": "number",
            "default": 1,
            "enable": true,
            "configurable": true
        }, {
            "name": "random_projection",
            "label": {"zh": "R", "en": "R"},
            "type": "number",
            "default": 10,
            "enable": true,
            "configurable": true
        }, {
            "name": "top_k_candidates",
            "label": {"zh": "top k", "en": "top k"},
            "type": "number",
            "default": 10,
            "enable": true,
            "configurable": true
        }, {
            "name": "number_of_class_test",
            "label": {"zh": "测试类数", "en": "number of class for test"},
            "type": "number",
            "min": 1,
            "default": 2,
            "enable": true,
            "configurable": true
        }, {
            "name": "number_of_instance_test",
            "label": {"zh": "测试时间序列条数", "en": "number of instance for test"},
            "type": "number",
            "default": 150,
            "enable": true,
            "configurable": true
        }, {
            "name": "variable",
            "label": {"zh": "变量名称", "en": "variable name"},
            "type": "text",
            "default": "",
            "enable": false,
            "configurable": true
        }, {
            "name": "inputs",
            "label": {"zh": "输入节点个数", "en": "input number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }, {
            "name": "outputs",
            "label": {"zh": "输出节点个数", "en": "output number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }],
        "description": "A node for classifying time series data",
        "category": "process/classification"
    },
    "data-save": {
        "display": {"zh": "导出数据", "en": "export data"},
        "in": 1,
        "out": 0,
        "params": [{
            "name": "data_path",
            "label": {"zh": "文件名称", "en": "file name"},
            "type": "text",
            "default": "",
            "enable": true,
            "configurable": true
        }, {
            "name": "inputs",
            "label": {"zh": "输入节点个数", "en": "input number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }, {
            "name": "outputs",
            "label": {"zh": "输出节点个数", "en": "output number"},
            "type": "number",
            "default": 0,
            "enable": false,
            "configurable": false
        }],
        "description": "",
        "category": "output"
    },
    "model-save": {
        "display": {"zh": "导出模型", "en": "export model"},
        "in": 1,
        "out": 0,
        "params": [{
            "name": "model_path",
            "label": {"zh": "模型名称", "en": "model name"},
            "type": "text",
            "default": "",
            "enable": true,
            "configurable": true
        }, {
            "name": "inputs",
            "label": {"zh": "输入节点个数", "en": "input number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }, {
            "name": "outputs",
            "label": {"zh": "输出节点个数", "en": "output number"},
            "type": "number",
            "default": 0,
            "enable": false,
            "configurable": false
        }],
        "description": "",
        "category": "output"
    },
    "sax-classify": {
        "display": {"zh": "SAX分类", "en": "SAX for classification"},
        "in": 1,
        "out": 1,
        "params": [{
            "name": "length_of_window",
            "label": {"zh": "滑动窗口长度", "en": "length_of_window"},
            "type": "number",
            "min": 1,
            "default": 1,
            "enable": true,
            "configurable": true
        }, {
            "name": "length_of_word",
            "label": {"zh": "分割词汇长度", "en": "length_of_word"},
            "type": "number",
            "default": 16,
            "enable": true,
            "configurable": true
        }, {
            "name": "size_of_alphabet",
            "label": {"zh": "字母集大小", "en": "size of alphabet"},
            "type": "number",
            "default": 4,
            "enable": true,
            "configurable": true
        }, {
            "name": "variable",
            "label": {"zh": "变量名称", "en": "variable name"},
            "type": "text",
            "default": "",
            "enable": false,
            "configurable": true
        }, {
            "name": "inputs",
            "label": {"zh": "输入节点个数", "en": "input number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }, {
            "name": "outputs",
            "label": {"zh": "输出节点个数", "en": "output number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }],
        "description": "A node for classifying time series data using SAX",
        "category": "process/classification"
    },
    "elis": {
        "display": {"zh": "ELIS分类", "en": "SAX for classification"},
        "in": 1,
        "out": 1,
        "params": [{
            "name": "Regulation",
            "label": {"zh": "正则化", "en": "Regulation"},
            "type": "number",
            "min": 0,
            "default": 0.01,
            "enable": true,
            "configurable": true
        }, {
            "name": "Iteration",
            "label": {"zh": "迭代数", "en": "Iteration"},
            "type": "number",
            "default": 0,
            "enable": true,
            "configurable": true
        }, {
            "name": "Learning_Rate",
            "label": {"zh": "学习率", "en": "Learning_Rate"},
            "type": "number",
            "default": 0.01,
            "enable": true,
            "configurable": true
        }, {
            "name": "Data_Generation",
            "label": {"zh": "数据生成数量", "en": "Data_Generation"},
            "type": "number",
            "min": 2,
            "default": "",
            "enable": true,
            "configurable": true
        }, {
            "name": "variable",
            "label": {"zh": "变量名称", "en": "variable name"},
            "type": "text",
            "default": "",
            "enable": false,
            "configurable": true
        }, {
            "name": "inputs",
            "label": {"zh": "输入节点个数", "en": "input number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }, {
            "name": "outputs",
            "label": {"zh": "输出节点个数", "en": "output number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }],
        "description": "A node for classifying time series data using ELIS",
        "category": "process/classification"
    },
    "mpsegment": {
        "display": {"zh": "mp-based分段", "en": "matrix-profile-based segmentation"},
        "in": 1,
        "out": 1,
        "params": [{
            "name": "length_of_step",
            "label": {"zh": "移动步长", "en": "length_of_step"},
            "type": "number",
            "min": 1,
            "default": 1,
            "enable": true,
            "configurable": true
        }, {
            "name": "number_of_segment_points",
            "label": {"zh": "分段点个数", "en": "number_of_segment_points"},
            "type": "number",
            "min": 1,
            "default": 1,
            "enable": true,
            "configurable": true
        }, {
            "name": "variable",
            "label": {"zh": "变量名称", "en": "variable name"},
            "type": "text",
            "default": "",
            "enable": false,
            "configurable": true
        }, {
            "name": "inputs",
            "label": {"zh": "输入节点个数", "en": "input number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }, {
            "name": "outputs",
            "label": {"zh": "输出节点个数", "en": "output number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }],
        "description": "A node for time series data segmentation based on matrix-profile",
        "category": "process/segmentation"
    },
    "kshape": {
        "display": {"zh": "kshape", "en": "clustering"},
        "in": 1,
        "out": 1,
        "params": [{
            "name": "num_of_clusters",
            "label": {"zh": "聚类类数", "en": "num_of_clusters"},
            "type": "number",
            "min": 1,
            "default": 1,
            "enable": true,
            "configurable": true
        }, {
            "name": "variable",
            "label": {"zh": "变量名称", "en": "variable name"},
            "type": "text",
            "default": "",
            "enable": false,
            "configurable": true
        }, {
            "name": "inputs",
            "label": {"zh": "输入节点个数", "en": "input number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }, {
            "name": "outputs",
            "label": {"zh": "输出节点个数", "en": "output number"},
            "type": "number",
            "default": 1,
            "enable": false,
            "configurable": false
        }],
        "description": "A node for time series data clustering",
        "category": "process/clustering"
    }
};

// 算法参数列表
var node_params = {
    "data-upload": ["path", "name"],
    "data-load": ["data_set", "read_number"],
    "prehandle": ["strategy"],
    "stl": ["maxanoms", "day"],
    "fsh": ["number_of_class", "number_of_instance", "max_length", "min_length", "step", "random_projection", "top_k_candidates", "number_of_class_test", "number_of_instance_test"],
    "data-save": ["data_path"],
    "model-save": ["model_path"],
    "sax-classify": ["length_of_window", "length_of_word", "size_of_alphabet"],
    "elis": ["Regulation", "Iteration", "Learning_Rate", "Data_Generation"],
    "mpsegment": ["length_of_step", "number_of_segment_points"],
    "kshape": ["num_of_clusters"]
};

// API列表
var env_map = {
    dev: 8000,
    test: 8088,
    prod: 8080
};

var api_map = {
    "user_login": "http://10.131.247.51:8000/user/login",
    "user_logout": "http://10.131.247.51:8000/user/logout",
    "user_register": "http://10.131.247.51:8000/user/register",
    "user_verify": "http://10.131.247.51:8000/user/getVerify",
    "user_check_verify": "http://10.131.247.51:8000/user/checkVerify",
    "user_forget_password": "http://10.131.247.51:8000/user/forgetPassword",
    "user_change_password": "http://10.131.247.51:8000/user/changePassword",
    "workflow_load": "http://10.131.247.51:8000/workflow/load",
    "workflow_deploy": "http://10.131.247.51:8000/workflow/deploy",
    "workflow_save": "http://10.131.247.51:8000/workflow/save",
    "workflow_run": "http://10.131.247.51:8000/workflow/runAll",
    "workflow_stop": "http://10.131.247.51:8000/workflow/stopAll",
    "node_run": "http://10.131.247.51:8000/workflow/runOne",
    "node_stop": "http://10.131.247.51:8000/workflow/stopOne",
    "cmd_run": "http://10.131.247.51:8000/workflow/runCmd",
    "variable_save": "http://10.131.247.51:8000/workflow/variable/save",
    "variable_load": "http://10.131.247.51:8000/workflow/variable/load",
    "get_data": "http://10.131.247.51:8000/workflow/getData",
    "upload": "http://10.131.247.51:8000/file/upload",
    "webSocket": "ws://10.131.247.51:8000/webSocket"
};

// 节点状态映射
var node_status_map = {
    "1": "init_success",
    "2": "init_error",
    "3": "running",
    "4": "run_success",
    "5": "run_error",
    "6": "active",
    "7": "deactivate"
};