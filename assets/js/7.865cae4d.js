(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{327:function(t,e,n){},358:function(t,e,n){"use strict";n(327)},364:function(t,e,n){"use strict";n.r(e);var a={name:"SpecialLayout",components:{Navbar:n(331).a},props:{},data:function(){return{}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)}},watch:{},created:function(){},mounted:function(){},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)}}},s=(n(358),n(42)),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SpecialLayout"},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"top"},[n("div",{staticClass:"partners_header_content"},[n("h2",{},[n("Content",{attrs:{"slot-key":"title1"}})],1),t._v(" "),n("h5",[n("Content",{attrs:{"slot-key":"title2"}})],1)])])]),t._v(" "),n("div",[n("div",{staticClass:"title"},[n("Content",{attrs:{"slot-key":"img"}}),t._v(" "),n("Content",{attrs:{"slot-key":"text"}})],1),t._v(" "),n("div",{staticClass:"content"},[n("Content",{attrs:{"slot-key":"content"}})],1)]),t._v(" "),n("Content")],1)}),[],!1,null,"55884620",null);e.default=o.exports}}]);