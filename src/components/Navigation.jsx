import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '../App';

import Aboutme from '../pages/Aboutme';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Aboutme />
            },
            {
                path: '/Contact',
                element: <Contact/>
            },
            {
                path: '/Portfolio',
                element: <Portfolio/>
            },
            {
                path: '/Resume',
                element: <Resume/>
            },
            {
                path: '/Aboutme',
                element: <Aboutme/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
  

// export default function Navigation(){
// }