module.exports = {
  // 页面标题
  title: 'Larassa Blog',
  // 网页描述
	description: '小黑田心的天坑',
	base: '/blog/',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    // sidebar: 'auto',
    // 仓库地址
    repo: 'https://github.com/Larassa/blog.git',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    // editLinks: true,
    // // 编辑链接label
    // editLinkText: '编辑此页',
    // 导航
    nav: [
      // { text: '前端面试之道',link: '/interview/'},
      // { text: 'JavaScript书籍', items: [
      //     { text: '你不知道的JavaScript(上)', link: '/books/你不知道的javascript上'}, 
      //     { text: '你不知道的JavaScript(中)', link: '/books/你不知道的javascript中'},
      //     { text: '你不知道的JavaScript(下)', link: '/books/你不知道的javascript下'}
      //   ]
			// },
			{ text: '前端', 
        items: [
          {
            text: '基础',
            items: [
              { text: 'HTML', link: '/html/' },
              { text: 'CSS', link: '/css/' },
              { text: 'JavaScript', link: '/javaScript/' },
              { text: 'TypeScript', link: '/typeScript/' }
            ]
          },
          {
            text: '框架',
            items: [
              {
                text: 'VUE2', link: '/vue/'
              },
              {
                text: 'VUE3', link: '/vue3/'
              }
            ]
          },
          {
            text: '工具',
            items: [
              { text: 'Webpack',link: '/webpack/'},
            ]
          },
          {
            text: '测试',
            items: [
              { text: 'Vue Test Utils', link: '/vueTestUtils/' }
            ]
          }
			  ]
      },
      { text: '数据结构和算法', link: '/algorithm/'},
			{ text: 'Node',link: '/node/'},
			
      // { text: 'VuePress',link: '/vuepress/'},
      // { text: '基础配置功能',link: '/common/'}
    ],
    sidebar: {
      "/css/": [
        '',
        'advanced'
      ],
      "/vue/": [
        '',
        'analysis'
      ],
      "/vue3/": [
        ''
      ],
      "/javaScript/": [
        '',
        'es6'
      ],
			"/typeScript/": [
				''
			],
      "/vueTestUtils/": [
        ''
      ]
    }
  },
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '../images/vue'
      }
    }
  }
}