# Guide

## 命名规则
前端采用驼峰命名法. 特殊之处在于后端的数据采用的是下划线命名, 所以遇到下划线的要用引号.
```js
data['user_name']
```

## 配置
网页打开时, 从后端读取部分配置, 从config.js读取配置, 合并(向后覆盖), 赋值给store.state.config. 可以使用vm.$config方便获得. 配置名采用全大写加下划线格式.

## 消息框
已配置了4个方法针对不同类型的消息框.
```js
* vm.$alert(message, title, options) // 警告
* vm.$confirm(message, title, options) // 确认, 返回promise
await vm.$confirm() // 推荐用法
* vm.$prompt(message, title, options) // 单值输入框, 返回promise
const inputValue = await vm.$prompt() // 推荐用法
/*
message, title都有默认值
options.value: $prompt的预设值
options.multiline: $prompt的输入框为多行
options.rows: $prompt的多行输入框的行数
 */

// notify 提示框
// 提示框出现在侧边, 不影响用户操作.
vm.$notify.success(message)
vm.$notify.warning(message)
vm.$notify.error(message)
vm.$notify.primary(message)
vm.$notify.info(message)
// success, warning, error都有默认message
```

## ajax
依赖axio库. vm.$http 等于原生axios. vm.$api是包装过的.
vm.$api自动加上api前缀, auth token, 自动把request里的Date对象转换成iso格式的时间字符串, 把response里的iso时间字符串转换成Date对象. 当api请求状态码不为200而出错时, 会自动弹出notify并带上返回的错误信息. 本项目只使用get和post请求方式.
```js
const data = await vm.$api.get('/user/current')
const data = await vm.$api.post('/user/register', postData)
// 禁用错误警告
const data = await vm.$api.get('/user/current', {alert: false})
const data = await vm.$api.post('/user/register', postData, {alert: false})
```
