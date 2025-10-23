// @ts-check
const config = {
  title: 'Data Engineering Toolkit',
  tagline: 'My personal data engineering & analytics knowledge base',
  favicon: 'img/favicon.ico',
  url: 'https://Moddinu.github.io',
  baseUrl: '/data-engineering-toolkit/',
  organizationName: 'Moddinu',
  projectName: 'data-engineering-toolkitt',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Moddinu/data-engineering-toolkit/edit/main/',
        },
        blog: { showReadingTime: true },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Data Engineering Toolkit',
      items: [{ to: '/docs/intro', label: 'Docs', position: 'left' }],
    },
    footer: {
      style: 'dark',
      copyright: `Built with ❤️ using Docusaurus — © ${new Date().getFullYear()} YOU`,
    },
  },
};

module.exports = config;
