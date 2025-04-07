(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{376:function(t,a,s){t.exports=s.p+"assets/img/InstallService.31698299.png"},377:function(t,a,s){t.exports=s.p+"assets/img/SysService.af0b651c.png"},378:function(t,a,s){t.exports=s.p+"assets/img/StartService.d2ebe258.png"},454:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一-环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-环境准备"}},[t._v("#")]),t._v(" 一. 环境准备")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("服务器必须是云主机，并且要和Jenkins Master服务器网络互通")]),t._v(" "),a("li",[t._v("服务器要加入到Jenkins集群中")]),t._v(" "),a("li",[t._v("服务器上要事先安装 JDK1.8、Maven3.6+、Node16+，并加入到系统的PATH中")]),t._v(" "),a("li",[t._v("若要部署前端页面，须事先安装nignx，并做好配置")])])]),t._v(" "),a("h2",{attrs:{id:"二-服务化部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-服务化部署"}},[t._v("#")]),t._v(" 二. 服务化部署")]),t._v(" "),a("p",[t._v("统一将项目的后台API服务以Windows系统服务的方式，来部署运行。")]),t._v(" "),a("h3",{attrs:{id:"_1-提供健康检查endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-提供健康检查endpoint"}},[t._v("#")]),t._v(" 1. 提供健康检查Endpoint")]),t._v(" "),a("p",[t._v("在项目中提供健康检查Endpoint，可匿名访问，例如")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/health_check"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("healthCheck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在SecurityConfig.java中设置匿名访问")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("antMatchers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/health_check"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("anonymous")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-下载winsw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载winsw"}},[t._v("#")]),t._v(" 2. 下载WinSw")]),t._v(" "),a("p",[t._v("WinSw是一个可以将任何应用程序注册成服务的软件，可以在"),a("a",{attrs:{href:"https://github.com/winsw/winsw/releases",target:"_blank"}},[t._v("Github")]),t._v("中进行下载，"),a("a",{attrs:{href:"https://github.com/winsw/winsw/releases/download/v2.11.0/WinSW-x64.exe",download:"winsw"}},[t._v("点击下载")])]),t._v(" "),a("h3",{attrs:{id:"_3-部署后台api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-部署后台api"}},[t._v("#")]),t._v(" 3. 部署后台API")]),t._v(" "),a("p",[t._v("在系统中创建一个目录用来进行部署，本文档中该目录为 "),a("code",[t._v("C:\\Deploy")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建项目目录（本例中项目为app）")]),t._v(" "),a("p",[t._v("进入"),a("code",[t._v("C:\\Deploy")]),t._v("，创建app文件夹")])]),t._v(" "),a("li",[a("p",[t._v("创建服务")]),t._v(" "),a("p",[t._v("进入"),a("code",[t._v("C:\\Deploy\\app")]),t._v("目录，创建文件夹logs、files、apikeys")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("将项目后台API服务的 jar 包放到该目录下，本例为 app.jar")])]),t._v(" "),a("li",[a("p",[t._v("将"),a("code",[t._v("WinSW-x64.exe")]),t._v("复制到 "),a("code",[t._v("C:\\Deploy\\app")]),t._v(" 下，并重命名为"),a("code",[t._v("appService.exe")])])]),t._v(" "),a("li",[a("p",[t._v("服务配置，创建appService.xml，内容如下")])])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("appService"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("appService"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("XXX Project API Service"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logpath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("%BASE%\\logs"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("logpath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("log")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("roll-by-size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("sizeThreshold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("10240"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("sizeThreshold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keepFiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("8"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keepFiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("executable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("java"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("executable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("arguments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n    -Xms1024m -Xmx1024m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m\n    -Dfile.encoding=utf-8\n    -Djava.security.egd=file:/dev/./urandom\n    -jar "%BASE%\\app.jar"\n    --server.port=8100\n    --ruoyi.profile="%BASE%\\files"\n    --ruoyi.apiKey="%BASE%\\apikeys"\n    --spring.redis.host="127.0.0.1"\n    --spring.redis.port=6379\n    --spring.redis.password= \n    ... '),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("其他项目配置")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("arguments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ul",[a("li",[t._v("使用cmd，用cd命令转到"),a("code",[t._v("C:\\Deploy\\app")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("执行命令安装服务 "),a("code",[t._v("appService.exe install")]),t._v(" "),a("img",{attrs:{src:s(376),alt:"安装服务"}})])]),t._v(" "),a("li",[a("p",[t._v("查看系统服务\n"),a("img",{attrs:{src:s(377),alt:"系统服务"}})])]),t._v(" "),a("li",[a("p",[t._v("执行命令启动服务 "),a("code",[t._v("appService.exe start")]),t._v(" "),a("img",{attrs:{src:s(378),alt:"启动服务"}})])])])])]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v(":: 命令说明\n:: 安装服务命令\nappService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe install\n\n:: 卸载服务命令\nappService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe uninstall\n\n:: 启动服务命令\nappService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v("\n\n:: 停止服务命令\nappService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe stop\n\n:: 重新启动服务命令\nappService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe restart\n")])])]),a("h3",{attrs:{id:"_4-部署前端页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-部署前端页面"}},[t._v("#")]),t._v(" 4. 部署前端页面")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在 "),a("code",[t._v("C:\\Deploy\\app")]),t._v(" 下，创建文件夹 html")])]),t._v(" "),a("li",[a("p",[t._v("将前端构建后的文件放到 html 目录下")])]),t._v(" "),a("li",[a("p",[t._v("将nginx中配置 Location root，修改为 C:\\Deploy\\app\\html")])]),t._v(" "),a("li",[a("p",[t._v("启动 nginx")])])]),t._v(" "),a("h3",{attrs:{id:"_5-批处理脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-批处理脚本"}},[t._v("#")]),t._v(" 5. 批处理脚本")]),t._v(" "),a("ul",[a("li",[t._v("在 "),a("code",[t._v("C:\\Deploy\\app")]),t._v(" 下，创建 "),a("code",[t._v("deploy.bat")]),t._v("，内容如下")])]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v(":: 后端API\nC:\ncd C:\\Deploy\\app\nappService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe stop\ntimeout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("T 3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("NOBREAK\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jar\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),t._v(" new_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jar app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jar\nappService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v("\n\n:: 前端页面\n7z x view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rmdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s/q html\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),t._v(" dist html\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("del")]),t._v(" view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip\n")])])]),a("h2",{attrs:{id:"三-配置自动化部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-配置自动化部署"}},[t._v("#")]),t._v(" 三. 配置自动化部署")]),t._v(" "),a("p",[t._v("联系但丁，进行自动化部署配置")]),t._v(" "),a("h2",{attrs:{id:"四-常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-常见问题"}},[t._v("#")]),t._v(" 四. 常见问题")]),t._v(" "),a("h3",{attrs:{id:"_1-xml中的特殊字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-xml中的特殊字符"}},[t._v("#")]),t._v(" 1. xml中的特殊字符")]),t._v(" "),a("p",[t._v("创建（或启动）服务时，当xml中存在特殊字符时，会导致服务无法正常启动。需要将XML中的特殊字符进行转义。")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 错误 --\x3e")]),t._v("\njdbc:mysql://localhost:3306/mydb?characterEncoding=utf8&useSSL=false\n")])])]),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 正确 --\x3e")]),t._v("\njdbc:mysql://localhost:3306/mydb?characterEncoding=utf8"),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("useSSL=false\n")])])]),a("p",[t._v("XML转义字符:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("转义字符")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("符号")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("&amp;")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("&")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("和")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("&lt;")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("<")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("小于")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("&gt;")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(">")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("大于")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("&apos;")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("省略号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("&quot;")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("引号")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);