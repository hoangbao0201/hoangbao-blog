import classNames from "classnames/bind";
import { useContext } from "react";
import { AuthContext } from "~/context/authContext";
import styles from "./CheckAdmin.module.scss";

const cx = classNames.bind(styles);

function CheckAdmin({ children }) {
    const {
        state: { admin, authLoading },
    } = useContext(AuthContext);

    if (authLoading) {
        return;
    } else {
        if (!admin) {
            window.location = "/";
        } else {
            return <div className={cx("wrapper")}>{children}</div>;
        }
    }
}

export default CheckAdmin;
