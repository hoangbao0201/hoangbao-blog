import { useEffect, useRef, useState } from "react";

import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";

const cx = classNames.bind(styles);

function Dropdown({ children, listItems, eventCheckShow }) {
    const [isOpen, setIsOpen] = useState(false);

    let menuRef = useRef(false);

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (!menuRef.current.contains(e.target)) {
                eventCheckShow();
                setIsOpen(false);
            }
        });
    });

    let body = ["dropdown"];
    if (listItems) {
        body = listItems;
    }

    return (
        <div
            ref={menuRef}
            className={cx("dropdown", `${isOpen ? "active" : ""}`)}
        >
            <div className={cx("item-main")} onClick={() => setIsOpen(!isOpen)}>
                <p>{children}</p>
            </div>
            <div className={cx("list-item")}>
                {body.map((item, index) => {
                    return <li className={cx("item-link")} key={index}>{item}</li>;
                })}
            </div>
        </div>
    );
}

export default Dropdown;
