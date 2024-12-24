import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar, enNavbar } from "./navbar/index.js";
import { zhSidebar, enSidebar } from "./sidebar/index.js";

export default hopeTheme({

  //darkmode: "auto",

  fullscreen: true,

  hostname: "https://xupen9.cn",

  author: {
    name: "XuPen9",
    url: "https://xupen9.cn",
  },

  favicon: "/xupen9.ico",

  iconAssets: "fontawesome-with-brands",

  logo: "/xupen9.png",

  repo: "XuPen9/XuPen9.github.io",

  repoDisplay: false,

  docsDir: "src",

  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer:
        '主题使用 <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a> | <a href="https://mister-hope.com/about/site.html" target="_blank">关于网站</a>',
      copyright: "基于 MIT 协议 | © 2019-至今 Mr.Hope",
    },

    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer:
        'Theme by <a href="https://theme-hope.vuejs.press">vuepress-theme-hope</a>',
      copyright: "MIT Licensed | © 2019-present Mr.Hope",
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

    photoSwipe: true,

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
  },
});
