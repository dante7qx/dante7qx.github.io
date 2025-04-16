(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{477:function(t,r,e){"use strict";e.r(r);var a=e(14),n=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"一-概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-概述"}},[t._v("#")]),t._v(" 一.概述")]),t._v(" "),r("p",[t._v("智能合约是一个运行在以太坊链上的一个程序。 它是位于以太坊区块链上一个特定地址的一系列代码（函数）和数据（状态）。")]),t._v(" "),r("ul",[r("li",[t._v("智能合约的代码写完后，要编译成bytecode")]),t._v(" "),r("li",[t._v("创建合约：外部帐户发起一个转账交易到0x0的地址\n"),r("ul",[r("li",[t._v("转账的金额是0，但要支付Gas")]),t._v(" "),r("li",[t._v("合约的代码放在 data 域里")])])]),t._v(" "),r("li",[t._v("智能合约运行在EVM（256位 Ethereum Virtual Machine）上，EVM保证相同的操作将返回相同的输出，而不管它们实际运行的计算机")]),t._v(" "),r("li",[t._v("以太坊是一个交易驱动的状态机\n"),r("ul",[r("li",[t._v("调用智能合约的交易发布到区块链上后，每个验证者都会执行这个交易，从当前状态确定性地转移到下一个状态")])])])]),t._v(" "),r("h2",{attrs:{id:"二-研发语言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-研发语言"}},[t._v("#")]),t._v(" 二.研发语言")]),t._v(" "),r("p",[t._v("智能合约的研发语言，最主流的一共有四种"),r("a",{attrs:{href:"https://docs.soliditylang.org/zh/v0.8.16/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Solidity"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://docs.vyperlang.org/en/stable/toctree.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vyper"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://huff.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Huff"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://docs.soliditylang.org/zh/latest/yul.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yul"),r("OutboundLink")],1)]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("Solidity:")]),t._v(" Solidity 是一种面向对象的编程语言，用于在以太坊和其他区块链上来编写智能合约。最流行87%，类似于 JavaScript。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Vyper:")]),t._v(" Vyper 是一种面向合约的类似于 Python 的编程语言，也是为 EVM 设计的。 Vyper 增强了可读性，并且限制了某些用法，从而改进了 Solidity。理论上，Vyper 提升了智能合约的安全性和可审计性。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Huff:")]),t._v(" 一种类似于汇编的底层语言。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Yul:")]),t._v(" 一种类似于汇编的底层语言，内置于 Solidity。")])])]),t._v(" "),r("p",[t._v("推荐选择 "),r("code",[t._v("Solidity")]),t._v("，查看"),r("a",{attrs:{href:"https://blog.chain.link/solidity-vs-vyper-zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("对比文章"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"三-研发框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三-研发框架"}},[t._v("#")]),t._v(" 三.研发框架")]),t._v(" "),r("p",[t._v("智能合约的开发框架非常多，这里选择"),r("a",{attrs:{href:"https://hardhat.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HardHat"),r("OutboundLink")],1),t._v("。它提供了一套工具和实用程序，可以更轻松地在以太坊网络上编译、测试和部署智能合约。借助 Hardhat，开发人员可以使用以太坊最流行的编程语言 Solidity 编写智能合约，并利用自动合约测试、合约调试等高级功能，以及与 VSCode 和 Truffle 等流行开发工具的集成。")]),t._v(" "),r("h2",{attrs:{id:"四-oracles预言机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四-oracles预言机"}},[t._v("#")]),t._v(" 四.Oracles预言机")]),t._v(" "),r("p",[t._v("Oracles（预言机）是指将现实世界中的数据和事件引入区块链的中介机构。在区块链中，智能合约通常只能访问和操作区块链上的数据，无法直接获取外部的信息。预言机的作用是将外部数据引入区块链，使智能合约能够基于这些数据做出决策和执行操作。")]),t._v(" "),r("p",[t._v("预言机在区块链世界中充当数据源的角色，它们从外部数据源（如API、传感器、其他区块链等）获取数据，并将其提供给智能合约。预言机还负责验证和验证数据的可信度，以确保数据的完整性和可靠性。验证的过程可以包括数字签名、数据加密、多方签名等技术手段。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://zh.chain.link",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chainlink"),r("OutboundLink")],1),t._v("是一个开源的、分散化的预言机网络，旨在解决智能合约与现实世界数据的连接问题。Chainlink 提供了一种可靠、安全的方式，使智能合约能够与外部数据源进行交互。它通过将多个预言机节点连接起来，建立起一个可信任的数据桥梁。")]),t._v(" "),r("p",[t._v("Chainlink 的设计目标是提供高度安全和高度可扩展的预言机解决方案。它使用Chainlink节点来获取和验证外部数据，并将其传递给智能合约。Chainlink节点之间的通信和数据传输是通过链链接协议进行的，以确保数据的可信度和一致性。")]),t._v(" "),r("p",[t._v("Chainlink 的核心理念是去中心化，它通过使用多个预言机节点和分散化的数据源来降低单点故障的风险，并提供更可靠的数据服务。它还提供了一套工具和协议，使开发者能够轻松地集成Chainlink预言机网络到他们的智能合约中。")]),t._v(" "),r("h2",{attrs:{id:"五-以太坊网络"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五-以太坊网络"}},[t._v("#")]),t._v(" 五. 以太坊网络")]),t._v(" "),r("p",[t._v("以太坊网络主要分为Mainnet(主网)、Testnet（测试网）、Private Network（私有网络）、Sidechain 和 Layer 2 网络。")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("主网（Mainnet）")]),t._v('：以太坊的主要网络，也被称为 "生产网络"。在主网上进行的交易和合约部署是真实的，需要使用真实的以太币（ETH）进行支付。')])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("测试网络（Testnet）")]),t._v("：以太坊的测试网络，用于开发和测试智能合约和 DApp。测试网络上的以太币是模拟的，没有真实价值。常见的测试网络包括 Ropsten、Kovan、Rinkeby 等。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("私有网络（Private Network）")]),t._v("：私有网络是在本地或私有环境中搭建的以太坊网络。它允许开发人员和组织在受控的环境中进行开发和测试，而不会干扰到公共网络。")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Sidechain 和 Layer 2 网络")]),t._v("：这些网络是建立在以太坊主网之外的扩展网络，旨在提高交易吞吐量和降低费用。它们使用不同的共识机制或扩展技术来实现更高的性能和可扩展性。")])])])])}),[],!1,null,null,null);r.default=n.exports}}]);