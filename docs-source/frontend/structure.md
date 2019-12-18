# Structure
rolltrek根目录称之为解决方案目录(取自visual studio), 有一个别名 `$solution`. 前端有两个项目, frontend, frontend-admin(后台). 两个结构类似.

## \_\_local__vue.config.js
vue.config.js有些开发时的设置, 目前只有 API_SERVER. 要覆盖的添加\_\_local__vue.config.js
```js
export default {
  API_SERVER: 'http://xxxxx'
}
```
\_\_local__vue.config.js 不被git追踪, 所以只在本地有效. 添加到解决方案目录则对frontend和frontend-admin都有效, 添加到前端项目目录则只对该项目有效.

## fronted/src/
前端项目默认source文件夹.

## 以下文件或目录属于src/
## assets/
资源文件夹
## assets/styles/
组件的样式一般放在组件内部, 放在这里的都是公用性质的.
## assets/styles/global.scss
放全局变量, 会自动注入, 所以每个scss文件里, 组件的scss部分都能使用.
## assets/styles/common.scss
一些全局样式. 比较少, 因为避免添加太多全局样式.
## comments
通用性强的组件.
## global-components/
全局组件, 已经注入, 模板里可以直接调用.
## parts/
专门适用于项目的一部分提取的组件.
## plugins/
插件和一些插件的初始化, 还有一些辅助方法.
## views/
视图组件.
## views/layouts/
视图布局.
## config.js
配置文件. 写在前端的配置比较少, 因为很多配置考虑到有在后台修改的需要, 所以大部分配置在网页打开时从后端请求.
## dev_main.js
npm run dev时以这里作入口.
## main.js
npm run build时的入口.
## router.js
路由
## store.js
vuex. 没有使用vuex的严格模式, 所以可以直接修改store里的变量值. 只是把store作为一个全局的数据共享对象.
