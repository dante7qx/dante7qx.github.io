(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{457:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-整形显示宽度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-整形显示宽度"}},[s._v("#")]),s._v(" 1. 整形显示宽度")]),s._v(" "),a("p",[s._v("整数类型的显示宽度在 MySQL 中已被标记为过时，并且在将来的版本中将被移除。")]),s._v(" "),a("p",[s._v("例如： BIGINT(20)、INT(10)、TINYINT(1) 要修改为 BIGINT、INT、TINYINT")]),s._v(" "),a("p",[s._v("可通过正则匹配替换："),a("code",[s._v("int[(]\\d*[)]")]),s._v(" 替换为 "),a("code",[s._v("int")])]),s._v(" "),a("h2",{attrs:{id:"_2-sql-mode支持问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-sql-mode支持问题"}},[s._v("#")]),s._v(" 2. sql_mode支持问题")]),s._v(" "),a("p",[s._v("8.0版本sql_mode不支持NO_AUTO_CREATE_USER，要避免配置的sql_mode中带有NO_AUTO_CREATE_USER。")]),s._v(" "),a("h2",{attrs:{id:"_3-默认身份认证插件变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-默认身份认证插件变更"}},[s._v("#")]),s._v(" 3. 默认身份认证插件变更")]),s._v(" "),a("p",[s._v("8.0版本的默认身份认证插件是"),a("code",[s._v("caching_sha2_password")]),s._v("，具有更优越的安全性和性能。但可能造成客户端的连接问题。")]),s._v(" "),a("p",[s._v("可以使用MySQL5的插件"),a("code",[s._v("mysql_native_password")]),s._v("，修改配置文件：")]),s._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysqld")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default_authentication_plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("mysql_native_password")]),s._v("\n")])])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" mysql_native_password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'YourPassword'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nFLUSH "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"_4-默认字符集由latin1变为utf8mb4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-默认字符集由latin1变为utf8mb4"}},[s._v("#")]),s._v(" 4. 默认字符集由latin1变为utf8mb4")]),s._v(" "),a("h2",{attrs:{id:"_5-持久化设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-持久化设置"}},[s._v("#")]),s._v(" 5. 持久化设置")]),s._v(" "),a("p",[s._v("MySQL8.0 新增 SET PERSIST 的命令，该命令的配置值保存到数据目录下的mysqld-auto.cnf文件中，待重启后，读取该文件，用其中的配置覆盖缺省的配置文件，补充了SET GLOBAL 命令只能临时生效的不足；\n命令的使下如：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PERSIST max_connections "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);