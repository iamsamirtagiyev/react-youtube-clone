import Account from "./pages/Account";
import After from "./pages/After";
import Special from "./pages/Special";
import History from "./pages/History";
import Home from "./pages/home/Home";
import More from "./pages/More";
import Shorts from "./pages/Shorts";
import Subscribes from "./pages/Subscribes";

const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/shorts',
        element: <Shorts/>
    },
    {
        path: '/subscribes',
        element: <Subscribes/>
    },
    {
        path: '/account',
        element: <Account/>
    },
    {
        path: '/history',
        element: <History/>
    },
    {
        path: '/after',
        element: <After/>
    },
    {
        path: '/more',
        element: <More/>
    },
    {
        path: '/special',
        element: <Special/>
    }
]

export default routes