'use strict';

module.exports = {

    types: [
        {value: 'merge',    name: '合并'},
        {value: 'revert',   name: '回滚'},
        {value: 'forget',   name: '少提交代码'},
        {value: 'feat',     name: '新功能'},
        {value: 'fix',      name: '修复bug'},
        {value: 'refactor', name: '重构代码'},
        {value: 'impr',     name: '代码改进'},
        {value: 'perf',     name: '性能优化'},
        {value: 'apm',      name: '新增监控'},
        {value: 'log',      name: '新增日志'},
        {value: 'chore',    name: '不重要的改动'},
        {value: 'pom',      name: '依赖版本变化'},
        {value: 'conf',     name: '配置变化'},
        {value: 'docs',     name: '文档变更'},
        {value: 'format',   name: '代码格式'},
        {value: 'test',     name: '新增测试'},
        {value: 'typo',     name: '拼写错误'},
        {value: 'wip',      name: '不完整提交'},
        {value: 'sql',      name: '新增、修改sql脚本'},
        {value: 'jvm',      name: 'jvm参数变更'},
        {value: 'tools',    name: '工具调整'},

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

