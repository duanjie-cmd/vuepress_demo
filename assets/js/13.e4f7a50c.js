(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{371:function(t,a,r){"use strict";r.r(a);var e=r(42),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"前端面试宝典-自用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端面试宝典-自用"}},[t._v("#")]),t._v(" 前端面试宝典(自用)")]),t._v(" "),r("my-button"),t._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("经过艰苦卓绝的面试历程，终于拿到了心仪的offer。期间总结了一些面试题供各位参考，涵盖面很广，并且面的都是知名大厂，所以这些题还是很有代表性的，都掌握以后一面基础面应该没什么问题，二面也能应付大半，奉上：")]),t._v(" "),r("h2",{attrs:{id:"css相关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css相关"}},[t._v("#")]),t._v(" css相关")]),t._v(" "),r("h3",{attrs:{id:"_1-万能居中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-万能居中"}},[t._v("#")]),t._v(" 1. 万能居中")]),t._v(" "),r("p",[t._v("1.margin: 0 auto;水平\n2.text-align: center;水平\n3.行高，垂直\n4.表格，center,middle；水平垂直\n5.display:table-cell；模拟表格，all\n6.绝对定位，50%减自身宽高\n7.绝对定位，上下左右全0，margin:auto\n8.绝对定位加相对定位。不需要知道宽高\n9.IE6，IE7：给父元素设一个font-size:高度/1.14,vertical-align:middle")]),t._v(" "),r("h3",{attrs:{id:"_2-bfc优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-bfc优化"}},[t._v("#")]),t._v(" 2. "),r("a",{attrs:{href:"https://www.jianshu.com/p/0d713b32cd0d",target:"_blank",rel:"noopener noreferrer"}},[t._v("BFC优化"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("块格式化上下文, 特性:")]),t._v(" "),r("ul",[r("li",[t._v("使 BFC 内部浮动元素不会到处乱跑（清除浮动）；")]),t._v(" "),r("li",[t._v("和浮动元素产生边界（在非浮动元素加margin）。")])]),t._v(" "),r("h3",{attrs:{id:"_3-盒模型哪两种模式-什么区别-如何设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-盒模型哪两种模式-什么区别-如何设置"}},[t._v("#")]),t._v(" 3. 盒模型哪两种模式？什么区别？如何设置")]),t._v(" "),r("ul",[r("li",[t._v("标准模式: box-sizing: content-box(默认); 宽高不包括内边距和边框")]),t._v(" "),r("li",[t._v("怪异模式: box-sizing: border-box")])]),t._v(" "),r("h3",{attrs:{id:"_4-常用清除浮动的方法-如不清除浮动会怎样"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用清除浮动的方法-如不清除浮动会怎样"}},[t._v("#")]),t._v(" 4. "),r("a",{attrs:{href:"https://blog.csdn.net/h_qingyi/article/details/81269667",target:"_blank",rel:"noopener noreferrer"}},[t._v("常用清除浮动的方法，如不清除浮动会怎样？"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("当父元素不给高度的时候，内部元素不浮动时会撑开, 而浮动的时候，父元素变成一条线, 造成塌陷.")]),t._v(" "),r("ul",[r("li",[t._v("额外标签法（在最后一个浮动标签后，新加一个标签，给其设置clear：both；）（不推荐）")]),t._v(" "),r("li",[t._v("父元素添加overflow:hidden; (触发BFC)")]),t._v(" "),r("li",[t._v("使用after伪元素清除浮动（推荐使用）")]),t._v(" "),r("li",[t._v("使用before和after双伪元素清除浮动")])]),t._v(" "),r("h3",{attrs:{id:"_5-删格化的原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-删格化的原理"}},[t._v("#")]),t._v(" 5. 删格化的原理")]),t._v(" "),r("p",[t._v("比如antd的row和col, 将一行等分为24份, col是几就占几份, 底层按百分比实现; 结合媒体查询, 可以实现响应式")]),t._v(" "),r("h3",{attrs:{id:"_6-纯css实现三角形"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-纯css实现三角形"}},[t._v("#")]),t._v(" 6. 纯css实现三角形")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("// 通过设置border\n.box\n        {\n            width:0px;\n            height:0px;\n\n            border-top:50px solid rgba(0,0,0,0);\n            border-right:50px solid  rgba(0,0,0,0);\n            border-bottom:50px solid green;\n            border-left:50px solid  rgba(0,0,0,0);\n            }\n")])])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);