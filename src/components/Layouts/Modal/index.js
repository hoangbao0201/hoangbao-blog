import classNames from "classnames/bind";
import { useRef } from "react";
import { iconClose } from "~/public/imgSvg";
import Devider from "../Devider";
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function Modal({ title, children, action, align, overlay }) {
    const ref = useRef();

    window.onclick = (e) => {
        if (e.target === ref.current && overlay) {
            action(false);
        }
    };

    // Check align modal
    let classedAlign = "modal-center";
    if(align) {
        classedAlign = `modal-${align}`
    }

    return (
        <div ref={ref} className={cx("wrapper", `${overlay && "overlay"}`)}>
            <div className={cx("modal", classedAlign)}>
                <div className={cx("modal-heading")}>
                    <div className={cx("title-heading")}>
                        {title ? title : "Modal"}
                    </div>
                    <span
                        className={cx("iconclose")}
                        onClick={() => action(false)}
                    >
                        {iconClose}
                    </span>
                </div>
                <Devider />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default Modal;
