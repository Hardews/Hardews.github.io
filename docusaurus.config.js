/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hardews',
  tagline: '心无增减，得失随缘',
  favicon: "img/favicon.png",

  url: 'https://hardews.github.io',
  baseUrl: '/docs',
  projectName: 'hardews.github.io',
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  scripts: [
	  {
		  src: 'https://hm.baidu.com/hm.js?d1b90f0beea87f33a50c8f8c785b8fc7',
		  async: true
	  }
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'interview',
        // 面试题
        path: './interview',
        routeBasePath:"/interview",
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: './docs',
          routeBasePath:"/",
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        items: [
          {
            href: 'https://hardews.cn/blog',
            label: '博客',
            position: 'left'
          },
          {
            label: '学习笔记',
            href: '/docs/intro',
            position: 'left'
          },
          {
            label: '面试题',
            href: '/interview/intro',
            position: 'left'
          },
          
          {
            href: 'https://github.com/hardews',
            label: 'GitHub',
            position: 'right',
          },
        ],
        
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 牛肉板面, Built with Docusaurus.
      <a style='text-decoration:none' href='http://beian.miit.gov.cn'><p style='color:white'>桂ICP备2022010425号-1</p></a>`,
      },
    }),
};

module.exports = config;
