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

  plugins: [
    ['@vuepress/google-analytics', {
      'ga': 'UA-132770851-2',
    }],
  ],

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
    lang: require(path.resolve(__dirname, '../../lib/langs/en-US')),
    // lang: require(path.resolve(__dirname, '../../lib/langs/zh-CN')),
    // lang: require(path.resolve(__dirname, '../../lib/langs/pt-BR')),

    personalInfo: {
      nickname: 'glitzma',
      description: 'Happy Coding<br/>Happy Life',
      email: 'glitteringma@gmail.com',
      location: 'Beijing City, China',
      organization: 'HaoWeiLai',

      avatar: 'https://blog.mamingjuan.cn/assets/images/favicon-16.ico',

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
          account: '@焦炭君_Meteor',
          link: 'https://weibo.com/u/2039655434',
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
        // url: '/assets/img/bg.jpg',
        useGeo: true,
      },
      showTitle: true,
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
      clientId: 'cbda894952ba70c00666',
      clientSecret: '1ade785ca693bf3092be5e5338720d5ee43672b7',
      autoCreateIssue: false,
    },

    pagination: {
      perPage: 5,
    },
  },
}
