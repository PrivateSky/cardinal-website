System.register(["./p-d5e63b2c.system.js"],(function(t){"use strict";var e,o,r,n;return{setters:[function(t){e=t.r;o=t.c;r=t.h;n=t.g}],execute:function(){var i=function(){function t(){this.controllers=[]}t.prototype.init=function(){console.log("inited")};t.prototype.registerController=function(t){this.controllers.push(t)};return t}();var s=new i;var l=650;var u=t("psk_app_root",function(){function t(t){e(this,t);this.mobileLayout=false;this.componentCode="";this.hasSlot=false;s.init();if(this.controller){var r=this.controller;console.log(r);new window[r](this.host)}else{console.log("No controller here")}this.routeChangedEvent=o(this,"routeChanged",7)}t.prototype.checkLayout=function(){this.mobileLayout=document.documentElement.clientWidth<l};t.prototype.componentWillLoad=function(){this.checkLayout();var t=this.host.innerHTML;t=t.replace(/\s/g,"");if(t.length){this.hasSlot=true}};t.prototype.render=function(){var t=[r("aside",null,r("psk-user-profile",null),r("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:l}),this.mobileLayout===false?r("div",{class:"nav-footer"},"version 0.1"):null),r("section",null,r("psk-app-router",{failRedirectTo:"/home",historyType:this.historyType}),this.mobileLayout===true?r("div",{class:"nav-footer bottom-stick"},"version 0.1"):null)];return r("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},this.hasSlot?r("slot",null):t)};Object.defineProperty(t.prototype,"host",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"div.global_container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;height:100%;background-color:#f8f9fc}div.global_container.is-mobile{width:100%;-ms-flex-direction:column;flex-direction:column}.is-mobile aside{width:100%;height:auto;overflow:inherit}aside{height:100%;background-color:#4e73df;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(10%,#4e73df),to(#224abe));background-image:linear-gradient(180deg,#4e73df 10%,#224abe);color:#fff;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-ms-flex-order:1;order:1;-ms-flex:1;flex:1;min-width:320px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:auto;scrollbar-color:#4e73df #e5e5e5;scrollbar-width:thin}.nav-footer{text-align:center;width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#142b86;font-size:85%}.nav-footer.bottom-stick{color:#fff;background:#224abe}section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden auto;scrollbar-color:#4e73df #e5e5e5;scrollbar-width:thin}app-menu,psk-app-router{-ms-flex-positive:1;flex-grow:1}psk-user-profile{-ms-flex-direction:column;flex-direction:column}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}section{-ms-flex-order:2;order:2;-ms-flex:8;flex:8}aside::-webkit-scrollbar,section::-webkit-scrollbar{background-color:#fff;width:8px}aside::-webkit-scrollbar-track,section::-webkit-scrollbar-track{background-color:#e5e5e5}aside::-webkit-scrollbar-thumb,section::-webkit-scrollbar-thumb{background-color:#4e73df;border-radius:8px;border:2px solid #fff}aside::-webkit-scrollbar-button{display:none}"},enumerable:true,configurable:true});return t}())}}}));