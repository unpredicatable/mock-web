
const path = require('path')
const manifest = require('./vendor-manifest.json')
const webpack =  require('webpack')
// react-app-rewired  修改CRA配置
// customize-cra自定义利用react-app-rewired核心功能 V2
const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    addDecoratorsLegacy,
    disableEsLint,
    overrideDevServer
} = require('customize-cra');


const plugin = [
    new webpack.DllReferencePlugin({
        manifest
    })
]

const addPlugins = () => config => {

    config.plugins = [].concat(config.plugins, plugin)
    return config;
}


module.exports = {
    webpack : override(
                    //  按需加载antd 样式
                    fixBabelImports('import', {
                            libraryName: 'antd',
                            libraryDirectory: 'es',
                            // style: 'css',
                            style: true
                        }),
                    addLessLoader({
                        javascriptEnabled: true,
                        modifyVars: { '@primary-color': '#077e72' },
                    }),

                    // 添加alias
                    addWebpackAlias({
                        ["ROOT"]: path.resolve(__dirname, "src")
                    }),

                    // addPlugins()

                ),
    devServer: overrideDevServer(

    )
};
