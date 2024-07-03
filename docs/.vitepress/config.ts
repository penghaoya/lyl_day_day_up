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
      "/nav": [
        ...(await buildSidebar(path.resolve(__dirname, "./../nav"), "/nav")),
      ],
      "/question": await buildSidebar(
        path.resolve(__dirname, "./../question"),
        "/question"
      ),
      "/upup": [
        {
          text: "小红书",
          collapsed: true,
          items: [
            {
              text: "小红书达人变现",
              link: "/upup/xaiohongbook/小红书达人变现",
              collapsed: true,
            },
          ],
        },
      ],
      "/note": [
        {
          text: "学习复盘",
          collapsed: true,
          items: [
            {
              text: "如何复盘",
              link: "/note/recovery/1.如何复盘",
              collapsed: true,
            },
            {
              text: "复盘示例",
              link: "/note/recovery/2.复盘示例",
              collapsed: true,
            },
          ],
        },
      ],
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
