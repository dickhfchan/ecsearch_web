# One API
One api is developed to simplify data fetching from api. Now is half done.

One API是获取后端数据的方便方法, 只需要一个api, 就能访问大部分数据库数据.
```js
// '/one_api' is enough, '/get_order' is just for makr the request.
// 请求地址用/one_api就足够了, /get_order是用来标记请求的, 只是为了方便开发者区分.
const {data} = await this.$api.post('/one_api/get_order', {
  model: 'Order',
  first: true,
  query: {
    'id': this.id,
  },
})
// 完整的请求
{
    model: 'User', // one api 模型, 必须app/one_api_info.py里有定义 view_model, must existing in app/one_api_info.py
    // 过滤条件
    query: {
        title: {common: '123'}, // title 全文搜索, full text search
        id: '123', // id == 123
    },
    from: 0, // 开始
    size: null, // 数量, null不限
    sort: {created_at: 'desc'}, // 排序, sort
    sort: [{created_at: 'desc'}, {id: 'asc'}], // 排序(多) sort by multiple
    first: Boolean, // 是否只需要一个 get first only
    count: Boolean, // 是否只返回计数 get count only
    // define needed columns, reutrn all columns if not defined
    // 指定需要的列, 未指定返回所有列
    columns: {
        id: {},
        avatar: {},
        books: {},
    },
    // get additional columns. the value can contain 'query', 'from', 'size' like the root.
    // 指定附加的列
    // app/models.py 模型定义里有@cached_property装饰的方法, 其实是getter. getter不会主动获取, 除非这里指明需要.
    additional_columns: {
        books: {},
    },
}
// 返回response
// 如果 count === true
{total: Number}
// 如果 first === true
{'total': total, 'data': row}
// 如果 first === false
{'total': total, 'data': rows} // rows是数组
```
