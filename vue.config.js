/*
 * @Author: rainci
 * @Date: 2019-12-26 10:48:39
 * @LastEditTime : 2019-12-26 12:04:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hellovue/vue.config.js
 */
module.exports = {
    css: {// css预设器配置项
        loaderOptions:{
            scss:{//为scss注入全局变量
                prependData:`@import "~@/variables.scss";`
            },
        }
    }
}