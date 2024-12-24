import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "en_index/",
      link: "en_index/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "book",
      prefix: "en_guide/",
      children: "structure",
    },
  ],
});
