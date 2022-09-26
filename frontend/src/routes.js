import { ADMIN_ROUTE, LOT_ROUTE, SIGNUP_ROUTE, HOME_ROUTE} from './utils/consts';
import adminPanel from './pages/adminPanel';
import home from './pages/home';
import lot from './pages/lot';
import signup from './pages/signup';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component : adminPanel
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
        Component : home
    }
]