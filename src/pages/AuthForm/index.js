import classNames from "classnames/bind";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "~/components/Layouts/Spinner";
import { AuthContext } from "~/context/authContext";
import styles from "./AuthForm.module.scss";

const cx = classNames.bind(styles);

function AuthForm({ children }) {
    const {
        state: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    if (authLoading) {
        return <Spinner modal/>;
    } else {
        if(!isAuthenticated) {
            return (
                <div className={cx("wrapper", "bgImage")}>
                    <div className={cx("container")}>{children}</div>
                </div>
            );
        }
        else {
            return <Navigate to="/"/>
        }
    }
}

export default AuthForm;
