import {ADMIN_ROUTE, LOT_ROUTE, SIGNUP_ROUTE, HOME_ROUTE, ADDLOT_ROUTE, MYLOTS_ROUTE, MYCHATS_ROUTE} from './utils/consts';
import adminPanel from './pages/adminPanel';
import Home from './pages/home';
import LotPage from './pages/lot';
import Signup from './pages/signup';
import AddLot from './pages/addLot';
import Mylots from './pages/mylots';
import ChatPage from './pages/chat';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component : adminPanel
    },
    {
        path: ADDLOT_ROUTE,
        Component : AddLot
    },
    {
        path: MYLOTS_ROUTE,
        Component : Mylots
    },
    {
        path: MYCHATS_ROUTE,
        Component : ChatPage
    }
]

export const publicRoutes = [
    {
        path: LOT_ROUTE + '/:id',
        Component : LotPage
    },
    {
        path: SIGNUP_ROUTE,
        Component : Signup
    },
    {
        path: HOME_ROUTE,
        Component : Home
    }
]