System.register(["./p-0b2166d8.system.js","./p-fa24dcca.system.js"],(function(e){"use strict";var n,t,r;return{setters:[function(e){n=e.r;t=e.h},function(e){r=e.C}],execute:function(){var a=undefined&&undefined.__decorate||function(e,n,t,r){var a=arguments.length,i=a<3?n:r===null?r=Object.getOwnPropertyDescriptor(n,t):r,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,n,t,r);else for(var s=e.length-1;s>=0;s--)if(c=e[s])i=(a<3?c(i):a>3?c(n,t,i):c(n,t))||i;return a>3&&i&&Object.defineProperty(n,t,i),i};var i=e("sidebar_renderer",function(){function e(e){n(this,e)}e.prototype.renderMenuItem=function(e){var n=this;var r=e.path;var a=[];if(e.children){e.children.forEach((function(e){a.push(n.renderMenuItem(e))}))}var i=e.type==="abstract"?"expandable-renderer":"stencil-route-link";return t(i,{firstMenuChild:e.children?e.children[0]:"",url:r,activeClass:"active",exact:false,somethingChanged:this.value},t("div",{class:"wrapper_container"},t("div",{class:"item_container"},t("span",{class:"icon fa "+e.icon}),e.children?t("span",{class:"item_name"},e.name):t("span",{class:"item_name"},e.name),e.children?t("span",{class:"fa fa-caret-right expand-menu"}):null),e.children?t("div",{class:"children"},a):null))};e.prototype.render=function(){return this.renderMenuItem(this.value)};return e}());a([r()],i.prototype,"value",void 0)}}}));