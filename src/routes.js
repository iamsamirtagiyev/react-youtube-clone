import Account from "./pages/account/Account";
import After from "./pages/after/After";
import Special from "./pages/special/Special";
import History from "./pages/history/History";
import Home from "./pages/home/Home";
import More from "./pages/more/More";
import Shorts from "./pages/shorts/Shorts";
import Subscribes from "./pages/subscribes/Subscribes";

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