(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{371:function(t,s,a){t.exports=a.p+"assets/img/custadv.c244c6ce.png"},448:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("框架添加了自定义高级查询的功能，主版本精灵框架已包含此功能，老版本框架若要使用，请进行如下操作，集成功能:")]),t._v(" "),s("h2",{attrs:{id:"一-下载源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-下载源码"}},[t._v("#")]),t._v(" 一. 下载源码")]),t._v(" "),s("p",[t._v("下载自定义高级查询插件。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(371),alt:"custadv"}}),t._v(" "),s("h2",{attrs:{id:"二-插件集成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-插件集成"}},[t._v("#")]),t._v(" 二. 插件集成")]),t._v(" "),s("h3",{attrs:{id:"_1-项目-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目-system"}},[t._v("#")]),t._v(" 1. [项目]-system")]),t._v(" "),s("p",[t._v("将 "),s("code",[t._v("system")]),t._v(" 目录下的"),s("code",[t._v("domain、mapper、service")]),t._v("复制到你的"),s("code",[t._v("[项目]-system")]),t._v("中")]),t._v(" "),s("p",[s("code",[t._v("xml")]),t._v("中文件复制到"),s("code",[t._v("[项目]-system/src/main/resources/mapper/system")]),t._v("中")]),t._v(" "),s("h3",{attrs:{id:"_2-项目-common"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目-common"}},[t._v("#")]),t._v(" 2. [项目]-common")]),t._v(" "),s("p",[t._v("将 "),s("code",[t._v("common")]),t._v(" 目录下的文件复制到你"),s("code",[t._v("[项目]-common")]),t._v("对应的目录中")]),t._v(" "),s("h3",{attrs:{id:"_3-项目-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-项目-framework"}},[t._v("#")]),t._v(" 3. [项目]-framework")]),t._v(" "),s("p",[t._v("将 "),s("code",[t._v("framework")]),t._v(" 目录下的文件复制到你"),s("code",[t._v("[项目]-framework")]),t._v("对应的目录中")]),t._v(" "),s("h3",{attrs:{id:"_4-项目-admin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-项目-admin"}},[t._v("#")]),t._v(" 4. [项目]-admin")]),t._v(" "),s("p",[t._v("将 "),s("code",[t._v("admin")]),t._v(" 目录下的文件复制到你"),s("code",[t._v("[项目]-admin/src/main/java/com/spirit/web/controller/system")]),t._v("中")]),t._v(" "),s("h3",{attrs:{id:"_5-项目-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-项目-ui"}},[t._v("#")]),t._v(" 5. [项目]-ui")]),t._v(" "),s("p",[t._v("将 "),s("code",[t._v("ui")]),t._v(" 目录下的文件复制到你"),s("code",[t._v("[项目]-ui")]),t._v("对应的目录中")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("CustAdvSearch/")]),t._v("  ——>  "),s("code",[t._v("src/components/")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("caq/")]),t._v("            ——>  "),s("code",[t._v("src/views/system/")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("caq.js")]),t._v("         ——>  "),s("code",[t._v("src/api/system/")])])])]),t._v(" "),s("h3",{attrs:{id:"_6-添加全局组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-添加全局组件"}},[t._v("#")]),t._v(" 6. 添加全局组件")]),t._v(" "),s("p",[t._v("在 main.js 中添加如下内容")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义高级查询组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CustAdvSearch "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/CustAdvSearch'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CustAdvSearch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CustAdvSearch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_7-执行sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-执行sql"}},[t._v("#")]),t._v(" 7. 执行SQL")]),t._v(" "),s("p",[t._v("在你的项目中，执行"),s("code",[t._v("sql/V1_4__init_cust_adv_search.sql")])]),t._v(" "),s("h2",{attrs:{id:"三-使用说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-使用说明"}},[t._v("#")]),t._v(" 三. 使用说明")]),t._v(" "),s("h3",{attrs:{id:"_1-添加注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加注解"}},[t._v("#")]),t._v(" 1. 添加注解")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("Controller")]),t._v("中，查询列表方法上添加注解"),s("code",[t._v("@CustomizeAdvancedSearch")]),t._v("，例如:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/list"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@CustomizeAdvancedSearch")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TableDataInfo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Xx")]),t._v(" xx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Xx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectXxList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDataTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-mybatis-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-mybatis-xml"}},[t._v("#")]),t._v(" 2. Mybatis XML")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("Mybatis XML")]),t._v("中，查询列表的sql中，添加如下代码:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 自定义高级查询 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("params.customizeAdvanced != null and params.customizeAdvanced != ''"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    ${params.customizeAdvanced} \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 自定义高级查询 --\x3e")]),t._v("\n")])])]),s("p",[t._v("例如:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("selectXxList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("parameterType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Xx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("resultMap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("XxResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xx != null  and xx != ''"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" and t.xx = #{xx}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 自定义高级查询 --\x3e")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("params.customizeAdvanced != null and params.customizeAdvanced != ''"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n            ${params.customizeAdvanced} \n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 自定义高级查询 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("注意：必须为数据库表添加别名，例如: "),s("code",[t._v("select t.id from t_xx t")])])]),t._v(" "),s("h3",{attrs:{id:"_3-前端使用组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-前端使用组件"}},[t._v("#")]),t._v(" 3. 前端使用组件")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 查询按钮 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),t._v(" icon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"el-icon-zoom-in"')]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mini"')]),t._v(" @click"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openCustAdvSearch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("高级查询"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("自定义高级查询组件 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tableName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 数据库表名\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tableAlias")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 数据库表别名\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("searchFunc")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 回调查询方法\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("cust"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("adv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("search v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"showCustAdvSearch"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("tableName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'t_demo'\"")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("tableAlias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'t'\"")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("searchFunc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"customSearch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 自定义查询标识 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打开自定义查询")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("showCustAdvSearch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 自定义查询方法 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openCustAdvSearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showCustAdvSearch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showCustAdvSearch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("customSearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryParams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryParams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-demo示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-demo示例"}},[t._v("#")]),t._v(" 4. Demo示例")]),t._v(" "),s("p",[t._v("Demo示例，可参考："),s("code",[t._v("src/views/biz/demo/index.vue")])])])}),[],!1,null,null,null);s.default=r.exports}}]);