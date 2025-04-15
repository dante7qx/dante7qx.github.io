(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{462:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一-概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-概述"}},[t._v("#")]),t._v(" 一. 概述")]),t._v(" "),s("p",[t._v("MySQL主从复制的原理是指数据可以从一个MySQL数据库服务器主节点复制到一个或多个从节点。MySQL默认采用异步复制方式，这样从节点不用一直访问主服务器来更新自己的数据，数据的更新可以在远程连接上进行，从节点可以复制主数据库中的所有数据库或者特定的数据库，或者特定的表。")]),t._v(" "),s("p",[t._v("MySQL主从复制涉及到三个线程，一个运行在主节点（log dump thread），其余两个（I/O thread, SQL thread）运行在从节点。具体的流程如下：")]),t._v(" "),s("ul",[s("li",[t._v("主节点将数据的改变记录到二进制日志（binlog）中，当主节点上的数据发生改变时，则将其改变写入二进制日志中；")]),t._v(" "),s("li",[t._v("从节点发起连接，连接到主节点，并请求获取二进制日志的内容；")]),t._v(" "),s("li",[t._v("主节点为每个从节点启动一个dump线程，用于向其发送二进制事件，并保存至从节点本地的中继日志（relay log）中；")]),t._v(" "),s("li",[t._v("从节点启动一个I/O线程，读取主节点传过来的二进制事件并写入到本地的relay log文件中；")]),t._v(" "),s("li",[t._v("从节点启动一个SQL线程，从relay log文件中读取二进制事件，并解析成SQL语句，在本地重放，使得其数据和主节点的保持一致。")])]),t._v(" "),s("h2",{attrs:{id:"二-主从复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-主从复制"}},[t._v("#")]),t._v(" 二. 主从复制")]),t._v(" "),s("p",[t._v("MySQL主从复制，主库用于处理写请求，从库用于处理读请求。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[t._v("操作系统：Centos 7.5，两台：192.168.1.100（主）、192.168.1.101（从）")]),t._v(" "),s("li",[t._v("数据库：MySQL 5.7.37")]),t._v(" "),s("li",[t._v("数据库端口：3306")]),t._v(" "),s("li",[t._v("已安装好 MySQL")]),t._v(" "),s("li",[t._v("两台服务器互相开通3306端口的访问权限")])])]),t._v(" "),s("h3",{attrs:{id:"_1-主库服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-主库服务器"}},[t._v("#")]),t._v(" 1. 主库服务器")]),t._v(" "),s("ol",[s("li",[t._v("配置"),s("code",[t._v("my.cnf")])])]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("mysqld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 保持唯一性，不能和从库重复。推荐使用IP的四小节数字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("server-id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("100")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("log-bin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql-bin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置不需要写BinLog的数据库，多个数据库则要多行分别设置 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("information_schema")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("performance_schema")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置需要写BinLog的数据库，多个数据库则要多行分别设置 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-do-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("要复制的数据库")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("创建用于复制的用户")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("重新启动MySQL服务")])]),t._v(" "),s("li",[s("p",[t._v("创建用户")])])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slave1'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.1.101'")]),t._v(" identified "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("replication")]),t._v(" slave "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slave1'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.1.101'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nflush "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("privileges")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("查看主库状态，记录日志文件名,日志位置")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" master "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 结果")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------+----------+--------------+------------------+-------------------+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("File")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Binlog_Do_DB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Binlog_Ignore_DB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Executed_Gtid_Set "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------+----------+--------------+------------------+-------------------+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("000003")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("514")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------+----------+--------------+------------------+-------------------+")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-从库服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-从库服务器"}},[t._v("#")]),t._v(" 2. 从库服务器")]),t._v(" "),s("ol",[s("li",[t._v("配置"),s("code",[t._v("my.cnf")])])]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("mysqld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("server-id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("101")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("read-only")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("ON")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置不需要复制的数据库，多个数据库则要多行分别设置 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("information_schema")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("performance_schema")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置需要复制的数据库，多个数据库则要多行分别设置 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-do-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("要复制的数据库")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("执行同步SQL")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("重新启动MySQL服务")])]),t._v(" "),s("li",[s("p",[t._v("执行同步SQL")])])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nchange master "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" master_host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'192.168.1.100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slave1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_log_file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysql-bin.000003'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_log_pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("514")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 开启从库模式 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("start")]),t._v(" slave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 查看从库状态（Slave_IO_Running: Yes、Slave_SQL_Running: Yes、Seconds_Behind_Master: 0 说明同步成功）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" slave "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证"}},[t._v("#")]),t._v(" 3. 验证")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("在主库上创建你要同步的数据库，例如：demo。然后在建个表，例如：t_demo (id, name)。最后插入数据。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("到从库上查看数据是否已经同步过来。")])])])]),t._v(" "),s("h2",{attrs:{id:"三-双机热备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-双机热备"}},[t._v("#")]),t._v(" 三. 双机热备")]),t._v(" "),s("p",[t._v("双机热备，即MySQL主主复制，保证 MYSQL服务器数据的一致性。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[t._v("操作系统：Centos 7.5，两台：192.168.1.110（主1）、192.168.1.111（主2）")]),t._v(" "),s("li",[t._v("数据库：MySQL 5.7.37")]),t._v(" "),s("li",[t._v("数据库端口：3306")]),t._v(" "),s("li",[t._v("已安装好 MySQL")]),t._v(" "),s("li",[t._v("两台服务器互相开通3306端口的访问权限")])])]),t._v(" "),s("h3",{attrs:{id:"_1-配置my-cnf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置my-cnf"}},[t._v("#")]),t._v(" 1. 配置"),s("code",[t._v("my.cnf")])]),t._v(" "),s("ol",[s("li",[t._v("主库1")])]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("mysqld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 保持唯一性，不能和从库重复。推荐使用IP的四小节数字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("server-id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("110")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("log-bin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql-bin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("log-slave-updates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("ON")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("sync_binlog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## auto_increment，控制自增列AUTO_INCREMENT的行为，用于MASTER-MASTER之间的复制，防止出现重复值,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## n有多少台服务器，n就设置为多少, 步长设置为1,这样Master的auto_increment字段产生的数值是:1, 3, 5, 7, …等奇数ID")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("auto_increment_offset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("auto_increment_increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置不需要写BinLog的数据库，多个数据库则要多行分别设置 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("information_schema")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("performance_schema")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置需要写BinLog的数据库，多个数据库则要多行分别设置 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-do-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("要复制的数据库")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置需要复制的数据库，多个数据库则要多行分别设置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("information_schema")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("performance_schema")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置需要复制的数据库，多个数据库则要多行分别设置 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-do-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("要复制的数据库")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("主库2")])]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("mysqld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 保持唯一性，不能和从库重复。推荐使用IP的四小节数字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("server-id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("111")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("log-bin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql-bin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("log-slave-updates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("ON")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("sync_binlog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## auto_increment，控制自增列AUTO_INCREMENT的行为，用于MASTER-MASTER之间的复制，防止出现重复值,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## n有多少台服务器，n就设置为多少, 步长设置为2,这样Master的auto_increment字段产生的数值是:2, 4, 6, 8, …等偶数ID")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("auto_increment_offset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("auto_increment_increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置不需要写BinLog的数据库，多个数据库则要多行分别设置 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("information_schema")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("performance_schema")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置需要写BinLog的数据库，多个数据库则要多行分别设置 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("binlog-do-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("要复制的数据库")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置需要复制的数据库，多个数据库则要多行分别设置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("mysql")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("information_schema")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-ignore-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("performance_schema")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置需要复制的数据库，多个数据库则要多行分别设置 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("replicate-do-db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("要复制的数据库")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-执行同步sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行同步sql"}},[t._v("#")]),t._v(" 2. 执行同步SQL")]),t._v(" "),s("p",[s("strong",[t._v("1. 查看 master 状态")])]),t._v(" "),s("ul",[s("li",[t._v("主库1")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 查看 master 状态")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" master "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------+----------+--------------+---------------------------------------------+---------------+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("File")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Binlog_Do_DB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Binlog_Ignore_DB                          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Executed_Gtid_Set \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------+----------+--------------+---------------------------------------------+---------------+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("000001")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1104")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" demo         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("information_schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("performance_schema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                   \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------+----------+--------------+---------------------------------------------+---------------+")]),t._v("\n")])])]),s("ul",[s("li",[t._v("主库2")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 查看 master 状态")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" master "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------+----------+--------------+---------------------------------------------+---------------+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("File")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Binlog_Do_DB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Binlog_Ignore_DB                          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Executed_Gtid_Set \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------+----------+--------------+---------------------------------------------+---------------+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("000002")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1327")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" demo         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("information_schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("performance_schema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                   \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------+----------+--------------+---------------------------------------------+---------------+")]),t._v("\n")])])]),s("p",[s("strong",[t._v("2. 创建用于同步的用户")])]),t._v(" "),s("ul",[s("li",[t._v("主库1")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'backuper'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.1.110'")]),t._v(" identified "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("replication")]),t._v(" slave "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'backuper'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.1.110'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nflush "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("privileges")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("主库2")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'backuper'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.1.111'")]),t._v(" identified "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("replication")]),t._v(" slave "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'backuper'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@'192.168.1.111'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nflush "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("privileges")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("3. 同步设置SQL")])]),t._v(" "),s("ul",[s("li",[t._v("主库1")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("stop slave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchange master "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" master_host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'192.168.1.111'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'backuper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_log_file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysql-bin.000002'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_log_pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1327")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("start")]),t._v(" slave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" slave "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("主库2")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("stop slave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchange master "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" master_host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'192.168.1.110'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'backuper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_log_file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysql-bin.000001'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master_log_pos"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1104")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("start")]),t._v(" slave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" slave "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-验证-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证-2"}},[t._v("#")]),t._v(" 3. 验证")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("在主库1上创建你要同步的数据库，例如：demo。然后在建个表，例如：t_demo (id, name)。最后插入数据。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("到主库2查看数据是否已经同步过来。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("在主库2上插入或更新数据。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("到主库1查看数据是否已经同步过来。")])])])]),t._v(" "),s("h2",{attrs:{id:"三-共享存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-共享存储"}},[t._v("#")]),t._v(" 三. 共享存储")]),t._v(" "),s("p",[t._v("通过共享存储的方式，可以实现MySQL数据备份和快速恢复数据库服务。这种方式可以提高数据恢复的速度，并且减少数据丢失的风险。")]),t._v(" "),s("p",[t._v("具体的操作步骤：")]),t._v(" "),s("h3",{attrs:{id:"_1-配置共享存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置共享存储"}},[t._v("#")]),t._v(" 1. 配置共享存储")]),t._v(" "),s("ul",[s("li",[t._v("Linux：挂载共享存储设备（例如SAN、NAS等）")]),t._v(" "),s("li",[t._v("Windows：配置网络共享盘")])]),t._v(" "),s("h3",{attrs:{id:"_2-配置mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置mysql"}},[t._v("#")]),t._v(" 2. 配置MySQL")]),t._v(" "),s("p",[t._v("在每个MySQL服务器上，将MySQL的数据和日志文件存储在共享存储设备。修改MySQL配置文件"),s("code",[t._v("my.cnf")]),t._v("或"),s("code",[t._v("my.ini")])]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("datadir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("<实际位置>")]),t._v("\n")])])]),s("p",[t._v("说明：若要开启binlog，还需要配置binlog的位置。")]),t._v(" "),s("h3",{attrs:{id:"_3-启动说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动说明"}},[t._v("#")]),t._v(" 3.启动说明")]),t._v(" "),s("p",[t._v("如果不设置MySQL主主复制，那两台MySQL服务只能启动一个。")]),t._v(" "),s("h2",{attrs:{id:"四-mysql备份还原"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-mysql备份还原"}},[t._v("#")]),t._v(" 四. MySQL备份还原")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("mysqldump")]),t._v(" "),s("p",[t._v("中小型数据库，20G以内。")]),t._v(" "),s("p",[t._v("参考 "),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/143899576",target:"_blank"}},[t._v("https://zhuanlan.zhihu.com/p/143899576")])])]),t._v(" "),s("li",[s("p",[t._v("xtrabackup（Only for Linux）")]),t._v(" "),s("p",[t._v("大型数据库，Percona XtraBackup 工具。")]),t._v(" "),s("p",[t._v("参考 "),s("a",{attrs:{href:"https://www.modb.pro/db/411046",target:"_blank"}},[t._v("https://www.modb.pro/db/411046")])])]),t._v(" "),s("li",[s("p",[t._v("Navicat工具备份")]),t._v(" "),s("p",[t._v("优缺点：使用方便，但是备份和还原时间都比较长。")]),t._v(" "),s("p",[t._v("参考 "),s("a",{attrs:{href:"https://www.cnblogs.com/better-farther-world2099/articles/10276087.html",target:"_blank"}},[t._v("https://www.cnblogs.com/better-farther-world2099/articles/10276087.html")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);