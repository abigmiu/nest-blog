import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import { ArticlePage } from '../pages/content/article/Article';
import { ArticleEdit } from '../pages/content/article/ArticleEdit';
import ContentCategory from '../pages/content/category/Category';
import { WallpaperPage } from '../pages/content/wallpaper/WallpaperPage';
import Announcement from '../pages/website/announcement/Announcement'
import { SettingPage } from '../pages/website/setting/SettingPage';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'website',
                children: [
                    {
                        path: 'announcement',
                        element: <Announcement/>
                    },
                    {
                        path: 'setting',
                        element: <SettingPage />
                    }
                ]
            },
            {
                path: 'content',
                children: [
                    {
                        path: 'category',
                        element: <ContentCategory />
                    },
                    {
                        path: 'article',
                        element: <ArticlePage/>
                    },
                    {
                        path: 'article/edit',
                        element: <ArticleEdit />
                    },
                    {
                        path: 'wallpaper',
                        element: <WallpaperPage />
                    }
                ]
            }
        ]
    },

])

export default routers;
