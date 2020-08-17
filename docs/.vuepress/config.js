module.exports = {
    plugins: [
        '@vuepress-reco/extract-code'
    ],
    title: '王茂铭的博客',
    head: [//注入到当前页的HTML<head>中的标签
        ['link', { rel: 'icon', href: '/logo.png' }],//增加一个自定义的favicon（网页标签图标）
    ],
    base:'/vuepressglob/',
    themeConfig: {
        logo: '/logo.png',//左上角log
        nav: [//导航
            { text: "首页", link: '/' },
            { text: "Life", link: '/life/' },
            { text: "Interest", link: '/interest/' },
            { text: "Web", link: '/web/' },
            { text: "IOS", link: '/ios/' },
            { text: "Server", link: '/server/' },

        ],
        sidebar: 'auto',//侧边栏
        // sidebarDepth: 1,//二级标题
        lastUpdated: 'Last Updated', // string | boolean更新时间
        // displayAllHeaders: true // 默认值：false
    }
}