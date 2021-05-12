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
              },
              {
                text: 'REACT', link: '/react/'
              }
            ]
          },
          {
            text: '移动端',
            items: [
              {
                text: '微信小程序', link: '/wechat-mini/'
              }
            ]
          },
          {
            text: '工具',
            items: [
              { text: 'Webpack', link: '/webpack/'},
              { text: 'yarn', link: '/yarn/'},
              { text: 'npm', link: '/npm/'},
              { text: 'git', link: '/git/'},
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
    sidebarDepth: 4,
    sidebar: {
      "/html/": [
        {
          title: '知识点',
          collapsable: false,
          children: [
            'canvas',
            'svg',
            'safe'
          ]
        }
      ],
      "/css/": [
        {
          title: '基础知识点',
          collapsable: false,
          children: [
            '',
            'background'
          ]
        }
      ],
      "/vue/": [
        {
          title: '知识点',
          collapsable: false,
          children: [
            'component',
            'slot'
          ]
        },
        'analysis'
      ],
      "/vue3/": [
        ''
      ],
      "/react/": [
        {
          title: '路由4.x',
          collapsable: false,
          children: [
            'router4/base',
            'router4/mode',
            'router4/matching',
            'router4/nested',
            'router4/props',
            'router4/link',
            'router4/config'
          ]
        }
      ],
      "/javaScript/": [
        {
          title: '基础',
          collapsable: false,
          children: [
            'base/data-type',
            'base/data-scope',
            'base/copy',
            'base/prototype',
            'base/symbol',
            'base/curry',
            'base/this',
						'base/object'
          ]
        },
        {
          title: 'es6',
          collapsable: false,
          children: [
            'es6/proxy',
            'es6/class',
            'es6/promise'
          ]
        },
        {
          title: '网络',
          collapsable: false,
          children: [
            'net/XMLHttpRequest',
            'net/axios',
            'net/http',
            'net/safe'
          ]
        }
      ],
			"/typeScript/": [
				''
			],
      "/vueTestUtils/": [
        ''
      ],
      "/wechat-mini/": [
        ''
      ],
      "/algorithm/": [
        {
          title: '算法',
          collapsable: false,
          children: [
            'recursion'
          ]
        }
      ],
      "/yarn/": [
        ''
      ],
      "/npm/": [
        ''
      ],
      "/git/": [
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