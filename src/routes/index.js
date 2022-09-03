import Login from "~/components/Layouts/Login";
import Register from "~/components/Layouts/Register";
import AuthForm from "~/pages/AuthForm";
import CreatePost from "~/pages/CreatePost";
import Home from "~/pages/Home";
import PageError from "~/pages/PageError";
import Product from "~/pages/Product";
import Profile from "~/pages/Profile";


const publicRouter = [
    { path: "/auth/login", component: Login, layout: AuthForm},
    { path: "/auth/register", component: Register, layout: AuthForm},
    { path: "/profile/information", component: Profile },
    { path: "/create/post", component: CreatePost},
    { path: "/product:id", component: Product},
    { path: "/", component: Home },
    { path: "*", component: PageError },
]

export default publicRouter;