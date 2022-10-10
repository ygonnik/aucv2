import {ADMIN_ROUTE, LOT_ROUTE, SIGNUP_ROUTE, HOME_ROUTE, ADDLOT_ROUTE, MYLOTS_ROUTE} from './utils/consts';
import adminPanel from './pages/adminPanel';
import Home from './pages/home';
import lot from './pages/lot';
import signup from './pages/signup';
import AddLot from './pages/addLot';
import Mylots from './pages/mylots';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component : adminPanel
    },
    {
        path: ADDLOT_ROUTE,
        Component : AddLot
    }
    ,
    {
        path: MYLOTS_ROUTE,
        Component : Mylots
    }
]

export const publicRoutes = [
    {
        path: LOT_ROUTE + '/:id',
        Component : lot
    },
    {
        path: SIGNUP_ROUTE,
        Component : signup
    },
    {
        path: HOME_ROUTE,
        Component : Home
    }
]