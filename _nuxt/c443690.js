(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{339:function(t,e,n){"use strict";n.r(e);var r=n(64),o=n(0),l={components:{BIcon:r.a,BIconInfoCircle:o.Do},data:function(){return{bank:null,bar:null,item:null}},computed:{smithing:function(){return this.$store.state.smithing},items:function(){var t=[];for(var i in this.smithing.items){var e=this.smithing.items[i],param=parseInt(this.smithing.startParam)+parseInt(i);this.bar&&param in this.bar.uniqueItems&&(e=this.bar.uniqueItems[param]),e&&t.push({text:e[0],value:{param:param,bars:e[1]}})}return t},firstAmount:function(){return this.item?Math.floor(27/this.item.bars)*this.item.bars:0}}},c=n(88),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-form-group",{attrs:{id:"bank-group",label:"Bank","label-for":"bank"}},[n("b-form-select",{attrs:{id:"bank",options:t.smithing.banks},scopedSlots:t._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("\n          -- Please select an option --\n        ")])]},proxy:!0}]),model:{value:t.bank,callback:function(e){t.bank=e},expression:"bank"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"bar-group",label:"Bar","label-for":"bar"}},[n("b-form-select",{attrs:{id:"bar",options:t.smithing.bars},scopedSlots:t._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("\n          -- Please select an option --\n        ")])]},proxy:!0}]),model:{value:t.bar,callback:function(e){t.bar=e},expression:"bar"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"item-group",label:"Item","label-for":"item"}},[n("b-form-select",{attrs:{id:"item",options:t.items},scopedSlots:t._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("\n          -- Please select an option --\n        ")])]},proxy:!0}]),model:{value:t.item,callback:function(e){t.item=e},expression:"item"}})],1),t._v(" "),n("b-card",{staticClass:"mb-3",attrs:{id:"general-config"},scopedSlots:t._u([{key:"header",fn:function(){return[n("h5",{staticClass:"mb-0"},[t._v("General Config")])]},proxy:!0}])},[t._v(" "),n("p",[t._v("Type: Use Item On Object")]),t._v(" "),n("p",[t._v("First Item ID: "+t._s(t.bar?t.bar.id:0))]),t._v(" "),n("p",[t._v("First Amount: "+t._s(t.firstAmount))]),t._v(" "),n("p",[t._v("Second Item ID: 0")]),t._v(" "),n("p",[t._v("Second Amount: 0")]),t._v(" "),n("p",[t._v("Object ID: "+t._s(t.bank?t.bank.obj:0))]),t._v(" "),n("p",[t._v("Use Placeholders: On")]),t._v(" "),n("p",[t._v("Placeholder ID: 2347")]),t._v(" "),n("p",[t._v("Placeholder ID: 0")]),t._v(" "),n("p",[t._v("Placeholder ID: 0")])]),t._v(" "),n("b-card",{staticClass:"mb-3",attrs:{id:"bank-config"},scopedSlots:t._u([{key:"header",fn:function(){return[n("h5",{staticClass:"mb-0"},[t._v("Bank Config")])]},proxy:!0}])},[t._v(" "),n("p",[t._v("Bank Type: "+t._s(t.bank?t.bank.type:"Npc"))]),t._v(" "),n("p",[t._v("Bank ID: "+t._s(t.bank?t.bank.id:0))]),t._v(" "),n("p",[t._v("Bank Op Code: "+t._s(t.bank?t.bank.opCode:0))])]),t._v(" "),n("b-card",{staticClass:"mb-3",attrs:{id:"menu-config"},scopedSlots:t._u([{key:"header",fn:function(){return[n("h5",{staticClass:"mb-0"},[t._v("Menu Config")])]},proxy:!0}])},[t._v(" "),n("p",[t._v("Menu OpCode: 57")]),t._v(" "),n("p",[t._v("Menu Param1: "+t._s(t.item?t.item.param:0))])]),t._v(" "),n("b-card",{staticClass:"mb-3",attrs:{id:"inv-config"},scopedSlots:t._u([{key:"header",fn:function(){return[n("h5",{staticClass:"mb-0"},[t._v("Inventory Config")])]},proxy:!0}])},[t._v(" "),n("p",[t._v("Inventory OpCode: 0")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);