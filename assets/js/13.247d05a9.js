(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{384:function(t,_,a){t.exports=a.p+"assets/img/sonarqube.a2f723c4.png"},385:function(t,_,a){t.exports=a.p+"assets/img/sonarresult.6b490a3a.png"},386:function(t,_,a){t.exports=a.p+"assets/img/editBug.d96b45c8.png"},464:function(t,_,a){"use strict";a.r(_);var v=a(14),s=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"一-概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一-概述"}},[t._v("#")]),t._v(" 一. 概述")]),t._v(" "),_("p",[t._v("静态代码扫描是一种软件质量保证的方法，它可以在不运行程序的情况下，通过分析源代码的结构、语法、逻辑等方面，检测代码中可能存在的缺陷、漏洞、风险或不符合规范的地方。静态代码扫描可以提高代码的可读性、可维护性、可测试性和安全性，同时也可以减少后期的调试和修复成本。")]),t._v(" "),_("p",[t._v("静态代码扫描有很多种工具，我们这里使用 "),_("a",{attrs:{href:"https://docs.sonarqube.org/9.9",target:"_blank",rel:"noopener noreferrer"}},[t._v("SonarQube"),_("OutboundLink")],1),t._v("。")]),t._v(" "),_("img",{staticStyle:{zoom:"70%"},attrs:{src:a(384),alt:"sonarqube"}}),t._v(" "),_("h2",{attrs:{id:"二-使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二-使用"}},[t._v("#")]),t._v(" 二. 使用")]),t._v(" "),_("h3",{attrs:{id:"_1-访问地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-访问地址"}},[t._v("#")]),t._v(" 1. 访问地址")]),t._v(" "),_("p",[t._v("地址："),_("a",{attrs:{href:"http://doc.risun-tec.cn:9104",target:"_blank"}},[t._v("http://doc.risun-tec.cn:9104")]),t._v("，帐号信息：在微信群Java部群公告中获取。")]),t._v(" "),_("h3",{attrs:{id:"_2-检测指标说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-检测指标说明"}},[t._v("#")]),t._v(" 2. 检测指标说明")]),t._v(" "),_("img",{staticStyle:{zoom:"70%"},attrs:{src:a(385),alt:"sonarresult"}}),t._v(" "),_("ul",[_("li",[_("p",[t._v("严重程度")]),t._v(" "),_("ul",[_("li",[t._v("阻断：很严重错误，必须修复的")]),t._v(" "),_("li",[t._v("严重：可能会影响程序，需要审查")]),t._v(" "),_("li",[t._v("主要：界面、性能缺陷、兼容性")]),t._v(" "),_("li",[t._v("次要：易用性及建议性问题")]),t._v(" "),_("li",[t._v("提示：需要关注，也可以忽略")])])]),t._v(" "),_("li",[_("p",[t._v("可靠性：也就是bug，可靠性等级为ABCDE，bug一般指的是明显的错误")]),t._v(" "),_("ul",[_("li",[t._v("A 表示代码无bug")]),t._v(" "),_("li",[t._v("B 代码有一个次要bug")]),t._v(" "),_("li",[t._v("C 包含一个重要bug")]),t._v(" "),_("li",[t._v("D 有一个严重bug")]),t._v(" "),_("li",[t._v("E 有一个最高等级的阻断级别的bug")])])]),t._v(" "),_("li",[_("p",[t._v("安全性：也就是安全漏洞，等级也分为ABCDE")]),t._v(" "),_("ul",[_("li",[t._v("A 为没有漏洞")]),t._v(" "),_("li",[t._v("B 为只要包含一个次要漏洞")]),t._v(" "),_("li",[t._v("C 为只要包含一个重要漏洞")]),t._v(" "),_("li",[t._v("D 只要包含一个严重漏洞")]),t._v(" "),_("li",[t._v("E 只要包含一个阻断漏洞")])])]),t._v(" "),_("li",[_("p",[t._v("安全审查：安全敏感代码，需要手工审核，以便判断是否存在安全漏洞")])]),t._v(" "),_("li",[_("p",[t._v("技术债：是编程及软件工程中的一个比喻。指开发人员为了加速软件开发，在应该采用最佳方案时进行了妥协，改用了短期内能加速软件开发的方案，从而在未来给自己带来的额外开发负担。")])]),t._v(" "),_("li",[_("p",[t._v("代码覆盖率：单元测试覆盖率")])]),t._v(" "),_("li",[_("p",[t._v("代码重复率：Sonar并不能完全统计出真实的重复率，所以要根据实际情况判断。")])])]),t._v(" "),_("h2",{attrs:{id:"三-项目说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三-项目说明"}},[t._v("#")]),t._v(" 三. 项目说明")]),t._v(" "),_("h3",{attrs:{id:"_1-研发负责人"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-研发负责人"}},[t._v("#")]),t._v(" 1. 研发负责人")]),t._v(" "),_("p",[t._v("项目研发负责人需要对扫描结果进行管理，确保项目无漏洞、无Bug、无安全隐患。")]),t._v(" "),_("h3",{attrs:{id:"_2-质量配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-质量配置"}},[t._v("#")]),t._v(" 2. 质量配置")]),t._v(" "),_("p",[t._v("并不是Sonar扫描出的问题都需要修改，有两种情况：")]),t._v(" "),_("p",[t._v("(1) 问题存在，但被扫描的项目研发负责人认为无需修改，可以编辑问题，排除问题。")]),t._v(" "),_("img",{staticStyle:{zoom:"70%"},attrs:{src:a(386),alt:"editBug"}}),t._v(" "),_("p",[t._v("(2) 某些代码规则不适用于我们项目，可以统一排除这些规则。")]),t._v(" "),_("p",[t._v("对于这种情况，项目研发负责人联系我，我会和部门技术负责人研判，来决定是否全局排除。")])])}),[],!1,null,null,null);_.default=s.exports}}]);