import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Alba',
  description: 'Alba is a framework that boosts Flutter project development.',
  srcExclude: [
      'README.md',
  ],

  themeConfig: {
    repo: '',
    docsRepo: 'alba-framework/docs',
    docsDir: '',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'API Reference',
        link: 'https://pub.dev/documentation/alba/latest/',
      },
      {
        text: 'Release Notes',
        link: 'https://pub.dev/packages/alba/changelog',
      },
      {
        text: 'pub.dev',
        link: 'https://pub.dev/packages/alba',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/alba-framework/alba',
      },
    ],

    sidebar: {
      '/': [
        {
          text: 'Introduction',
          children: [
            { text: 'What is Alba?', link: '/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
          ]
        },
        {
          text: 'The Basics',
          children: [
            { text: 'App', link: '/guide/app' },
            { text: 'Routing', link: '/guide/routing' },
            { text: 'Service Locator', link: '/guide/service-locator' },
            { text: 'Service Providers', link: '/guide/service-providers' },
            { text: 'Environment Management', link: '/guide/environment-management' },
            { text: 'Error Handling', link: '/guide/error-handling' },
          ]
        },
      ],
    }
  }
})