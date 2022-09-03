import classNames from "classnames/bind";
import styles from "./TitlePage.module.scss";

const cx = classNames.bind(styles);

function TitlePage({ children, size }) {

    let classed = "size-lg";
    if(size) {
        classed = `size-${size}`;
    }

    return (
        <div className={cx("title", classed)}>
            <span className={cx("text")}>{children}</span>
        </div>
    );
}

export default TitlePage;
