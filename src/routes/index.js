import Login from "~/components/Layouts/Login";
import Register from "~/components/Layouts/Register";
import AuthForm from "~/pages/AuthForm";
import Home from "~/pages/Home";
import PageError from "~/pages/PageError";
import Profile from "~/pages/Profile";


const publicRouter = [
    { path: "/auth/login", component: Login, layout: AuthForm},
    { path: "/auth/register", component: Register, layout: AuthForm},
    { path: "/", component: Home },
    { path: "/profile/information", component: Profile },
    { path: "*", component: PageError },
]

export default publicRouter;