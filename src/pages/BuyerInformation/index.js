import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "~/components/Layouts/Spinner";
import { AuthContext } from "~/context/authContext";
import styles from "./BuyerInformation.module.scss";

const cx = classNames.bind(styles);

function BuyerInformation() {
    const navigate = useNavigate();
    const {
        state: { user, authLoading, isAuthenticated },
    } = useContext(AuthContext);

    let body = null;
    if (authLoading) {
        body = <Spinner size="auto" />;
    } else {
        if (isAuthenticated) {
            body = (
                <BuyerInfomation user={user}/>
            );
        }
        else {
            navigate("/auth/register")
        }
    }

    return <div className={cx("container", "dev-container-lg")}>{body}</div>;
}

export default BuyerInformation;
