import{r as e,h as t}from"./p-a1b3783e.js";import"./p-86d7a324.js";import"./p-50fde516.js";import{T as s}from"./p-9ba64865.js";import{C as r}from"./p-65e1f0af.js";var i=function(e,t,s,r){var i,p=arguments.length,a=p<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(p<3?i(a):p>3?i(t,s,a):i(t,s))||a);return p>3&&a&&Object.defineProperty(t,s,a),a};const p=class{constructor(t){e(this,t)}computeStepDesign(e,t,s){let r="";return 0===e?r+="first ":e===s&&(r+="last "),e<t?r+="done":e===t&&(r+="current"),r}render(){return t("div",{class:"steps clearfix"},t("ul",{role:"tablist"},this.wizardSteps.map(e=>t("li",{role:"tab",class:this.computeStepDesign(e.stepIndex,this.activeStep.stepIndex,this.wizardSteps.length-1)},t("div",{class:"button",onClick:t=>{t.preventDefault(),t.stopImmediatePropagation(),this.handleStepChange(e.stepIndex)}},t("span",{class:"current-info audible"}),t("div",{class:"title"},t("p",{class:"step-icon"},t("span",null,e.stepIndex+1)),t("div",{class:"step-text"},t("span",{class:"step-inner"},e.stepName))))))))}};i([r(),s({description:"This property holds an array of:\n            wizard configuration\n            the names of the steps\n            the components that will be displayed\n            other properties, like informations for the steps.(optional).",isMandatory:!1,propertyType:"array fo WizardStep items(WizardStep[])",defaultValue:"psk-stepper-renderer"})],p.prototype,"wizardSteps",void 0),i([s({description:"The WizardStep created by psk-wizard and passed on by psk-stepper.",isMandatory:!0,propertyType:"WizardStep"})],p.prototype,"activeStep",void 0),i([s({description:"This property is a function that modifies the way the step change is interpreted.",isMandatory:!0,propertyType:"Function"})],p.prototype,"handleStepChange",void 0);export{p as psk_stepper_renderer};