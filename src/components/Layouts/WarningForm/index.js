import classNames from "classnames/bind";
import { iconCloseCicle } from "~/public/imgSvg";
import styles from "./WarningForm.module.scss";

const cx = classNames.bind(styles);

function WarningForm({ children, action }) {

    const detroy = () => {
        if(action) {
            action();
        }
    }

    return (
        <div className={cx("form")}>
            <p className={cx("grid-icon")} onClick={detroy}>{iconCloseCicle}</p>
            <span className={cx("warning-text")}>{children || "Error"}</span>
        </div>
    );
}

export default WarningForm;
