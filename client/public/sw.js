if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/CeTpLG9e3hZLEhzYO9l21/_buildManifest.js",revision:"c8e3e6b24bc0cd9dc32a264e7aec0fa6"},{url:"/_next/static/CeTpLG9e3hZLEhzYO9l21/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/418-bbd6bde97c9f80da.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/52774a7f-c71742ca7092d202.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/574-99b1a63b6a002dc8.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/663-f90c122e2156d821.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/66ec4792-f5a96e471f0372ca.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/673-cbbfe04360631d83.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/726-db5adbc98513b473.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/864-167a6d021d43cc12.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/977-b50d4bdaee2fd5b3.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/9c4e2130-f414bbeb56920b20.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/(sublayout)/gifticon/%5Bid%5D/page-17d5325211c9edd8.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/(sublayout)/gifticon/page-9ff14c271173105d.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/(sublayout)/history/page-04a5d1b5d877f5a6.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/(sublayout)/layout-735f54e35e417c6c.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/(sublayout)/mygifticon/%5Bid%5D/page-26afd8a6320a216e.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/(sublayout)/mygifticon/page-ba45f6be21955a96.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/(sublayout)/point/page-ac2b4c258c9b2fa0.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/(sublayout)/rank/page-7b9c7c6622d1f6d8.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/_not-found/page-653f6e4dfce48a36.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/auth/callback/page-a538db960ef6c281.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/global-error-f9b5aa0f7450bbdf.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/kapay/approve/page-12e62ab1cbe03a17.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/kapay/cancel/page-d84eb9d0378772e6.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/kapay/fail/page-823527139b3dc2a1.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/kapay/page-8e72743fc5f2c696.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/layout-7cfc36c0240c148f.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/mypage/page-871f7e2a1d20b601.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/page-922d79d2b38c7e89.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/signup/page-78f2cea3d20a8182.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/app/toudeuk/page-6e58d7492e474966.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/fd9d1056-4333cf261479a17f.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/framework-332f134768e2321c.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/main-app-a190c82bfcb8f4ca.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/main-e021f283d3383f17.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/pages/_app-c8e4930035d2af03.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/pages/_error-bbc0574c57de5961.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-60e22b09a5e98fd9.js",revision:"CeTpLG9e3hZLEhzYO9l21"},{url:"/_next/static/css/7b7aa377007623f9.css",revision:"7b7aa377007623f9"},{url:"/_next/static/css/f353412077c6dcc1.css",revision:"f353412077c6dcc1"},{url:"/circle_01.png",revision:"000edc9fee9f8743ca1da3b9ccef9bc1"},{url:"/circle_02.png",revision:"8634c6d079749e4f2fae9498db4eac8d"},{url:"/circle_05.png",revision:"7ad791cc3e634598d98e9e1d24f82092"},{url:"/default.png",revision:"6563fbec4818fba4bc81671d808795cb"},{url:"/default_profile.jpg",revision:"a2deb86f409861ba694db2ebbe0c54e8"},{url:"/fonts/NotoSansKR-Black.ttf",revision:"15e2e9d1b8e380eafc51a606a7e671d6"},{url:"/fonts/NotoSansKR-Bold.ttf",revision:"671db5f821991c90d7f8499bcf9fed7e"},{url:"/fonts/NotoSansKR-ExtraBold.ttf",revision:"db13746e4342665b3fb5571c353f8c46"},{url:"/fonts/NotoSansKR-ExtraLight.ttf",revision:"33e4ba0602de9a23075c13d344127395"},{url:"/fonts/NotoSansKR-Light.ttf",revision:"e61301e66b058697c6031c39edb7c0d2"},{url:"/fonts/NotoSansKR-Medium.ttf",revision:"4dee649c78a37741c4f5d9fdb69ea434"},{url:"/fonts/NotoSansKR-Regular.ttf",revision:"e910afbd441c5247227fb4a731d65799"},{url:"/fonts/NotoSansKR-SemiBold.ttf",revision:"90c2026b48704ad2560e68249b15b7f5"},{url:"/fonts/NotoSansKR-Thin.ttf",revision:"b59719d81a60f284b7c372c7891689fd"},{url:"/fonts/gilroy-extrabold-webfont.woff",revision:"b29bcf57901c62950cad618e44516c07"},{url:"/fonts/gilroy-extrabold-webfont.woff2",revision:"61dc3041651dabf13420062f56bc2ee1"},{url:"/fonts/gilroy-light-webfont.woff",revision:"2e0b09adec1b91208d248be9def2eab1"},{url:"/fonts/gilroy-light-webfont.woff2",revision:"d108dffc127f7d448f90cf6d32abec9c"},{url:"/icons/128.png",revision:"864ae40569be6414b5ce155e2cee3185"},{url:"/icons/196.png",revision:"754e0f03374a6d00cf882bb05ff661cd"},{url:"/icons/256.png",revision:"2e4dbdb1ca2dfa907bebe710c5aab8f3"},{url:"/icons/512.png",revision:"1d2507afd122761249ed50a095d1b0c2"},{url:"/icons/setting.svg",revision:"30a69229708a12ed2137034619c3f899"},{url:"/manifest.json",revision:"95850521f0dffeac9136e1a00e636dda"},{url:"/models/uranus-10810858.glb",revision:"13c67ab27bc70f0b1b5555a5ca5dc10b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
