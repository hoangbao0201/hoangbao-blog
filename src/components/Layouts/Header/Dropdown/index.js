import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "~/context/authContext";
import Devider from "../../Devider";

import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";

const cx = classNames.bind(styles);

function Dropdown({ children, left, right }) {
    const navigate = useNavigate();
    const param = useParams()

    const {
        state: { admin },
        logoutUser,
    } = useContext(AuthContext);

    const [isOpen, setIsOpen] = useState(false);

    let menuRef = useRef(false);

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            try {
                if (!menuRef.current.contains(e.target)) {
                    setIsOpen(false);
                }
            } catch (error) {}
        });
    });

    const eventLogoutUser = async () => {
        await logoutUser();
        // navigate("/");

        window.location = "/"
    };

    return (
        <div
            ref={menuRef}
            className={cx("dropdown", `${isOpen ? "active" : ""}`)}
        >
            <div className={cx("item-main")} onClick={() => setIsOpen(!isOpen)}>
                <p>{children}</p>
            </div>
            <div
                className={cx(
                    "list-item",
                    `${right ? "right" : ""}`,
                    `${left ? "left" : ""}`
                )}
            >
                {admin && (
                    <>
                        <a
                            href="/dashboard"
                            className={cx("dev-item-link", "item-link")}
                        >
                            Trang Admin
                        </a>
                        <Devider />
                    </>
                )}
                <a
                    href="/profile/information"
                    className={cx("dev-item-link", "item-link")}
                >
                    Trang c?? nh??n
                </a>
                <Devider />
                <a href="/cart" className={cx("dev-item-link", "item-link")}>
                    Gi??? h??ng
                </a>
                <Devider />
                <a
                    href="/create/post"
                    className={cx("dev-item-link", "item-link")}
                >
                    T???o b??i
                </a>
                <Devider />
                <li className={cx("item-link")} onClick={eventLogoutUser}>
                    ????ng xu???t
                </li>
            </div>
        </div>
    );
}

export default Dropdown;
