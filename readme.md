# git 

## 代码提交限制，相关步骤
1. commitlint 
```
  npm install -g @commitlint/cli @commitlint/config-conventional    
  echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js   
```
2. husky
```
  npm install husky --save-dev   
```
3. customizable   
```
  npm install (-g/-d) cz-customizable  
```
