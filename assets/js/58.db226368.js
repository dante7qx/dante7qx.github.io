(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{451:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一-环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-环境准备"}},[t._v("#")]),t._v(" 一. 环境准备")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[t._v("服务器必须是云主机，并且要和Jenkins Master服务器网络互通")]),t._v(" "),s("li",[t._v("服务器挂载数据盘，挂载目录是 /data")]),t._v(" "),s("li",[t._v("服务器要加入到Jenkins集群中")]),t._v(" "),s("li",[t._v("服务器上要事先安装 JDK1.8、Maven3.6+、Node16+，并在 /bin 下设置软链接，例如\n"),s("ul",[s("li",[t._v("ln -s /usr/local/java/bin/java /bin/java")]),t._v(" "),s("li",[t._v("ln -s /usr/local/maven/bin/mvn /bin/mvn")]),t._v(" "),s("li",[t._v("ln -s /usr/local/nodejs/bin/node /bin/npde")]),t._v(" "),s("li",[t._v("ln -s /usr/local/nodejs/bin/npm /bin/npm")])])]),t._v(" "),s("li",[t._v("若要部署前端页面，须事先安装nignx，并做好配置，其中 Location root 为 /deploy/<项目名>/html")])])]),t._v(" "),s("h2",{attrs:{id:"二-初始化服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-初始化服务器"}},[t._v("#")]),t._v(" 二. 初始化服务器")]),t._v(" "),s("p",[t._v("（1） 登录服务器，创建init.sh，输入如下内容")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#! /bin/bash")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 修改<项目名>为实际的项目名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<项目名>"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 创建部署根目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("createAppDeploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/deploy/'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${project}")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  \t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /deploy/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${project}")]),t._v("\n  \t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /deploy/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${project}")]),t._v("/html\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 创建应用程序产出目录（日志、上传文件...）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("createAppRunOut")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/deploy/logs/'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${project}")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  \t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /data/deploy/logs/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${project}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/deploy/upload/'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${project}")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  \t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /data/deploy/upload/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${project}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/deploy/apikey/'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${project}")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  \t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /data/deploy/apikey/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${project}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 授权给用户 jenkins")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("assignAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-R")]),t._v(" jenkins /deploy\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-R")]),t._v(" jenkins /data\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcreateAppDeploy\n\tcreateAppRunOut\n\tassignAuth\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 执行初始化函数")]),t._v("\ninit\n")])])])]),t._v(" "),s("p",[t._v("（2）执行脚本 init.sh")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" init.sh\n")])])]),s("h2",{attrs:{id:"三-项目部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-项目部署"}},[t._v("#")]),t._v(" 三. 项目部署")]),t._v(" "),s("h3",{attrs:{id:"_1-提供健康检查endpoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-提供健康检查endpoint"}},[t._v("#")]),t._v(" 1. 提供健康检查Endpoint")]),t._v(" "),s("p",[t._v("在项目中提供健康检查Endpoint，可匿名访问，例如")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/health_check"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("healthCheck")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UP"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在SecurityConfig.java中设置匿名访问")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("antMatchers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/health_check"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("anonymous")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-部署脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署脚本"}},[t._v("#")]),t._v(" 2. 部署脚本")]),t._v(" "),s("p",[t._v("（1）在项目的ruoyi-admin模块下，创建deploy.sh（和pom.xml同级）")]),t._v(" "),s("p",[t._v("（2）deploy.sh 内容如下，按注释进行修改")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#! /bin/bash")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局将testapp修改为自己项目的名字")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <项目名> 替换成自己的项目名，和init.sh中保持一致")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("APP_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("testapp*.jar\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("JAVA_OPTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Xms1024m -Xmx1024m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LOG_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/deploy/logs/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("项目名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("UPLOAD_PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/deploy/upload/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("项目名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("APIKEY_PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/deploy/apikey/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("项目名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GREP_APP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testapp.*.jar"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 启动端口号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SERVER_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9001")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 健康检查的URI")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HEALTH_CHECK")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"health_check"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用说明，用来提示输入参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("usage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Usage: sh deploy.sh [start|stop|restart|status]"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查程序是否在运行")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("is_exist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("pid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" $GREP_APP "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $2}'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果不存在返回1，存在返回0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-z")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${pid}")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动方法（根据实际项目调整运行时的环境变量）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   is_exist\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-eq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${APP_NAME}")]),t._v(" is already running. pid="),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${pid}")]),t._v('."')]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${APP_NAME}")]),t._v(" begin to start, listening to "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SERVER_PORT}")]),t._v('"')]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$JAVA_OPTS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     \t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dfile.encoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf-8 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     \t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Djava.security.egd")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("file:/dev/./urandom "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     \t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$APP_NAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     \t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--server.port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SERVER_PORT}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     \t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--spring.redis.database")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     \t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--ruoyi.profile")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$UPLOAD_PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     \t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--ruoyi.apiKey")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$APIKEY_PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n     \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#停止方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("stop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   is_exist\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-eq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pid")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${APP_NAME}")]),t._v(' is not running"')]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#输出运行状态")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   is_exist\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-eq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${APP_NAME}")]),t._v(" is running. Pid is "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${pid}")]),t._v('"')]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${APP_NAME}")]),t._v(' is not running."')]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   stop\n   start\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#健康检查")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("healthCheck")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SIGNAL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SIGNAL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RESULT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-I")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" /dev/null "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-w")]),t._v(" %"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("http_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" http://localhost:$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SERVER_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HEALTH_CHECK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RESULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SIGNAL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${LOG_HOME}")]),t._v("/sys-error.log\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${LOG_HOME}")]),t._v("/sys-error.log\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#根据输入参数，选择执行对应方法，不输入则执行使用说明")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     start\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stop"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     stop\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     status\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"restart"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     restart\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"healthCheck"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     healthCheck\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   *"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     usage\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("esac")]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-配置自动化部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置自动化部署"}},[t._v("#")]),t._v(" 3. 配置自动化部署")]),t._v(" "),s("p",[t._v("联系但丁，进行自动化部署配置")])])}),[],!1,null,null,null);s.default=e.exports}}]);