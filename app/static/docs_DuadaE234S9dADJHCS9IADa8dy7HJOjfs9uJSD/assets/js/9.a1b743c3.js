(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{170:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("HTTP routes and socketio.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("Check "),a("router-link",{attrs:{to:"./schedule-task.html"}},[t._v("Schedule Task")])],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("Add custom methods to help query Elasticsearch. Check "),a("router-link",{attrs:{to:"./db.html#read"}},[t._v("this")])],1),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("Add custom methods to cassandra python driver. Check "),a("router-link",{attrs:{to:"./db.html#add-update-delete"}},[t._v("this")])],1),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Generate faker data.")]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("Send email")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("Stripe")]),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("All system message functions.")]),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("Seed database. "),a("router-link",{attrs:{to:"./db.html"}},[t._v("DB")])],1),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("static files, js, css, images, built frontend files.")]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("Flask templates folder")]),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("Commonly used functions. Check "),a("router-link",{attrs:{to:"./utils.html"}},[t._v("Utils")])],1),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("app module entry")]),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("define elasticsearch indexes. Check "),a("router-link",{attrs:{to:"./db.html#commands"}},[t._v("DB Commands")])],1),t._v(" "),t._m(24),t._v(" "),a("p",[a("router-link",{attrs:{to:"./how-to-run.html#environment-config"}},[t._v("Environment config")])],1),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("advance custom fake functions")]),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("Unused")]),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("Cassandra models")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),a("p",[t._v("both frontend and backend using files. May be JSON format.")]),t._v(" "),t._m(33),t._v(" "),a("p",[t._v("Docs source, built files are at docs/")]),t._v(" "),t._m(34),t._v(" "),a("p",[t._v("site frontend")]),t._v(" "),t._m(35),t._v(" "),a("p",[t._v("admin panel frontend")]),t._v(" "),t._m(36),t._v(" "),a("p",[t._v("To help handle database by commands. "),a("router-link",{attrs:{to:"./db.html#commands"}},[t._v("DB Commands")])],1),t._v(" "),t._m(37),t._v(" "),a("p",[t._v("backend entry")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Structure")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app","aria-hidden":"true"}},[this._v("#")]),this._v(" app/")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"net"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#net","aria-hidden":"true"}},[this._v("#")]),this._v(" net/")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"route-file-header-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route-file-header-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Route file header example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" current_app "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" app\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask_login "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" current_user\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ut\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blueprints "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" api\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" middlewares\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" models\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CourseLikedByUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Payment\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" plugins/")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"apscheduler-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apscheduler-py","aria-hidden":"true"}},[this._v("#")]),this._v(" apscheduler.py")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"cache-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-py","aria-hidden":"true"}},[this._v("#")]),this._v(" cache.py")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cache\nvalue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout_minutes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# value can be dict, list, string, number, ...")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"cassandra-cqlengine-elastic-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cassandra-cqlengine-elastic-py","aria-hidden":"true"}},[this._v("#")]),this._v(" cassandra_cqlengine_elastic.py")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"cassandra-cqlengine-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cassandra-cqlengine-py","aria-hidden":"true"}},[this._v("#")]),this._v(" cassandra_cqlengine.py")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"fake-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fake-py","aria-hidden":"true"}},[this._v("#")]),this._v(" fake.py")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fake "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fake\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fake"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# base functions: https://github.com/joke2k/faker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# there are 3 custom functions at fake.py: gender, phone, image")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# there are some advance functions at app/fake_provider.py")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"mail-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mail-py","aria-hidden":"true"}},[this._v("#")]),this._v(" mail.py")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mail "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Message\n    msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" recipients"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" render_template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email/your template.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    mail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warning"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'Failed to send confirm email. email: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", error: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Failed to send email, please try again or contact support'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"stripe-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stripe-py","aria-hidden":"true"}},[this._v("#")]),this._v(" stripe.py")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stripe "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" stripe\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# session will take time to connect stripe server")]),t._v("\nsession "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stripe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("checkout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  payment_method_types"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'card'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  line_items"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'Register course: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'School: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("school"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cover"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("photos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'amount'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'currency'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'usd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quantity'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  customer_email "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  success_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("url_for"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"home"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _external "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("order?status=success&id=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cancel_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("url_for"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"home"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _external "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("order?status=cancel&id=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"system-message-center-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#system-message-center-py","aria-hidden":"true"}},[this._v("#")]),this._v(" system_message_center.py")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"seeds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seeds","aria-hidden":"true"}},[this._v("#")]),this._v(" seeds/")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"static"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static","aria-hidden":"true"}},[this._v("#")]),this._v(" static/")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"templates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templates","aria-hidden":"true"}},[this._v("#")]),this._v(" templates/")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"utils"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#utils","aria-hidden":"true"}},[this._v("#")]),this._v(" utils/")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"init-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init-py","aria-hidden":"true"}},[this._v("#")]),this._v(" __ init__.py")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"elastic-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elastic-py","aria-hidden":"true"}},[this._v("#")]),this._v(" elastic.py")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"env-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env-py","aria-hidden":"true"}},[this._v("#")]),this._v(" env.py")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"fake-provider-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fake-provider-py","aria-hidden":"true"}},[this._v("#")]),this._v(" fake_provider.py")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"materialized-views-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#materialized-views-py","aria-hidden":"true"}},[this._v("#")]),this._v(" materialized_views.py")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"models-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#models-py","aria-hidden":"true"}},[this._v("#")]),this._v(" models.py")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"define-getter-for-has-one-relationship"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#define-getter-for-has-one-relationship","aria-hidden":"true"}},[this._v("#")]),this._v(" define getter for has-one relationship")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" werkzeug "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cached_property\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentProfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    user_id      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" columns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("primary_key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    @cached_property\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"define-subquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#define-subquery","aria-hidden":"true"}},[this._v("#")]),this._v(" define subquery")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" columns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("primary_key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" default"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("str_ksuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query_payments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Payment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elastic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'related_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"common"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common","aria-hidden":"true"}},[this._v("#")]),this._v(" common/")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"docs-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docs-source","aria-hidden":"true"}},[this._v("#")]),this._v(" docs-source/")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"frontend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontend","aria-hidden":"true"}},[this._v("#")]),this._v(" frontend/")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"frontend-admin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontend-admin","aria-hidden":"true"}},[this._v("#")]),this._v(" frontend-admin/")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"db-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#db-py","aria-hidden":"true"}},[this._v("#")]),this._v(" db.py")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"run-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-py","aria-hidden":"true"}},[this._v("#")]),this._v(" run.py")])}],!1,null,null,null);s.default=n.exports}}]);