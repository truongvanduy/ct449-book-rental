import{_ as k}from"./BookList-Bgd7-DDm.js";import{o as u,c as _,a as f,t as m,b as t,d as s,e as b}from"./index-Dl1616DY.js";import{b as p}from"./book.service-DCD84Ts1.js";const h={class:"book-section flow"},d={class:"fs-2"},l={__name:"BookSection",props:{title:{type:String,default:""},books:{type:Array,default:()=>[]}},setup(a){return(e,c)=>(u(),_("section",h,[f("h2",d,m(a.title),1),t(k,{book:a.books,style:{"--flow-spacer":"1em"}},null,8,["book"])]))}},v={class:"flow",style:{"--flow-spacer":"2em"}},i=6,S={__name:"HomeView",setup(a){const e=s([]),c=s([]),n=s([]),r=s([]);return b(async()=>{try{e.value=await p.getAll(),c.value=e.value.slice(0,i),n.value=e.value.filter(o=>o.categories==="Triết học").slice(0,i),r.value=e.value.filter(o=>o.categories==="Kinh tế").slice(0,i)}catch(o){console.log(o)}}),(o,y)=>(u(),_("div",v,[t(l,{title:"Gợi ý cho bạn",books:c.value},null,8,["books"]),t(l,{title:"Triết học",books:n.value},null,8,["books"]),t(l,{title:"Kinh tế",books:r.value},null,8,["books"])]))}};export{S as default};
