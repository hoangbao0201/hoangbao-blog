import Login from "~/components/Layouts/Login";
import Register from "~/components/Layouts/Register";
import AuthForm from "~/pages/AuthForm";
import Cart from "~/pages/Cart";
import CheckAdmin from "~/pages/CheckAdmin";
import CheckUser from "~/pages/CheckUser";
import CreatePost from "~/pages/CreatePost";
import Dashboard from "~/pages/Dashboard";
import Home from "~/pages/Home";
import PageError from "~/pages/PageError";
import Product from "~/pages/Product";
import Profile from "~/pages/Profile";


const publicRouter = [
    { path: "/auth/login", component: Login, layout: AuthForm},
    { path: "/auth/register", component: Register, layout: AuthForm},
    { path: "/profile/information", component: Profile, layout: CheckUser },
    { path: "/create/post", component: CreatePost, layout: CheckUser},
    { path: "/dashboard", component: Dashboard, layout: CheckAdmin},
    { path: "/cart", component: Cart, layout: CheckUser},
    { path: "/product/:id", component: Product},
    // { path: "/", component: Home },
    // { path: "*", component: PageError },
]

export default publicRouter;