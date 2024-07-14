import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
console.log(process.env.NODE_ENV !== "production");
const config: Config = {
  title: "问问物语",
  tagline: "保持学习的态度是非常酷的",
  favicon: "img/docusaurus.png",
  // Set the production url of your site here
  url: "https://tysaner.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.NODE_ENV === "production" ? "/blog-docusaurus/" : "/",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tysaner", // Usually your GitHub org/user name.
  projectName: "blog-docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en"],
    localeConfigs: {
      // 语言配置
      en: {
        htmlLang: "en-gb",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // <meta name="msvalidate.01" content="70EFEC8BBB19270445964DF0B4F5C14D" />
    metadata: [
      { name: "msvalidate.01", content: "70EFEC8BBB19270445964DF0B4F5C14D" },
      {
        name: "google-site-verification",
        content: "ADrc9cqP5sRVpKZESHivCZbLqhWgzp6bUtvpRbcoh98",
      },
    ],
    // <meta name="google-site-verification" content="ADrc9cqP5sRVpKZESHivCZbLqhWgzp6bUtvpRbcoh98" />
    // 左侧菜单栏
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    // 公告栏
    announcementBar: {
      id: "support_us",
      content: "💗 欢迎来到我的博客~  💫",
      isCloseable: false,
    },
    // Replace with your project's social card
    // 搜索
    algolia: {
      apiKey: "d4c00b1f5479df70aa3b9f3c83fbe113",
      indexName: "dev_test",
      appId: "SB65ZZZGW6",
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "问问物语",
      hideOnScroll: true,
      // style: 'primary',
      logo: {
        alt: "问问物语logo",
        src: "img/docusaurus.png",
      },
      items: [
        {
          type: "html",
          position: "left",
          value: `<div style="display: flex;">
            <img src="https://visitor-badge.laobi.icu/badge?page_id=tysaner.blog-docusaurus" alt="visitor badge" />
          </div>`,
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "文档",
        },
        { to: "/blog", label: "日志", position: "left" },
        // { type: "localeDropdown", position: "right" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "前言",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "社区",
          items: [
            {
              label: "堆栈溢出",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "不一致性",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "日志",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 问问物语, Inc. Built 用Docusaurus建造.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: ["@docusaurus/plugin-ideal-image"],
};

export default config;

// readme徽章生成器
// https://shields.io/
// https://visitor-badge.laobi.icu/#docs\
// https://blog.csdn.net/gitblog_00050/article/details/138948102
