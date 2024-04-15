import { defineConfig } from "vitepress";
import { buildSidebar } from "./scripts/sidebar";
import path from "path";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Good Good Study",
  description: "Elevate Your Learning, Every Single Day",
  themeConfig: {
    outline: "deep",
    siteTitle: "咿呀咿呀咿",
    logo: "/mylogo.svg",
    docFooter: { prev: "上一篇", next: "下一篇" },
    returnToTopLabel: "返回顶部",
    outlineTitle: "导航栏",
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "归档",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "考公相关问题", link: "/nav" },
    ],

    sidebar: {
      "/nav": await buildSidebar(path.resolve(__dirname, "./../nav"), "/nav"),
      "/question": await buildSidebar(
        path.resolve(__dirname, "./../question"),
        "/question"
      ),
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
