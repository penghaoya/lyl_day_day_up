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
      {
        text: "相关备考信息",
        link: "/nav/上岸整套流程概述",
      },
      {
        text: "考公相关问题",
        link: "/question/编制概述：行政编、事业编、参公事业编、三支一扶、人事代理、公益岗位等",
      },
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
    footer: {
      message: "Elevate Your Learning, Every Single Day",
      copyright: "Goes Ashore © 2025-Luckily-Girl-Lyl.",
    },
  },
});
