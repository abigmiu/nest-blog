import type { MenuProps } from 'antd';

export const layoutMenus: MenuProps['items'] = [
    {
        label: '网站信息',
        key: 'website',
        children: [
            {
                label: '公告',
                key: '/website/announcement',
            },
            {
                label: '设置',
                key: '/website/setting'
            }
        ]
    },
    {
        label: '内容',
        key: 'content',
        children: [
            {
                label: '分类和标签',
                key: '/content/category',
            },
            {
                label: '文章',
                key: '/content/article'
            },
            {
                label: '壁纸',
                key: '/content/wallpaper'
            }
        ]
    }
]
