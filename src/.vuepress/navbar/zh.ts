import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/zh_index/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/zh_guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
]);
