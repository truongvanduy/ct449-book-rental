import{_ as u}from"./BookList-Bgd7-DDm.js";import{T as i}from"./ThePagination-Cf8bal4C.js";import{d as o,f as m,e as h,o as c,c as d,h as _,i as g,g as p,F as f,a as v,b as P}from"./index-Dl1616DY.js";const k=v("h1",{class:"fs-2"},"Gợi ý cho bạn",-1),V={__name:"DashboardView",setup(b){const a=o([]),t=o(12),s=o(1),r=m(()=>{const e=(s.value-1)*t.value,n=e+t.value;return a.value.slice(e,n)}),l=e=>{s.value=e};return h(async()=>{const e=await fetch("http://localhost:3000/api/books");a.value=await e.json()}),(e,n)=>(c(),d(f,null,[k,a.value.length?(c(),_(i,{key:0,itemCount:a.value.length,itemPerPage:t.value,onChangePage:l},{default:g(()=>[P(u,{book:r.value},null,8,["book"])]),_:1},8,["itemCount","itemPerPage"])):p("",!0)],64))}};export{V as default};
