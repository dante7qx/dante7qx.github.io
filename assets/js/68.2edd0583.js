(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{471:function(t,v,_){"use strict";_.r(v);var e=_(14),i=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("在区块链中，电子钱包是用于管理和存储加密货币的数字钱包。它提供了一种安全的方式来保存私钥和公钥，并用于进行加密货币的交易和管理。")]),t._v(" "),v("p",[t._v("电子钱包通常包含以下组件：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("私钥（Private Key）：私钥是一串随机生成的密码，用于加密货币的所有权和访问权限。私钥需要保密，并且只有持有私钥的人才能对其拥有的加密货币进行操作。")])]),t._v(" "),v("li",[v("p",[t._v("公钥（Public Key）：公钥是由私钥生成的相关密码，用于加密货币的交易和身份验证。公钥可以公开，任何人都可以使用它来验证加密货币的所有权和验证交易。")])]),t._v(" "),v("li",[v("p",[t._v("地址（Address）：地址是由公钥生成的哈希值，用于标识电子钱包和接收加密货币的地方。用户可以向其他用户提供地址，以便接收加密货币。")])]),t._v(" "),v("li",[v("p",[t._v("余额（Balance）：余额指的是电子钱包中的加密货币数量。通过区块链网络，可以根据地址和交易记录计算出电子钱包的余额。")])]),t._v(" "),v("li",[v("p",[t._v("交易记录（Transaction History）：交易记录是电子钱包中发生的所有加密货币交易的历史记录。它包含了交易的发起方、接收方、金额和时间戳等信息。")])])]),t._v(" "),v("p",[t._v("电子钱包可以通过不同的方式来实现，包括：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("软件钱包（Software Wallet）：这种钱包是在计算机或移动设备上安装的软件应用程序。它可以生成和存储私钥，并提供交易功能和余额查询等功能。")])]),t._v(" "),v("li",[v("p",[t._v("硬件钱包（Hardware Wallet）：硬件钱包是一种专门设计的硬件设备，用于安全地存储私钥。它通常与计算机或移动设备进行连接，并通过密码或身份验证来授权交易。")])]),t._v(" "),v("li",[v("p",[t._v("在线钱包（Online Wallet）：在线钱包是存储在互联网上的电子钱包。它可以通过网页浏览器访问，并提供交易功能和余额查询。然而，使用在线钱包需要注意安全风险，因为私钥可能会存储在互联网上的服务器上。")])]),t._v(" "),v("li",[v("p",[t._v("纸钱包（Paper Wallet）：纸钱包是将私钥和公钥打印在纸上的形式。它可以作为离线存储的备份，提供更高的安全性。纸钱包需要妥善保管，防止丢失或被他人获取。")])]),t._v(" "),v("li",[v("p",[t._v("脑钱包（Brain Wallet）：是指把私钥记在自己脑袋里。")])])]),t._v(" "),v("h2",{attrs:{id:"一-hd-钱包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一-hd-钱包"}},[t._v("#")]),t._v(" 一. HD 钱包")]),t._v(" "),v("p",[t._v("在比特币的链上，实际上并没有账户的概念，某个用户持有的比特币，实际上是其控制的一组UTXO，而这些UTXO可能是相同的地址（对应相同的私钥），也可能是不同的地址（对应不同的私钥）。")]),t._v(" "),v("p",[t._v("出于保护隐私的目的，同一用户如果控制的UTXO其地址都是不同的，那么很难从地址获知某个用户的比特币持币总额。但是，管理一组成千上万的地址，意味着管理成千上万的私钥，管理起来非常麻烦。")]),t._v(" "),v("p",[v("strong",[t._v("HD 钱包（Hierarchical Deterministic，分层次确定性）")])]),t._v(" "),v("p",[t._v("根据某种确定性算法，只需要管理一个根私钥，即可实时计算所有“子私钥（扩展私钥）”的管理方式。“子私钥” 可以计算出扩展公钥，扩展公钥可以直接计算其子层级扩展公钥。")]),t._v(" "),v("p",[v("strong",[t._v("助记词")])]),t._v(" "),v("p",[t._v("要创建一个HD钱包，我们必须首先有一个确定的512bit（64字节）的随机数种子。如果用电脑生成一个64字节的随机数作为种子当然是可以的，但是恐怕谁也记不住。")]),t._v(" "),v("p",[t._v("为了解决初始化种子的易用性问题，"),v("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP-39"),v("OutboundLink")],1),t._v("规范提出了一种通过助记词来推算种子的算法，用户只需记忆助记词和口令即可随时恢复HD钱包。")]),t._v(" "),v("p",[t._v("助记词和重要，如果没有助记词，那就几乎无法恢复损失的资金。")])])}),[],!1,null,null,null);v.default=i.exports}}]);