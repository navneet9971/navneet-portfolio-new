"use strict";(()=>{var e={};e.id=654,e.ids=[654],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},7140:(e,r,t)=>{t.r(r),t.d(r,{config:()=>p,default:()=>o,routeModule:()=>s});var a={};t.r(a),t.d(a,{default:()=>handler});var i=t(1802),l=t(7153),n=t(6249);function handler(e,r){let t=new Date().toISOString().split("T")[0],a=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[{url:"/",priority:"1.0",changefreq:"weekly"},{url:"/privacy-policy",priority:"0.8",changefreq:"monthly"},{url:"/terms-of-service",priority:"0.8",changefreq:"monthly"}].map(e=>`
  <url>
    <loc>https://navneet-portfolio-black.vercel.app/${e.url}</loc>
    <lastmod>${t}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join("")}
</urlset>`;r.setHeader("Content-Type","text/xml"),r.setHeader("Cache-Control","public, s-maxage=86400, stale-while-revalidate"),r.write(a),r.end()}let o=(0,n.l)(a,"default"),p=(0,n.l)(a,"config"),s=new i.PagesAPIRouteModule({definition:{kind:l.x.PAGES_API,page:"/api/sitemap.xml",pathname:"/api/sitemap.xml",bundlePath:"",filename:""},userland:a})}};var r=require("../../webpack-api-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[222],()=>__webpack_exec__(7140));module.exports=t})();