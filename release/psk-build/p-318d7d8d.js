import{g as e}from"./p-c8677bac.js";import{D as t,a as r}from"./p-9ac0ec57.js";import{c as s}from"./p-e3254b79.js";function c(c){return function(i,n){const{connectedCallback:o,render:p}=i;i.connectedCallback=function(){let s=this;if(e(s).hasAttribute(t)){if(!s.componentDefinitions)return s.componentDefinitions={definedProperties:[Object.assign(Object.assign({},c),{propertyName:String(n)})]},o&&o.call(s);let e=s.componentDefinitions;const t=Object.assign(Object.assign({},c),{propertyName:String(n)});if(e&&e.hasOwnProperty(r)){let s=[...e[r]];s.push(t),e[r]=[...s]}else e[r]=[t];s.componentDefinitions=Object.assign({},e)}return o&&o.call(s)},i.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[r])return p&&p.call(this);let e=this.componentDefinitions[r];e&&(e=e.reverse()),s("psk-send-props",{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{c as T};