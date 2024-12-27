import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar, enNavbar } from "./navbar/index.js";
import { zhSidebar, enSidebar } from "./sidebar/index.js";

export default hopeTheme({
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

      footer: "默认页脚",

      displayFooter: true,
    },

    "/en/": {
      navbar: enNavbar,

      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,
    },
  },

  markdown: {
    component: true,
    tasklist: true,
    figure: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,

    math: {
      type: "mathjax",
    },

    include: true,
    footnote: true,
    tabs: true,
    hint: true,
    alert: true,
    sub: true,
    sup: true,
    spoiler: true,
    attrs: true,
    mark: true,
    align: true,

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

    chartjs: true,
    echarts: true,
    flowchart: true,
    markmap: true,
    mermaid: true,
    plantuml: true,

    highlighter: {
      type: "shiki",
    },
    codeTabs: true,
    demo: true,
    vPre: true,
  },

  plugins: {
    components: {
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
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

    // search: true,
    slimsearch: true,

  },
});
