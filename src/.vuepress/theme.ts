import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar, enNavbar } from "./navbar/index.js";
import { zhSidebar, enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  // darkmode: "auto",

  fullscreen: true,

  hostname: "https://xupen9.cn",

  author: {
    name: "XuPen9",
    url: "https://xupen9.cn",
  },

  favicon: "/logo.ico",

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.png",
  // logoDark: "/logo.png",

  repo: "XuPen9/XuPen9.github.io",

  repoDisplay: false,

  docsDir: "src",

  locales: {
    /**
    * Chinese locale config
    */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer:
        '主题使用 <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a> | <a href="https://mister-hope.com/about/site.html" target="_blank">关于网站</a>',

      copyright: "基于 MIT 协议，© 2019-至今 Mr.Hope",

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
    /**
     * English locale config
     */
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer:
        'Theme by <a href="https://theme-hope.vuejs.press">vuepress-theme-hope</a>',

      copyright: "MIT Licensed, © 2019-present Mr.Hope",

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/en/demo/encrypt.html": ["1234"],
    },
  },

  displayFooter: true,
  copyright: "Copyright © 2019-present Mr.Hope",

  plugins: {

    components: {
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "FontIcon",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        "VidStack",
        "XiGua",
      ],
    },

    markdownImage: {
      figure: true,
      lazyload: true,
      mark: true,
      size: true,
    },

    markdownMath: {
      type: "mathjax",
    },

    markdownTab: {
      tabs: true,
      codeTabs: true,
    },

    markdownHint: {
      hint: true,
      alert: true,
    },

    searchPro: true,

    // Code Color Set
    shiki: {

      langs: [
        'c', 'cpp', 'java', 'javascript', 'json', 'ts', 'vue', 'make',
        'bash', 'nginx', 'matlab', 'markdown', 'python', 'sql', 'yaml',
      ],

      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },

    },

    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,
      footnote: true,
      chart: true,
      markmap: true,
      echarts: true,
      flowchart: true,
      mermaid: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
    },

    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
