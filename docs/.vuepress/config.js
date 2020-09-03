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
    sidebar: 'auto',
    // 仓库地址
    repo: 'https://github.com/Larassa/blog.git',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [
      // { text: '前端面试之道',link: '/interview/'},
      // { text: 'JavaScript书籍', items: [
      //     { text: '你不知道的JavaScript(上)', link: '/books/你不知道的javascript上'}, 
      //     { text: '你不知道的JavaScript(中)', link: '/books/你不知道的javascript中'},
      //     { text: '你不知道的JavaScript(下)', link: '/books/你不知道的javascript下'}
      //   ]
			// },
			{ text: 'HTML', items: [
				{ text: '基础知识', link: '/HTML/' },
				{ text: '进阶', link: '/HTML/advanced' },
			]},
			{ text: 'CSS', items: [
				{ text: '基础知识', link: '/CSS/' },
				{ text: '进阶', link: '/CSS/advanced' },
			]},
			{ text: 'JavaScript', items: [
				{ text: '基础知识', link: '/javaScript/' },
				{ text: '进阶', link: '/javaScript/advanced' },
			]},
      { text: '数据结构和算法', link: '/algorithm/'},
      { text: 'Vue', items: [
				{text: 'Vue源码', link: '/vue/'},
				{text: 'API', link: '/vue/API'},
			]},
			{ text: 'Webpack',link: '/webpack/'},
			{ text: 'Node',link: '/node/'},
			
      // { text: 'VuePress',link: '/vuepress/'},
      // { text: '基础配置功能',link: '/common/'}
  ]},
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