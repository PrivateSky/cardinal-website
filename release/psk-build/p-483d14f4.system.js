var __spreadArrays=this&&this.__spreadArrays||function(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),a=0,e=0;e<t;e++)for(var c=arguments[e],i=0,o=c.length;i<o;i++,a++)n[a]=c[i];return n};System.register(["./p-9e62ff0c.system.js"],(function(r){"use strict";var e;return{setters:[function(r){e=r.h}],execute:function(){var t=function(r,e){var t=new Map;var n=r;var a=function(r,e){if(Array.isArray(r)){__spreadArrays(r).forEach((function(r){e[r]=n[r]}))}else{e[r]=Object.assign({},n)}};var c=function(r,e){if(!t.has(r)){t.set(r,e);a(e,r)}return function(){if(t.has(r)){t.delete(r)}}};var i=function(r,e){var c=r.state;n=c;t.forEach(a);return e};var o=function(r,t){return e(c,t[0])};var s=function(r,e){var n=r.prototype;var a=n.connectedCallback;var i=n.disconnectedCallback;n.connectedCallback=function(){c(this,e);if(a){return a.call(this)}};n.disconnectedCallback=function(){t.delete(this);if(i){i.call(this)}}};return{Provider:i,Consumer:o,injectProps:s}};var n=r("A",t({historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:function(){}},(function(r,t){return e("context-consumer",{subscribe:r,renderer:t})})))}}}));