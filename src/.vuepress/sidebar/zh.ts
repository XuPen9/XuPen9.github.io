import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "zh_index/",
      link: "zh_index/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "zh_guide/",
      children: "structure",
    },
  ],
});
