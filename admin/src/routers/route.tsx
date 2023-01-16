import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Announcement from '../pages/website/announcement/Announcement'

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/announcement',
        element: <Announcement/>
    }
])

export default routers;