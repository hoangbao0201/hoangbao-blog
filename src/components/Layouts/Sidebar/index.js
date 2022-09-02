import classNames from "classnames/bind";
import { useState } from "react";
import Dropdown from "../Dropdown";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
    const listItems = ["Viết blog"];

    const [isDropdown, setIsDropdown] = useState(false);

    const eventCheckShow = () => {
        setIsDropdown(false);
    };

    return (
        <div className={cx("sidebar")}>
            <Dropdown listItems={listItems} eventCheckShow={eventCheckShow}>
                <i
                    className={cx("grid-btn")}
                    onClick={() => setIsDropdown(!isDropdown)}
                >
                    <svg
                        className={cx("icon", `${isDropdown ? "active" : ""}`)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                    </svg>
                </i>
            </Dropdown>
        </div>
    );
}

export default Sidebar;
