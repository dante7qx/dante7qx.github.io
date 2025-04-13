(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{459:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("安装完MYSQL后，需要进行调整的配置项")])]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 可以处理的最大数据包大小，默认1M。推荐设置成 128M")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("max_allowed_packet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("128M")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 最大连接数，默认150。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("max_connections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("700\t")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("max_connect_errors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 核心交易系统（金融、游戏）设置为1，默认为1，影响系统写性能。其他推荐设置成2。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("innodb_flush_log_at_trx_commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 核心交易系统（金融、游戏）设置为 REPEATABLE-READ，默认为REPEATABLE-READ。其他推荐设置成READ-COMMITTED。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("transaction_isolation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("READ-COMMITTED")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 推荐设置成16M")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("innodb_log_buffer_size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("16M")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 2的倍数，小于CPU的核心数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("innodb_buffer_pool_instances")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置成系统内存的 20% ~ 60%，innodb_buffer_pool_instances的整数倍")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("innodb_buffer_pool_size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("18G")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 默认200，sata/sas硬盘：2000，ssd硬盘：8000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("innodb_io_capacity_max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("8000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置成 innodb_io_capacity_max 的一半")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("innodb_io_capacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("4000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 连接操作的缓冲区的大小，默认256k，推荐设置成 2～4M")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("join_buffer_size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("4M")]),t._v("\n")])])]),a("p",[a("strong",[t._v("ONLY_FULL_GROUP_BY")])]),t._v(" "),a("p",[t._v("MySQL 5.7版本开始启用ONLY_FULL_GROUP_BY，主要是为了避免查询selelct语句当中出现语义不明确的列，对于一些比较严谨的语义来说它的作用相当重要。")]),t._v(" "),a("p",[t._v("即，使用group by 语句时，你的输出语句当中只能是使用了聚合函数的字段和group by的字段，若有其他不明确的字段则报错。")]),t._v(" "),a("p",[t._v("要去掉这个限制，有两种方式：")]),t._v(" "),a("ul",[a("li",[t._v("临时处理")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" sql_mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("永久处理")])]),t._v(" "),a("p",[t._v("my.cnf 中")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("[mysqld]")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("sql_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);