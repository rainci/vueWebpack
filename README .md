<!--
 * @Author: your name
 * @Date: 2019-12-25 16:55:31
 * @LastEditTime : 2019-12-26 15:32:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hellovue/README.md
 
 -->
# hellovue 在vue项目中搭建webpack

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


###创建命令：vue create name （vue-cli 4.x）成功后, package.json中scripts中添加"start": "vue-cli-service serve",启动项目
### 默认less，scss都配置好了，只需要安装："less": "^3.10.3","less-loader": "^5.0.0","node-sass": "^4.13.0","sass-loader": "^8.0.0",引入文件时，末尾要加；,否则报错。全局引入scss变量时，此时根目录要创建vue.config.js 在css中配置scss对应即可。
