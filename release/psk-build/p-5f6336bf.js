import{g as n,B as t}from"./p-4fa838bb.js";function o(){return o=>{t.cmpDidLoad=!0,t.cmpDidUnload=!0;const{componentDidLoad:e,componentDidUnload:s}=o;o.componentDidLoad=function(){const t=n(this);if(!t)return;let o=t.tagName.toLowerCase();if("undefined"!=typeof globalConfig&&"string"==typeof globalConfig.theme){let n="/assets/themes/"+globalConfig.theme+"/components/"+o+"/"+o+".css";var s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href",n),t.shadowRoot.prepend(s)}return e&&e.call(this)},o.componentDidUnload=function(){return s&&s.call(this)}}}export{o as C};