import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("dev-container", "container")}>
                <footer>Footer</footer>
            </div>
        </div>
    );
}

export default Footer;
