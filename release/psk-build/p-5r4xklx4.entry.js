import{r as t,h as s,g as a}from"./p-c8677bac.js";const e=class{constructor(s){t(this,s),this.title="",this.componentCode=""}componentWillLoad(){this.componentCode=this.host.innerHTML,this.host.innerHTML=""}render(){return""===this.title.replace(/\s/g,"")?s("psk-card",null,s("pre",{class:"text-center code-tag"},s("code",{class:"language-html code-tag","data-lang":"html"},s("span",{class:"nt"},this.componentCode)))):s("psk-chapter",{title:this.title},s("pre",{class:"text-center code-tag"},s("code",{class:"language-html code-tag","data-lang":"html"},s("span",{class:"nt"},this.componentCode))))}get host(){return a(this)}};export{e as psk_tag};