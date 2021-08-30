import { defineConfig } from 'umi';
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/fast', component: '@/pages/fast' },
  ],
  // devServer: {
  //   https: true,
  // },
  crossorigin: true,  // cors 脚本错误统计
  // ssr: {},   //开启后 样式才会 preload
  esbuild: {},  // 无效，换build工具
  hash: true, // 增量发布，避免缓存
  devtool: 'eval',  // 有效，快1s
  fastRefresh: {},
  targets: { // 有效 80kb
    chrome: 90,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  // 禁用插件
  mock: false,  
  request: false,
  helmet: false,
  // mfsu: {},  // 无效，报错
  // 配置 external
  externals: { // 有效 100kb
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  // 引入被 external 库的 scripts
  // 区分 development 和 production，使用不同的产物
  scripts: process.env.NODE_ENV === 'development' ? [
    'https://unpkg.com/react@17/umd/react.development.js',
    'https://unpkg.com/react-dom@17/umd/react-dom.development.js',
  ] : [
    'https://unpkg.com/react@17/umd/react.production.min.js',
    'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
  ],
  // 按需加载，路由级别
  dynamicImport: {},
  // plugins: [],
  extraBabelPlugins: ['lodash'],
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo
    .plugin('lodash')
      .use(LodashModuleReplacementPlugin,[]);
  },
});
