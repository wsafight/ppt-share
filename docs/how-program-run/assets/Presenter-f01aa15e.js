import{o as d,f as k,g as e,B as S,C as z,v as h,d as M,i as B,a as D,D as y,x as v,E as P,_ as H,G as I,H as R,c as C,b as U,I as $,J as A,K as E,L,M as q,N as F,O,P as W,Q as Z,h as r,m as u,t as j,n as x,R as N,S as V,p as G,T as J,U as w,V as K,F as Q,W as X,X as Y,w as ee,Y as te,Z as se,q as T,$ as oe,a0 as ae,a1 as le,a2 as ne,k as re,a3 as ie,a4 as ce}from"./index-b0f1b6dd.js";import{N as ue}from"./NoteDisplay-2f672cd6.js";import de from"./DrawingControls-74307f05.js";const pe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[_e];function ve(o,l){return d(),k("svg",pe,me)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function Se(o,l){return d(),k("svg",fe,we)}const ye={name:"carbon-time",render:Se},ke="/ppt-share/how-program-run/assets/logo-title-horizontal-96c3c915.png";function be(){const o=S(Date.now()),l=z({interval:1e3}),p=h(()=>{const t=(l.value-o.value)/1e3,a=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${a}`});function _(){o.value=l.value}return{timer:p,resetTimer:_}}const Ce=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const l=o;B(D);const p=h(()=>{var t,a,s;return(s=(a=(t=y.value)==null?void 0:t.meta)==null?void 0:a.slide)==null?void 0:s.note}),_=h(()=>{var t,a,s;return(s=(a=(t=y.value)==null?void 0:t.meta)==null?void 0:a.slide)==null?void 0:s.noteHTML});return(t,a)=>(d(),v(ue,{class:P(l.class),note:p.value,"note-html":_.value},null,8,["class","note","note-html"]))}}),$e=H(Ce,[["__file","/Users/wangshian/Desktop/re-search/ppt-share/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(X("data-v-62249bea"),o=o(),Y(),o),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),De={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Pe=f(()=>e("div",{class:"context"}," current ",-1)),He=f(()=>e("div",{class:"context"}," next ",-1)),ze={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},Re={class:"progress-bar"},Ue=M({__name:"Presenter",setup(o){B(D);const l=S();I(),R(l);const p=C.titleTemplate.replace("%s",C.title||"Slidev");U({title:`Presenter - ${p}`});const{timer:_,resetTimer:t}=be(),a=S([]),s=h(()=>$.value<A.value?{route:y.value,clicks:$.value+1}:E.value?{route:L.value,clicks:0}:null);return q(()=>{const b=l.value.querySelector("#slide-content"),i=F(O()),g=W();Z(()=>{if(!g.value||te.value||!se.value)return;const c=b.getBoundingClientRect(),n=(i.x-c.left)/c.width*100,m=(i.y-c.top)/c.height*100;if(!(n<0||n>100||m<0||m>100))return{x:n,y:m}},c=>{ee.cursor=c})}),(b,i)=>{const g=ye,c=he;return d(),k(Q,null,[e("div",Ne,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...n)=>r(t)&&r(t)(...n))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",De,j(r(_)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(r(T))},[u(V,{key:"main",class:"h-full w-full"},{default:N(()=>[u(oe,{context:"presenter"})]),_:1}),Pe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(r(T))},[s.value?(d(),v(V,{key:"next",class:"h-full w-full"},{default:N(()=>{var n;return[u(r(le),{is:(n=s.value.route)==null?void 0:n.component,"clicks-elements":a.value,"onUpdate:clicksElements":i[1]||(i[1]=m=>a.value=m),clicks:s.value.clicks,"clicks-disabled":!1,class:P(r(ae)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):G("v-if",!0),He],4),e("div",ze,[(d(),v($e,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[u(ie,{persist:!0})]),(d(),v(de,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(r(ne)-1)/(r(re)-1)*100}%`})},null,4)])]),u(ce),u(K,{modelValue:r(w),"onUpdate:modelValue":i[2]||(i[2]=n=>J(w)?w.value=n:null)},null,8,["modelValue"])],64)}}});const qe=H(Ue,[["__scopeId","data-v-62249bea"],["__file","/Users/wangshian/Desktop/re-search/ppt-share/node_modules/@slidev/client/internals/Presenter.vue"]]);export{qe as default};
