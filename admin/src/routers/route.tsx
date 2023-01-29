import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import ContentCategory from '../pages/content/category/Category';
import Announcement from '../pages/website/announcement/Announcement'

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'announcement',
                element: <Announcement/>
            },
            {
                path: 'content/category',
                element: <ContentCategory></ContentCategory>
            }
        ]
    },

])

export default routers;
