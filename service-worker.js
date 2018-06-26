/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "984e5e766e8a3831627abd9016c147d3"
  },
  {
    "url": "admin/glqy.html",
    "revision": "bdcbb739458064d75182bdadb62b753f"
  },
  {
    "url": "admin/index.html",
    "revision": "2852f9eb340ae5f28e2106e388eca651"
  },
  {
    "url": "admin/role.html",
    "revision": "817cc698395e05a7a403609c26468a0c"
  },
  {
    "url": "admin/user.html",
    "revision": "9af99ffcab4e6e3ce297bdfae97456e8"
  },
  {
    "url": "assets/css/9.styles.0cd9d9e5.css",
    "revision": "097a6d94c83d69da8a5ab5496431cd3b"
  },
  {
    "url": "assets/img/appstore.c5d6aadd.png",
    "revision": "c5d6aadd1e8c6258ebba55fc31936326"
  },
  {
    "url": "assets/img/register-01.3c42c6b9.jpeg",
    "revision": "3c42c6b9877e2ce1b311e2c9d9556cbc"
  },
  {
    "url": "assets/img/register-02.44401daa.jpeg",
    "revision": "44401daac137ab405deef4c7529b9c12"
  },
  {
    "url": "assets/img/register-03.5e22347a.jpeg",
    "revision": "5e22347afa9cd461c840c7def3dbd083"
  },
  {
    "url": "assets/img/register-04.59a4fb1c.jpeg",
    "revision": "59a4fb1c185c64a3b8a3e59388e73e8c"
  },
  {
    "url": "assets/img/register-05.b13b8328.jpeg",
    "revision": "b13b832808d72ddede69483aa561e5ee"
  },
  {
    "url": "assets/img/register-06.294f0b9c.jpeg",
    "revision": "294f0b9c0c8078bb7a1ff8272519a556"
  },
  {
    "url": "assets/img/register-07.d9e6564a.jpeg",
    "revision": "d9e6564a079dd760e8a0b3612e94f328"
  },
  {
    "url": "assets/img/role-01-01.488dd6e2.png",
    "revision": "488dd6e2bca1708762af7f69b4f8f033"
  },
  {
    "url": "assets/img/role-01.80c938d4.png",
    "revision": "80c938d457f5265a6f3e0b334b99808a"
  },
  {
    "url": "assets/img/role-02.ee0001b9.png",
    "revision": "ee0001b9932a0b21bc6a85ec9e8d39ea"
  },
  {
    "url": "assets/img/role-03.48e6e57e.png",
    "revision": "48e6e57e34476ba43d06ad046b7228e1"
  },
  {
    "url": "assets/img/role-04.4b1b9419.png",
    "revision": "4b1b9419e8f915d1deb2a950bec1de2f"
  },
  {
    "url": "assets/img/role-05.7761fa7b.png",
    "revision": "7761fa7bbef650f3292c57e8f6fb9752"
  },
  {
    "url": "assets/img/role-06.7ffec5d6.png",
    "revision": "7ffec5d6ee8b3852ac2d911fbc214729"
  },
  {
    "url": "assets/img/rysh.e9443cc4.png",
    "revision": "e9443cc42aea69883700c064724d70e9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/syj-01.253dc2ae.png",
    "revision": "253dc2aed09b0b13c89d92345dd2baa1"
  },
  {
    "url": "assets/img/wechat-01.309d3677.png",
    "revision": "309d3677211a948b8dab9641c61a4aa9"
  },
  {
    "url": "assets/img/wechat-02.255ed6e7.png",
    "revision": "255ed6e7818f6e50cfc5675f0d2cbbe8"
  },
  {
    "url": "assets/js/0.c03410d7.js",
    "revision": "6e12b13c2282e97549abbd3229054d5b"
  },
  {
    "url": "assets/js/1.65b65c06.js",
    "revision": "9197fae982f273359cdf9d7380979e93"
  },
  {
    "url": "assets/js/10.12f70f69.js",
    "revision": "40b49f589cf155b6556b71ef5fa9e3d9"
  },
  {
    "url": "assets/js/2.68799a45.js",
    "revision": "03c951c6fbc92d0be5deafea8b1bad10"
  },
  {
    "url": "assets/js/3.e5f7442c.js",
    "revision": "db53e8d51ea859c872242c939b4ff57b"
  },
  {
    "url": "assets/js/4.9f6ade89.js",
    "revision": "7ec4a812d1ba747641302d68528dc50e"
  },
  {
    "url": "assets/js/5.11259746.js",
    "revision": "9801b5fdabe27856e4f17c24229960c9"
  },
  {
    "url": "assets/js/6.7d950dfc.js",
    "revision": "98a01752e8162358f0c786e07d90bd4d"
  },
  {
    "url": "assets/js/7.5c03281d.js",
    "revision": "c92d877cf1466154568a447b1ac7c3ce"
  },
  {
    "url": "assets/js/8.ad4214e0.js",
    "revision": "e7161610883be3e744030fcb4e3b7920"
  },
  {
    "url": "assets/js/app.ed3569b7.js",
    "revision": "222aad68ec12fa0a9cda78b21bbd8310"
  },
  {
    "url": "index.html",
    "revision": "0b978ae245f105dfcd4dbd3c703b9662"
  },
  {
    "url": "install/index.html",
    "revision": "2075c51594d4e8b898b21a938fc11aaa"
  },
  {
    "url": "logo.png",
    "revision": "60a31a59d0a9965cf2df034022231c23"
  },
  {
    "url": "yskh.png",
    "revision": "6f5b81e34b55557be57fc9f09a24cbb0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
