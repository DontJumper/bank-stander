(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{335:function(t,n,e){"use strict";e.r(n);e(29),e(249);var o={data:function(){return{item:null,bank:null}},computed:{items:function(){var t=this;return Object.entries(this.$store.state.glassblowing.items).map((function(n){return{text:n[1],value:parseInt(t.$store.state.glassblowing.startParam)+parseInt(n[0])}}))},first:function(){return this.$store.state.glassblowing.moltenGlass},second:function(){return 0},firstAmount:function(){return 27},secondAmount:function(){return 0},tool:function(){return this.$store.state.glassblowing.pipe},object:function(){return this.bank?this.bank.obj:0},placeholder:function(){return this.item?this.item.mould:0},param:function(){return this.item?this.item:0}},methods:{}},r=e(88),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("b-form-group",{attrs:{id:"bank-group",label:"Bank","label-for":"bank"}},[e("b-form-select",{attrs:{id:"bank",options:t.$store.state.banks},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("\n          -- Please select an option --\n        ")])]},proxy:!0}]),model:{value:t.bank,callback:function(n){t.bank=n},expression:"bank"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"item-group",label:"Item","label-for":"item"}},[e("b-form-select",{attrs:{id:"item",options:t.items},scopedSlots:t._u([{key:"first",fn:function(){return[e("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("\n          -- Please select an option --\n        ")])]},proxy:!0}]),model:{value:t.item,callback:function(n){t.item=n},expression:"item"}})],1),t._v(" "),e("b-card",{staticClass:"mb-3",attrs:{id:"general-config"},scopedSlots:t._u([{key:"header",fn:function(){return[e("h5",{staticClass:"mb-0"},[t._v("General Config")])]},proxy:!0}])},[t._v(" "),e("p",[t._v("Type: Use Tool On Item")]),t._v(" "),e("p",[t._v("First Item ID: "+t._s(t.first))]),t._v(" "),e("p",[t._v("First Amount: "+t._s(t.firstAmount))]),t._v(" "),e("p",[t._v("Use Placeholders: Off")]),t._v(" "),e("p",[t._v("Tool ID: "+t._s(t.tool))])]),t._v(" "),e("b-card",{staticClass:"mb-3",attrs:{id:"bank-config"},scopedSlots:t._u([{key:"header",fn:function(){return[e("h5",{staticClass:"mb-0"},[t._v("Bank Config")])]},proxy:!0}])},[t._v(" "),e("p",[t._v("Bank Type: "+t._s(t.bank?t.bank.type:"Npc"))]),t._v(" "),e("p",[t._v("Bank ID: "+t._s(t.bank?t.bank.id:0))]),t._v(" "),e("p",[t._v("Bank Op Code: "+t._s(t.bank?t.bank.opCode:0))])]),t._v(" "),e("b-card",{staticClass:"mb-3",attrs:{id:"menu-config"},scopedSlots:t._u([{key:"header",fn:function(){return[e("h5",{staticClass:"mb-0"},[t._v("Menu Config")])]},proxy:!0}])},[t._v(" "),e("p",[t._v("Menu OpCode: 57")]),t._v(" "),e("p",[t._v("Menu Param1: "+t._s(t.param))]),t._v(" "),e("p",[t._v("Left Click Object: On")])]),t._v(" "),e("b-card",{staticClass:"mb-3",attrs:{id:"inv-config"},scopedSlots:t._u([{key:"header",fn:function(){return[e("h5",{staticClass:"mb-0"},[t._v("Inventory Config")])]},proxy:!0}])},[t._v(" "),e("p",[t._v("Inventory OpCode: 0")])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);