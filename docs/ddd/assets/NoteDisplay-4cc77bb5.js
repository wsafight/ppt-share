import{d as c,i as d,a as u,f as o,E as s,g as r,t as a,o as l,_ as m}from"./index-c5e99d1a.js";const f=["innerHTML"],k=["textContent"],v=["textContent"],y=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const n=p;return d(u),(e,t)=>e.noteHtml?(l(),o("div",{key:0,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,f)):e.note?(l(),o("div",{key:1,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,k)],2)):(l(),o("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(n.placeholder||"No notes.")},null,8,v)],2))}}),g=m(y,[["__file","/Users/wangshian/Desktop/re-search/ppt-share/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};
