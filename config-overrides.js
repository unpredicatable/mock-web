
const path = require('path')

// react-app-rewired  修改CRA配置
// customize-cra自定义利用react-app-rewired核心功能 V2
const { override, fixBabelImports, addLessLoader,addWebpackAlias } = require('customize-cra');


module.exports = override(
   //  按需加载antd 样式
   fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // addLessLoader({
    //     javascriptEnabled: true,
    //     modifyVars: { '@primary-color': '#1DA57A' },
    // }),

    // 添加alias
    addWebpackAlias({
        ["ROOT"]: path.resolve(__dirname, "src")
    })

);
