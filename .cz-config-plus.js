'use strict';

module.exports = {

    types: [
        {value: 'func',     name: '小功能'},
        {value: 'fix',     name: 'bug修复'},
        {value: 'refactor',     name: '重构代码'},
        {value: 'impr',     name: '代码改进'},
        {value: 'perf',     name: '性能优化'},
        {value: 'apm',     name: '监控'},
        {value: 'chore',     name: '不重要的改动'},
        {value: 'jvm',     name: 'jvm参数变更'},
        {value: 'pom',     name: '依赖版本变化'},
        {value: 'conf',     name: '配置变化'},
        {value: 'docs',     name: '文档变更'},
        {value: 'style',     name: '代码格式'},
        {value: 'test',     name: '单测、自动化case'},
        {value: 'typo',     name: '拼写错误'},
        {value: 'wip',     name: '不完整提交'},
    ],

    scopes: [
        {name: 'All', value: "all"},
        {name: 'core', value: "core"},
        {name: 'service', value: "service"},
        {name: 'dao', value: "dao"},
        {name: 'sql', value: "sql"}
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
        // used if allowCustomScopes is true
        customScope: 'Denote the SCOPE of this change:',
        subject: '请输入简短的说明:\n',
        body: '请输入长说明，可使用"|"换行(可选)：\n',
        breaking: '非兼容性说明 (可选):\n',
        footer: '关联关闭的issue，例如：#31, #34(可选):\n',
        confirmCommit: '确定提交说明?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['特性', '修复'],

    // limit subject length
    subjectLimit: 100

};

