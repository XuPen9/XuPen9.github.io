import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "x Web",
      description: "xupen9 webpage",
    },
    "/en/": {
      lang: "en-US",
      title: "x Web",
      description: "xupen9 webpage",
    },
  },

  theme,

});