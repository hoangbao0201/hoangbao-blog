import classNames from "classnames/bind";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "~/context/authContext";
import NavbarToggle from "../NavbarToggle";
import Spinner from "../Spinner";
import Dropdown from "./Dropdown";
import styles from "./Header.module.scss";
import { avatarDefault } from "~/public/imgSvg";

const cx = classNames.bind(styles);

function Header() {
    const {
        state: { authLoading, isAuthenticated, user },
    } = useContext(AuthContext);

    let body = null;
    if (authLoading) {
        body = <Spinner size="sm" />;
    } else {
        if (!isAuthenticated) {
            body = (
                <>
                    <Link
                        className={cx("navbar-colapse-link")}
                        to="/auth/login"
                    >
                        Đăng nhập
                    </Link>
                    <Link
                        className={cx("navbar-colapse-link")}
                        to="/auth/register"
                    >
                        Đăng ký
                    </Link>
                </>
            );
        } else {
            body = (
                <>
                    <Dropdown right>
                        {user.avatar.url ? (
                            <img
                                className={cx("dev-avatar-header-size")}
                                width="30"
                                src={user.avatar.url}
                                alt="avatar"
                            />
                        ) : (
                            <i className={cx("icon-avatar")}>{avatarDefault}</i>
                        )}
                    </Dropdown>
                </>
            );
        }
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("dev-container", "container")}>
                <header className={cx("header")}>
                    <a href="/">
                        <img src="/images/logo.png" alt="avatar" width="95" />
                    </a>

                    <div className={cx("navbar-collapse")}>
                        <NavbarToggle />

                        <div className={cx("action-auth")}>{body}</div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;
