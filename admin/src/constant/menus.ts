import type { MenuProps } from 'antd';

export const layoutMenus: MenuProps['items'] = [
    {
        label: '网站信息',
        key: 'website',
        children: [
            {
                label: '公告',
                key: 'website.announcement',
            }
        ]
    },
    {
        label: '内容',
        key: 'content',
        children: [
            {
                label: '分类和标签',
                key: 'content.category',
            }
        ]
    }
]

/** 菜单的 key 对应的路由 path */
export const menuKeyToPathMap: Record<string, string> = {
    'website.announcement': '/announcement',
    'content.category': '/content/category'
}
