import { useContext, useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "~/context/authContext";
import Devider from "../../Devider";

import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";

const cx = classNames.bind(styles);

function Dropdown({ children, left, right }) {

    // const navigate = useNavigate();

    const { logoutUser } = useContext(AuthContext);

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
    }
 
    return (
        <div
            ref={menuRef}
            className={cx("dropdown", `${isOpen ? "active" : ""}`)}
        >
            <div className={cx("item-main")} onClick={() => setIsOpen(!isOpen)}>
                <p>{children}</p>
            </div>
            <div className={cx("list-item", `${right ? "right" : ""}`, `${left ? "left" : ""}`)}>
                <a href="/profile/information" className={cx("dev-item-link", "item-link")}>Trang cá nhân</a>
                <Devider />
                <a href="/create/post" className={cx("dev-item-link", "item-link")}>Tạo bài</a>
                <Devider />
                <li className={cx("item-link")} onClick={eventLogoutUser}>Đăng xuất</li>
            </div>
        </div>
    );
}

export default Dropdown;
