import{j as _}from"./jsx-runtime-D_zvdyIk.js";const s=({label:o,size:g="normal",allCaps:L=!1,color:v,fontColor:x})=>_.jsx("span",{className:`${g} ${v} label`,style:{color:x},children:L?o.toUpperCase():o});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalize all letters",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Label color",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Font color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const h={title:"UI/labels/MyLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"All Caps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},l={args:{label:"Custom Color Label",fontColor:"#5517ac"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var u,p,i;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    allCaps: true
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,m,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,C,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: '#5517ac'
  }
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,q as __namedExportsOrder,h as default};
