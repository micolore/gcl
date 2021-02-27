'use strict';

module.exports = {

    types: [
        {value: 'merge',    name: '合并:  代码合并'},
        {value: 'revert',   name: '回滚:  代码回退'},
        {value: 'forget',   name: '遗漏:  少提交代码'},
        {value: 'feat',     name: '需求:  新功能'},
        {value: 'fix',      name: '修复:  修复bug'},
        {value: 'refactor', name: '重构:  重构代码'},
        {value: 'impr',     name: '优化:  代码逻辑调整'},
        {value: 'perf',     name: '优化:  性能优化'},
        {value: 'apm',      name: '监控:  新增监控'},
        {value: 'log',      name: '日志:  新增日志'},
        {value: 'depd',     name: '依赖:  版本变化'},
        {value: 'conf',     name: '配置:  配置变化'},
        {value: 'docs',     name: '文档:  文档变更'},
        {value: 'format',   name: '格式:  代码格式'},
        {value: 'test',     name: '测试:  新增测试'},
        {value: 'sql',      name: '脚本:  新增、修改sql脚本'},
        {value: 'jvm',      name: '虚拟机: jvm参数变更'},
        {value: 'tools',    name: '工具:  工具调整'},
    ],

    scopes: [
        {name: 'All',        value: "全部"},
        {name: 'Controller', value: "控制层"},
        {name: 'Api',        value: "接口层"},
        {name: 'Timer',      value: "定时器"},
        {name: 'Common',     value: "公共"},
        {name: 'Service',    value: "服务层"},
        {name: 'Dao',        value: "持久层"},
        {name: 'Config',     value: "配置"},
    ],

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
        type: '请选择提交类型:',
        scope: '请选择Scope:',
        customScope: 'Denote the SCOPE of this change:',
        subject: '请输入简短的说明:\n',
        body: '请输入长说明，可使用"|"换行(可选)：\n',
        breaking: '非兼容性说明 (可选):\n',
        footer: '关联关闭的issue，例如：#31, #34(可选):\n',
        confirmCommit: '确定提交说明?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['特性', '修复'],
    subjectLimit: 100

};

