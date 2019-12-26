const path = require('path')
const debug = process.env.NODE_ENV !== 'production'
// const VueConf = require('./src/assets/js/libs/vue_config_class')
// const vueConf = new VueConf(process.argv)

const customConf = {'API_ROOT':'两开花'}//require('./customConf')-这里应该引入自定义配置

console.log('')
console.log('本地启动或构建的文件信息 | 开始--------------------------------------------------------------')
// console.log(vueConf.pages)
console.log('本地启动或构建的文件信息 | 结束--------------------------------------------------------------')
console.log('')

// function isString(str){
//     return (typeof str=='string')&&str.constructor==String;
// }
//
// function consoleObj(key,val) {
//     console.log('本地构建信息 --------------------------------------------------------------');
//     console.log(config);
// }
//
// function traverseCon(config) {
//     if(isString(config)){
//         config = JSON.parse(config)
//     }
//     console.log(1111111111111111111122222222222);
//     for(let x in config){
//         if(!isString(x)){
//             consoleObj(x,config.x)
//         }
//     }
// }



module.exports = {
    configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
        if (debug) { // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map'
        } else { // 生产环境配置
        }
        Object.assign(config, { // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@c': path.resolve(__dirname, './src/components'),
                    'vue$': 'vue/dist/vue.esm.js'
                }
            }
        })
    },
    chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
        if (debug) {
            // 本地开发配置
            config.plugin('define').tap(args => {
                // args[0].customConf = 'customConf';//自定义配置
                args[0]['process.env'] = Object.keys(args[0]['process.env']).reduce((env, key) => {
                    env[key] =args[0]['process.env'][key];
                    return env;
                }, customConf);//自定义配置
                console.log('args',args);
            })
        } else {
            // 生产开发配置
            config.plugin('define').tap(args => {
                console.log('args',args);
                // return [/* 传递给 html-webpack-plugin's 构造函数的新参数 */]
                // return [{
                //     'process.env': {
                //         API_ROOT:'王鑫两开花'
                //     },
                // }]
            })
            // console.log('config.plugin(define)', config.plugin('define'))
            // console.log('config.plugin(html)', config.plugin('html'))
        }
    },
    css: { // 配置高于chainWebpack中关于css loader的配置
        // modules: true, // 是否开启支持‘foo.module.css’样式
        // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
        // sourceMap: false, // 是否在构建样式地图，false将提高构建速度
        // loaderOptions: { // css预设器配置项
        //     css: {
        //         localIdentName: '[name]-[hash]',
        //         camelCase: 'only'
        //     },
        //     stylus: {}
        // }
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changOrigin: true
            }
        },
        // before: app => {}
    }
}