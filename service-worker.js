if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!s[e]&&(await new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}),!s[e]))throw new Error(`Module ${e} didn’t register its module`);return s[e]},r=async(r,s)=>{const a=await Promise.all(r.map(e));s(1===a.length?a[0]:a)};r.toUrl=e=>`./${e}`;const s={require:Promise.resolve(r)};self.define=(r,a,n)=>{s[r]||(s[r]=new Promise(async s=>{let i={};const o={uri:location.origin+r.slice(1)},c=await Promise.all(a.map(r=>"exports"===r?i:"module"===r?o:e(r))),t=n(...c);i.default||(i.default=t),s(i)}))}}define("./service-worker.js",["./workbox-5d3caa67"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/base-frontendapp.655946408790aca74891.css",revision:"d42e447a799733cac13b30850aa8c04b"},{url:"/base-frontendapp.655946408790aca74891.js",revision:"a1db8ebb1da93c958b69fef0c77302a8"},{url:"/base-frontendindex.html",revision:"0385a4989e652ccfdcde7fe1b54a2832"},{url:"/base-frontendvendor.655946408790aca74891.js",revision:"8a8ed9125538b85ea50381553ad617ed"}],{})}));