(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{393:function(a,t,s){a.exports=s.p+"assets/img/block-chain.021167a8.png"},394:function(a,t,s){a.exports=s.p+"assets/img/tamper.04be5885.png"},467:function(a,t,s){"use strict";s.r(t);var _=s(14),v=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("区块链就是一个不断增长的全网总帐本，每个完整节点都拥有完整的区块链，并且，节点总是信任最长的区块链，伪造区块链需要拥有超过51%的全网算力。")]),a._v(" "),t("h2",{attrs:{id:"一-区块链结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-区块链结构"}},[a._v("#")]),a._v(" 一. 区块链结构")]),a._v(" "),t("p",[a._v("区块链是由一个一个区块构成的有序链表，每一个区块都记录了一系列交易，并且，每个区块都指向前一个区块，从而形成一个链条。")]),a._v(" "),t("p",[t("img",{attrs:{src:s(393),alt:"block-chain"}})]),a._v(" "),t("h2",{attrs:{id:"二-区块结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-区块结构"}},[a._v("#")]),a._v(" 二. 区块结构")]),a._v(" "),t("p",[a._v("每个区块都是由头部（Header）和体（Body）构成的，区块哈希(Block Hash) 是一个区块的唯一标识。")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("区块哈希")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Block Hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Hash256")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("区块头"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"_1-区块头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-区块头"}},[a._v("#")]),a._v(" 1. 区块头")]),a._v(" "),t("p",[a._v("区块头中一般包含："),t("code",[a._v("上一个区块哈希（Prev Block Hash）")]),a._v("，"),t("code",[a._v("区块体哈希（Merkle Hash）")]),a._v("，当前时间戳、其他信息（版本Version、目标难度Bits、Nonce等）")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("上一个区块哈希（Prev Block Hash）")])]),a._v(" "),t("p",[a._v("链中，当前区块的上一个区块的区块哈希（Block Chain）。通过 Prev Block Hash 来追踪到上一个区块，进而构成整个区块链。")]),a._v(" "),t("p",[a._v("区块链的第一个区块（又称创世区块）并没有上一个区块。因此，它的Prev Hash被设置为00000000...000。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("区块体哈希（Merkle Hash）")])]),a._v(" "),t("p",[a._v("通过 "),t("code",[a._v("Merkle Hash")]),a._v(" 算法，对区块体中的交易记录进行哈希计算，生成的哈希值。")])])]),a._v(" "),t("h3",{attrs:{id:"_2-区块体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-区块体"}},[a._v("#")]),a._v(" 2. 区块体")]),a._v(" "),t("p",[a._v("区块体中存放的是整个链上的所有交易记录，参与交易的主体都是匿名的。")]),a._v(" "),t("p",[a._v("交易主体持有私钥，发起交易时，会向整个区块链进行广播，广播的内容一般是公钥、地址以及交易信息的签名。其他交易主体通过公钥对交易消息进行验证。")]),a._v(" "),t("h2",{attrs:{id:"三-安全性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-安全性"}},[a._v("#")]),a._v(" 三. 安全性")]),a._v(" "),t("h3",{attrs:{id:"_1-交易消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-交易消息"}},[a._v("#")]),a._v(" 1. 交易消息")]),a._v(" "),t("p",[a._v("通过私钥可以对消息进行签名，签名可以保证消息防伪造，防篡改，防抵赖。")]),a._v(" "),t("ul",[t("li",[a._v("签名不可伪造，因为私钥只有签名人自己知道，所以其他人无法伪造签名；")]),a._v(" "),t("li",[a._v("消息不可篡改，如果原始消息被人篡改了，对签名进行验证将失败；")]),a._v(" "),t("li",[a._v("签名不可抵赖，如果对签名进行验证通过了，签名人不能抵赖自己曾经发过这一条消息。")])]),a._v(" "),t("h3",{attrs:{id:"_2-交易的可靠性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-交易的可靠性"}},[a._v("#")]),a._v(" 2. 交易的可靠性")]),a._v(" "),t("p",[a._v("举例来说，小张要给小明1万块钱（数字货币），这笔交易要完成，有两个前提条件：")]),a._v(" "),t("ol",[t("li",[a._v("这笔交易真是小张发出的")]),a._v(" "),t("li",[a._v("小张真的有1万块钱（数字货币）")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("前提一，通过数字签名就可以验证这个声明是否是小张做的，并且，一旦验证通过，小张是无法抵赖的。")])]),a._v(" "),t("li",[t("p",[a._v("前提二，任何人都可以从区块链查询到任意公钥对应的比特币余额，因为任何人都有整个区块链的完整交易记录。这样就可以验证小张是否真的有交易1万块钱（数字货币）的能力。")])])]),a._v(" "),t("p",[t("strong",[a._v("总结：")])]),a._v(" "),t("ul",[t("li",[a._v("私钥是花费比特币的唯一手段")]),a._v(" "),t("li",[a._v("所有交易被记录在区块链中，可以通过公钥查询所有交易信息")])]),a._v(" "),t("h3",{attrs:{id:"_3-篡改链上交易"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-篡改链上交易"}},[a._v("#")]),a._v(" 3. 篡改链上交易")]),a._v(" "),t("p",[a._v("最长链原则，拥有超过51%的全网算力才能篡改记录。")]),a._v(" "),t("p",[t("img",{attrs:{src:s(394),alt:"tamper"}})])])}),[],!1,null,null,null);t.default=v.exports}}]);