import{r as t,c as s,h as e,g as i}from"./p-4fa838bb.js";const o=new class{constructor(){this.controllers={},this.pendingControllerRequests={}}registerController(t,s){this.controllers[t]=s,this._fullFillPreviousRequests(t)}_fullFillPreviousRequests(t){if(this.pendingControllerRequests[t])for(;this.pendingControllerRequests[t].length;)this.pendingControllerRequests[t].pop().resolve(this.controllers[t])}getController(t){return new Promise((s,e)=>{this.controllers[t]?s(this.controllers[t]):(this.pendingControllerRequests[t]||(this.pendingControllerRequests[t]=[]),this.pendingControllerRequests[t].push({resolve:s,reject:e}))})}},r=class{constructor(e){t(this,e),this.mobileLayout=!1,this.componentCode="",this.hasSlot=!1,this.controller?o.getController(this.controller).then(t=>{console.log(t),new t(this.host)}):console.log("No controller added to app-root"),this.routeChangedEvent=s(this,"routeChanged",7),this.cFReadyEvent=s(this,"ControllerFactoryIsReady",7)}checkLayout(){this.mobileLayout=document.documentElement.clientWidth<650}componentWillLoad(){this.cFReadyEvent.emit(o),this.checkLayout();let t=this.host.innerHTML;(t=t.replace(/\s/g,"")).length&&(this.hasSlot=!0)}render(){let t=[e("aside",null,e("psk-user-profile",null),e("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:650}),!1===this.mobileLayout?e("div",{class:"nav-footer"},"version 0.1"):null),e("section",null,e("psk-app-router",{failRedirectTo:"/home",historyType:this.historyType}),!0===this.mobileLayout?e("div",{class:"nav-footer bottom-stick"},"version 0.1"):null)];return e("div",{class:`global_container ${this.mobileLayout?"is-mobile":""}`},this.hasSlot?e("slot",null):t)}get host(){return i(this)}static get style(){return"div.global_container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;height:100%;background-color:#f8f9fc}div.global_container.is-mobile{width:100%;-ms-flex-direction:column;flex-direction:column}.is-mobile aside{width:100%;height:auto;overflow:inherit}aside{height:100%;background-color:#4e73df;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(10%,#4e73df),to(#224abe));background-image:linear-gradient(180deg,#4e73df 10%,#224abe);color:#fff;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-ms-flex-order:1;order:1;-ms-flex:1;flex:1;min-width:320px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:auto;scrollbar-color:#4e73df #e5e5e5;scrollbar-width:thin}.nav-footer{text-align:center;width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#142b86;font-size:85%}.nav-footer.bottom-stick{color:#fff;background:#224abe}section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden auto;scrollbar-color:#4e73df #e5e5e5;scrollbar-width:thin}app-menu,psk-app-router{-ms-flex-positive:1;flex-grow:1}psk-user-profile{-ms-flex-direction:column;flex-direction:column}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}section{-ms-flex-order:2;order:2;-ms-flex:8;flex:8}aside::-webkit-scrollbar,section::-webkit-scrollbar{background-color:#fff;width:8px}aside::-webkit-scrollbar-track,section::-webkit-scrollbar-track{background-color:#e5e5e5}aside::-webkit-scrollbar-thumb,section::-webkit-scrollbar-thumb{background-color:#4e73df;border-radius:8px;border:2px solid #fff}aside::-webkit-scrollbar-button{display:none}"}};export{r as psk_app_root};