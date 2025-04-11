(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{482:function(a,s,t){"use strict";t.r(s);var e=t(14),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"deepseek教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deepseek教程"}},[a._v("#")]),a._v(" DeepSeek教程")]),a._v(" "),s("h2",{attrs:{id:"一-概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-概述"}},[a._v("#")]),a._v(" 一. 概述")]),a._v(" "),s("h2",{attrs:{id:"二-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-安装"}},[a._v("#")]),a._v(" 二. 安装")]),a._v(" "),s("p",[a._v("环境为虚拟机 Rocky9.5，使用 "),s("a",{attrs:{href:"https://ollama.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Ollama"),s("OutboundLink")],1),a._v(" 来安装 "),s("code",[a._v("deepseek-r1")]),a._v("。")]),a._v(" "),s("p",[a._v("配置：4C8G 50G")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("1.配置静态IP")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## vim vim /etc/NetworkManager/system-connections/enp160.nmconnection")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ipv4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("                                               \n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("method")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("manual\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("address")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".125.183/24,172.16.125.2               "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 修改IP，子网掩码；网关")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dns")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8.8")]),a._v(".8.8\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 重启网络服务")]),a._v("\nnmcli connection reload\nnmcli connection down enp160\nnmcli connection up enp160\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 测试")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ping")]),a._v(" baidu.com\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 查看IP")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ip")]),a._v(" a\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("安装基本工具")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("dnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" \ndnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" python3.9-pip \npip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" tldr\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("关闭SELINUX")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("grubby --update-kernel ALL "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--args")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("selinux")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 修改 /etc/selinux/config")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# SELINUX=enforcing")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SELINUX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("disabled\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 重启")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v("\n")])])])]),a._v(" "),s("h3",{attrs:{id:"_1-下载安装ollama"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装ollama"}},[a._v("#")]),a._v(" 1. 下载安装"),s("code",[a._v("Ollama")])]),a._v(" "),s("p",[a._v("(1) 运行 "),s("code",[a._v("curl -fsSL https://ollama.com/install.sh | sh")]),a._v(" 自动安装。")]),a._v(" "),s("p",[a._v("(2) 手动安装")]),a._v(" "),s("ul",[s("li",[a._v("根据系统下载对应的ollama，下载地址："),s("a",{attrs:{href:"https://github.com/ollama/ollama/releases"}},[a._v("https://github.com/ollama/ollama/releases")])]),a._v(" "),s("li",[a._v("安装步骤，参考"),s("a",{attrs:{href:"https://github.com/datawhalechina/handy-ollama/blob/main/docs/C2/3.%20Ollama%20%E5%9C%A8%20Linux%20%E4%B8%8B%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),s("OutboundLink")],1)])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" xvf ollama-linux-amd64.tgz "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--directory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/lib/ollama\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sf")]),a._v(" /usr/local/lib/ollama/bin/ollama /usr/local/bin/ollama\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 为 Ollama 创建用户和组")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" /bin/false "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-U")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" /usr/share/ollama ollama\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("usermod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-G")]),a._v(" ollama "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("whoami")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 在该位置：/etc/systemd/system/ollama.service 创建服务文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Ollama Service\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("After")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("network-online.target\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/bin/ollama serve\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ollama\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Group")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ollama\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RestartSec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Environment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PATH='),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Environment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OLLAMA_HOST=0.0.0.0"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Environment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OLLAMA_ORIGINS=*"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("default.target\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 启动服务")]),a._v("\nsystemctl daemon-reload\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" ollama\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 查看日志")]),a._v("\njournalctl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" ollama\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 本地可通过浏览器访问，防火墙开放端口 11434。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ss -tulnp | grep ollama ")]),a._v("\nhttp://172.16.125.183:11434\n")])])]),s("h3",{attrs:{id:"_3-部署deepseek-r1-1-5b"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-部署deepseek-r1-1-5b"}},[a._v("#")]),a._v(" 3. 部署deepseek-r1:1.5b")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ollama run deepseek-r1:1.5b\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 看到如下信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ollama run deepseek-r1:1.5b")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 你好\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("think"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/think"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n你好！很高兴见到你，有什么我可以帮忙的吗？无论是问题、建议还是闲聊，我都在这儿呢！😊\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /bye\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n")])])]),s("h3",{attrs:{id:"_4-安装open-webui-界面化访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装open-webui-界面化访问"}},[a._v("#")]),a._v(" 4. 安装open-webui 界面化访问")]),a._v(" "),s("blockquote",[s("blockquote",[s("p",[a._v("官方网站：https://docs.openwebui.com/")])])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("安装"),s("code",[a._v("Docker CE")])]),a._v(" "),s("p",[a._v("参考"),s("code",[a._v("https://www.rockylinux.cn/notes/zai-rocky-linux-9-1-shang-an-zhuang-docker-ce.html")])])])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加Docker Repo")]),a._v("\ndnf config-manager --add-repo"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://download.docker.com/linux/centos/docker-ce.repo\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新源")]),a._v("\ndnf update\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 在安装 Docker CE 的时候，会同步安装 docker-compose-plugin 插件")]),a._v("\ndnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" docker-ce\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 建议添加普通用户至Docker组，并以普通用户运行Docker")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("usermod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-aG")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 生效组用户变更配置")]),a._v("\nnewgrp "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动docker")]),a._v("\nsystemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开机启动")]),a._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("下载镜像并运行")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull ghcr.io/open-webui/open-webui:main\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 若 Ollama 运行在同一台服务器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8100")]),a._v(":8080 --add-host"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("host.docker.internal:host-gateway "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/open-webui:/app/backend/data "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" open-webui "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always ghcr.io/open-webui/open-webui:main\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 防火墙添加端口8100")]),a._v("\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11434")]),a._v("/tcp\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\n")])])]),s("h2",{attrs:{id:"五-参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五-参考资料"}},[a._v("#")]),a._v(" 五. 参考资料")]),a._v(" "),s("ul",[s("li",[a._v("https://deepseek.csdn.net/67bed5ff2e30c8639006e534.html")]),a._v(" "),s("li",[a._v("https://blog.csdn.net/soso678/article/details/145670623")]),a._v(" "),s("li",[a._v("https://docs.openwebui.com")])])])}),[],!1,null,null,null);s.default=n.exports}}]);