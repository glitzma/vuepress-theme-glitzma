const path = require('path')

module.exports = {
  title: 'vuepress-theme-glitzma',

  description: 'Vuepress theme of glitzma\'s blog',

  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  evergreen: true,

  // plugins: [
  //   ['@vuepress/google-analytics', {
  //     'ga': 'UA-132770851-2',
  //   }],
  // ],

  markdown: {
    lineNumbers: false,
    anchor: { permalink: false },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-textual-uml'))
    },
  },

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    // lang: require(path.resolve(__dirname, '../../lib/langs/en-US')),
    lang: require(path.resolve(__dirname, '../../lib/langs/zh-CN')),
    // lang: require(path.resolve(__dirname, '../../lib/langs/pt-BR')),

    personalInfo: {
      nickname: 'glitzma',
      description: 'Happy Coding<br/>Happy Life',
      email: 'glitteringma@gmail.com',
      location: 'Beijing City, China',
      organization: 'Secrecy',

      avatar: 'https://www.mamingjuan.cn/assets/img/avatar.jpeg',

      sns: {
        github: {
          account: 'glitzma',
          link: 'https://github.com/glitzma',
        },
        facebook: {
          account: 'glitzma.cn',
          link: 'https://www.facebook.com/glitzma.cn',
        },
        linkedin: {
          account: 'glitzma',
          link: 'http://www.linkedin.com/in/glitzma',
        },
        twitter: {
          account: 'glitzma_cn',
          link: 'https://twitter.com/glitzma_cn',
        },
        weibo: {
          account: 'glitzma',
          link: 'https://weibo.com/u/222222222',
        },
        zhihu: {
          account: 'glitzma.cn',
          link: 'https://www.zhihu.com/people/glitzma.cn',
        },
        douban: {
          account: '159342708',
          link: 'https://www.douban.com/people/159342708',
        },
        reddit: {
          account: 'glitzma',
          link: 'https://www.reddit.com/user/glitzma',
        },
        medium: {
          account: 'glitzma.cn',
          link: 'https://medium.com/@glitzma.cn',
        },
        instagram: {
          account: 'glitzma.cn',
          link: 'https://www.instagram.com/glitzma.cn',
        },
        gitlab: {
          account: 'glitzma',
          link: 'https://gitlab.com/glitzma',
        },
        bitbucket: {
          account: 'glitzma',
          link: 'https://bitbucket.org/glitzma',
        },
        docker: {
          account: 'glitzma',
          link: 'https://hub.docker.com/u/glitzma',
        },
      },
    },

    header: {
      background: {
        url: ['/assets/img/header-image-01.jpg',
          '/assets/img/header-image-02.jpg',
          '/assets/img/header-image-03.jpg',
          '/assets/img/header-image-04.jpg',
          '/assets/img/header-image-05.jpg',
        ],
        useGeo: true,
      },
      showTitle: false,
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Custom Pages', link: '/custom-pages/', exact: false },
      { text: 'Github', link: 'https://github.com/glitzma/vuepress-theme-glitzma' },
    ],

    comments: {
      owner: 'glitzma',
      repo: 'vuepress-theme-glitzma',
      clientId: '8a8132b8a43c18b5ab7b',
      clientSecret: '6ebf155c3b370929a74abff4532d06cc038c9e24',
      autoCreateIssue: false,
    },

    pagination: {
      perPage: 10,
    },
  },
}
