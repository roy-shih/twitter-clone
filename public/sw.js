if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let i={};const r=e=>n(e,a),o={module:{uri:a},exports:i,require:r};s[a]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/C1YhpozBKy0J1Tlp-tNlg/_buildManifest.js",revision:"a8f5586ade6b8318b73565af9a59e6cc"},{url:"/_next/static/C1YhpozBKy0J1Tlp-tNlg/_middlewareManifest.js",revision:"60ed9523f510025b6e688aada2df4cec"},{url:"/_next/static/C1YhpozBKy0J1Tlp-tNlg/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/324-f5a0f7bce9bf778a.js",revision:"f5a0f7bce9bf778a"},{url:"/_next/static/chunks/525-c6e70cb32c651798.js",revision:"c6e70cb32c651798"},{url:"/_next/static/chunks/587-8029bb3d2ec83649.js",revision:"8029bb3d2ec83649"},{url:"/_next/static/chunks/7112840a-9dfa936adf29eb8e.js",revision:"9dfa936adf29eb8e"},{url:"/_next/static/chunks/7479380b-f24d50f026244936.js",revision:"f24d50f026244936"},{url:"/_next/static/chunks/75fc9c18-4d2f0a9f494a9dad.js",revision:"4d2f0a9f494a9dad"},{url:"/_next/static/chunks/framework-0f6f6cd937c8a2e6.js",revision:"0f6f6cd937c8a2e6"},{url:"/_next/static/chunks/main-e914e61bc362bb2b.js",revision:"e914e61bc362bb2b"},{url:"/_next/static/chunks/pages/%5Bid%5D-0177de8f12b8e2ab.js",revision:"0177de8f12b8e2ab"},{url:"/_next/static/chunks/pages/_app-94f522cc34d8ee5c.js",revision:"94f522cc34d8ee5c"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/index-66d3079d8918c801.js",revision:"66d3079d8918c801"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-378e68e29c265886.js",revision:"378e68e29c265886"},{url:"/_next/static/css/37298df5f993b659.css",revision:"37298df5f993b659"},{url:"/_next/static/css/ba2b49911cf723b1.css",revision:"ba2b49911cf723b1"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icon-192x192.png",revision:"d285d9d06e3a8bec0c1fbbfb347d1e3b"},{url:"/icon-256x256.png",revision:"c6efd1234ed0eb814cdde70eaed476be"},{url:"/icon-384x384.png",revision:"f55a1e5e0b97cfdfd317c45d6e5be8e0"},{url:"/icon-512x512.png",revision:"8dd6d8ed71553c10a94ffa52bffddf33"},{url:"/manifest.json",revision:"364f640f91bffef48d77cd3be7ac343e"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
