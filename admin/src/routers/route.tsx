import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import { ArticlePage } from '../pages/content/article/Article';
import ContentCategory from '../pages/content/category/Category';
import Announcement from '../pages/website/announcement/Announcement'

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
                    }
                ]
            }
        ]
    },

])

export default routers;
