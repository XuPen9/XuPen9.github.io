import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en",
  "/en/en_index/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/en/en_guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
