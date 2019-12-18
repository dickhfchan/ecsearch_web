(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{169:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"utils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils","aria-hidden":"true"}},[t._v("#")]),t._v(" Utils")]),t._v(" "),a("p",[t._v("Some functions to simplify work. At /app/utils/")]),t._v(" "),a("h2",{attrs:{id:"common-used"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-used","aria-hidden":"true"}},[t._v("#")]),t._v(" Common used")]),t._v(" "),a("h3",{attrs:{id:"str-rand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#str-rand","aria-hidden":"true"}},[t._v("#")]),t._v(" str_rand")]),t._v(" "),a("p",[t._v("str_rand(size=6, chars=string.ascii_uppercase + string.digits)")]),t._v(" "),a("h3",{attrs:{id:"md5-str0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#md5-str0","aria-hidden":"true"}},[t._v("#")]),t._v(" md5(str0)")]),t._v(" "),a("h3",{attrs:{id:"sha1-str0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sha1-str0","aria-hidden":"true"}},[t._v("#")]),t._v(" sha1(str0)")]),t._v(" "),a("h3",{attrs:{id:"sha512-str0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sha512-str0","aria-hidden":"true"}},[t._v("#")]),t._v(" sha512(str0)")]),t._v(" "),a("h3",{attrs:{id:"salt-hash-str0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#salt-hash-str0","aria-hidden":"true"}},[t._v("#")]),t._v(" salt_hash(str0)")]),t._v(" "),a("h3",{attrs:{id:"hash-pwd-pwd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-pwd-pwd","aria-hidden":"true"}},[t._v("#")]),t._v(" hash_pwd(pwd)")]),t._v(" "),a("h3",{attrs:{id:"pwd-hashed-compare-pwd-hashed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwd-hashed-compare-pwd-hashed","aria-hidden":"true"}},[t._v("#")]),t._v(" pwd_hashed_compare(pwd, hashed)")]),t._v(" "),a("h3",{attrs:{id:"custom-json-dumps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-json-dumps","aria-hidden":"true"}},[t._v("#")]),t._v(" custom_json_dumps")]),t._v(" "),a("p",[t._v("can dump Model, Decimal")]),t._v(" "),a("h3",{attrs:{id:"jsonify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonify","aria-hidden":"true"}},[t._v("#")]),t._v(" jsonify")]),t._v(" "),a("p",[t._v("stronger than flask.jsonify, common used in router functions to return data:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/course/toggle_liked'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@middlewares"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("course_toggle_liked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request_json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    course "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elastic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first_or_404"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    record "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CourseLikedByUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elastic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" current_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("where"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'course_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    liked_count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("liked_count\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        liked_count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" current_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'course_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        CourseLikedByUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        liked_count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("liked_count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("liked_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jsonify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'liked_count'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" liked_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"abort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abort","aria-hidden":"true"}},[t._v("#")]),t._v(" abort")]),t._v(" "),a("p",[t._v("stronger than flask.abort, common used in router functions to abort request")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("ut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Invalid input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# message can be complex data, like dict, model")]),t._v("\nut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"request-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-json","aria-hidden":"true"}},[t._v("#")]),t._v(" request_json")]),t._v(" "),a("p",[t._v("get request json data")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request_json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);s.default=r.exports}}]);