import classNames from "classnames/bind";
import styles from "./StickBadge.module.scss";

const cx = classNames.bind(styles);

function StickBadge({ children, variant }) {

    let classed = "outstanding";
    if(variant) {
        classed = variant;
    }

    return (
        <div className={cx("grid-box", classed)}>
            <span className={cx("badge")}>{children}</span>
        </div>
    );
}

export default StickBadge;
