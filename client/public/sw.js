if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let t = {};
    const r = (e) => a(e, n),
      o = { module: { uri: n }, exports: t, require: r };
    s[n] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (c(...e), t));
  };
}
define(["./workbox-f1770938"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/145-c0a5e886cae1846a.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/161-d33b15627e4c317d.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/344-19b2f9bd3b383368.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/386-74b050bb8afc785b.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/418-362aaaa5f12675da.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/52774a7f-84ffe93c272d9a13.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/574-99b1a63b6a002dc8.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/66ec4792-f5a96e471f0372ca.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/673-733bba3873eb6d1a.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/726-db5adbc98513b473.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/808-c8e493deea86221d.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/977-b50d4bdaee2fd5b3.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/9c4e2130-f414bbeb56920b20.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/(sublayout)/gifticon/%5Bid%5D/page-af242f097660ad1f.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/(sublayout)/gifticon/page-b860799fbca24b56.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/(sublayout)/history/page-930813d4100090ed.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/(sublayout)/layout-735f54e35e417c6c.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/(sublayout)/mygifticon/%5Bid%5D/page-9cb3fb03182c24f7.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/(sublayout)/mygifticon/page-5214a5e89a248d3b.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/(sublayout)/point/page-3a35018d4b3af58f.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/(sublayout)/rank/page-0e5812dd641050f4.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-653f6e4dfce48a36.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/auth/callback/page-cc545ea20b335ccb.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/global-error-8ac00e6f3a970172.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/kapay/approve/page-4ba2674d32f8ce29.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/kapay/cancel/page-389b1f8731afbc9a.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/kapay/fail/page-053ecd320d30e8e4.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/kapay/page-d2aace387565a0db.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/layout-093dd553b1cbf24c.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/mypage/page-8c7f7ef3af16c5ba.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/page-d9bffe41c98d8bb5.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/app/toudeuk/page-0ce1ceed290c5168.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/dc112a36-9aa2a1450126cf92.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/fd9d1056-4333cf261479a17f.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/framework-332f134768e2321c.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/main-ac7bed557eb527b3.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/main-app-341ca4ada5baf577.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/pages/_app-7587fbbb947443a3.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/pages/_error-bbc0574c57de5961.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-25e378c1dbc11c83.js",
          revision: "pFefriTOKfcma5US6RbAS",
        },
        {
          url: "/_next/static/css/7b7aa377007623f9.css",
          revision: "7b7aa377007623f9",
        },
        {
          url: "/_next/static/css/ce8931ef8b3f947c.css",
          revision: "ce8931ef8b3f947c",
        },
        {
          url: "/_next/static/pFefriTOKfcma5US6RbAS/_buildManifest.js",
          revision: "c8e3e6b24bc0cd9dc32a264e7aec0fa6",
        },
        {
          url: "/_next/static/pFefriTOKfcma5US6RbAS/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/buttons/Button2.json",
          revision: "a85d6fffd535d9c82b81deb873c5f5ff",
        },
        {
          url: "/buttons/button.svg",
          revision: "d8d48af0d6eb1daa761c8591b150475c",
        },
        { url: "/circle_01.png", revision: "000edc9fee9f8743ca1da3b9ccef9bc1" },
        { url: "/circle_02.png", revision: "8634c6d079749e4f2fae9498db4eac8d" },
        { url: "/circle_05.png", revision: "7ad791cc3e634598d98e9e1d24f82092" },
        { url: "/default.png", revision: "6563fbec4818fba4bc81671d808795cb" },
        {
          url: "/default_profile.jpg",
          revision: "a2deb86f409861ba694db2ebbe0c54e8",
        },
        {
          url: "/fonts/NotoSansKR-Black.ttf",
          revision: "15e2e9d1b8e380eafc51a606a7e671d6",
        },
        {
          url: "/fonts/NotoSansKR-Bold.ttf",
          revision: "671db5f821991c90d7f8499bcf9fed7e",
        },
        {
          url: "/fonts/NotoSansKR-ExtraBold.ttf",
          revision: "db13746e4342665b3fb5571c353f8c46",
        },
        {
          url: "/fonts/NotoSansKR-ExtraLight.ttf",
          revision: "33e4ba0602de9a23075c13d344127395",
        },
        {
          url: "/fonts/NotoSansKR-Light.ttf",
          revision: "e61301e66b058697c6031c39edb7c0d2",
        },
        {
          url: "/fonts/NotoSansKR-Medium.ttf",
          revision: "4dee649c78a37741c4f5d9fdb69ea434",
        },
        {
          url: "/fonts/NotoSansKR-Regular.ttf",
          revision: "e910afbd441c5247227fb4a731d65799",
        },
        {
          url: "/fonts/NotoSansKR-SemiBold.ttf",
          revision: "90c2026b48704ad2560e68249b15b7f5",
        },
        {
          url: "/fonts/NotoSansKR-Thin.ttf",
          revision: "b59719d81a60f284b7c372c7891689fd",
        },
        {
          url: "/fonts/gilroy-extrabold-webfont.woff",
          revision: "b29bcf57901c62950cad618e44516c07",
        },
        {
          url: "/fonts/gilroy-extrabold-webfont.woff2",
          revision: "61dc3041651dabf13420062f56bc2ee1",
        },
        {
          url: "/fonts/gilroy-light-webfont.woff",
          revision: "2e0b09adec1b91208d248be9def2eab1",
        },
        {
          url: "/fonts/gilroy-light-webfont.woff2",
          revision: "d108dffc127f7d448f90cf6d32abec9c",
        },
        { url: "/icons/128.png", revision: "864ae40569be6414b5ce155e2cee3185" },
        { url: "/icons/196.png", revision: "754e0f03374a6d00cf882bb05ff661cd" },
        { url: "/icons/256.png", revision: "2e4dbdb1ca2dfa907bebe710c5aab8f3" },
        { url: "/icons/512.png", revision: "1d2507afd122761249ed50a095d1b0c2" },
        {
          url: "/icons/card-payment.json",
          revision: "7c49b3371bf25bfbc4efa06e15cce47a",
        },
        {
          url: "/icons/card.json",
          revision: "a0fb8414b9a2ec7209372f4e9840fe84",
        },
        {
          url: "/icons/chevrons-down (1).json",
          revision: "4d6283addd51348c4fc9ec675077230a",
        },
        {
          url: "/icons/chevrons-down.json",
          revision: "4d6283addd51348c4fc9ec675077230a",
        },
        {
          url: "/icons/clock.json",
          revision: "6b83cf9f51803b310d35d4cc30bd824e",
        },
        {
          url: "/icons/clock.png",
          revision: "834e6d3b1818baa9f65b7eafde070251",
        },
        {
          url: "/icons/coin.png",
          revision: "576a825c20fae4d39332fe8df692d688",
        },
        {
          url: "/icons/color-rgb.json",
          revision: "de5fadf472dca5c8b779be55953df430",
        },
        {
          url: "/icons/crown.png",
          revision: "05bee7f90878f89c5eac3233c3079351",
        },
        {
          url: "/icons/edit.json",
          revision: "d94af5c1a2b3ada8b2ab7a56e61273be",
        },
        {
          url: "/icons/game-controller.json",
          revision: "6b29f5b6a21480b672d55dc35c3df91d",
        },
        {
          url: "/icons/history.json",
          revision: "41008950efe15e49895e0501e66e3fa8",
        },
        {
          url: "/icons/layer.json",
          revision: "ac70c7d8969ae83b89c2045433428973",
        },
        {
          url: "/icons/open-box.json",
          revision: "0134dcec42339a56453df47363d8beb2",
        },
        {
          url: "/icons/package-lock.json",
          revision: "2cd5653c840294108da778400c754a2c",
        },
        {
          url: "/icons/package.json",
          revision: "e3dbe1260ca1994cb526ff01a52f6bda",
        },
        {
          url: "/icons/party-popper-with-confetti.png",
          revision: "858ef18c2dac5d873c5276965e1d5d01",
        },
        {
          url: "/icons/passport.json",
          revision: "52652886b002b8b6202c9734f2e68e7b",
        },
        {
          url: "/icons/planet.json",
          revision: "630572b2d57d549191bbf94011c584f4",
        },
        {
          url: "/icons/setting.svg",
          revision: "30a69229708a12ed2137034619c3f899",
        },
        {
          url: "/icons/ticket.json",
          revision: "b4e4102112a01836944bfd50a4a44aa4",
        },
        {
          url: "/icons/ticket_1.json",
          revision: "76d32261799648f529c8a5447bff6ffe",
        },
        {
          url: "/icons/trophy.json",
          revision: "3fbdb7245ae28648742e053e03065e82",
        },
        {
          url: "/icons/user.json",
          revision: "e353828c45f152ca7ae0fbcbe54114a4",
        },
        { url: "/manifest.json", revision: "95850521f0dffeac9136e1a00e636dda" },
        {
          url: "/models/uranus-10810858.glb",
          revision: "13c67ab27bc70f0b1b5555a5ca5dc10b",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        a &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
//# sourceMappingURL=sw.js.map
