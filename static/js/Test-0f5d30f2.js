var x=Object.defineProperty,y=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var u=(t,e,o)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e)=>{for(var o in e||(e={}))T.call(e,o)&&u(t,o,e[o]);if(c)for(var o of c(e))$.call(e,o)&&u(t,o,e[o]);return t},a=(t,e)=>y(t,I(e));import{T as b,U as h,l as i,W as V,X as k,Y as l,k as _,Z as B,o as N,v as R,O as p,P as m,w,Q as E,q as S,$ as q}from"./.pnpm-fc079078.js";import{_ as A}from"./index-515a9c06.js";const O=b("counter",()=>{const t=h(100),e=i(()=>t.value*2);return{count:t,doubleCount:e,increment:()=>t.value++,asyncIncrement:()=>{setTimeout(()=>{t.value+=1e3},1e3)}}});function P(){const t=l(),{proxy:e}=l(),o=V(),n=k();return{$this:t,proxy:e,router:o,route:n}}const Q={class:"Test-root"},U=p("h1",null,"test",-1),W=_({name:"Test"}),F=_(a(r({},W),{setup(t){const{proxy:e}=P();console.log(e.$utils),console.log(e.$api);const o=O();console.log("store",o);const{count:n,doubleCount:d}=B(o);console.log(n,d);const f=i(()=>o.doubleCount);console.log("doubleValue:",f.value);const{increment:X,asyncIncrement:C}=o;return(Y,s)=>{const g=A,v=q;return N(),R("main",Q,[U,p("section",null,[m(g,{onClick:s[0]||(s[0]=Z=>S(C)())},{default:w(()=>[E("asyncIncrement")]),_:1}),m(v,{placeholder:"请输入内容"})])])}}}));export{F as default};
