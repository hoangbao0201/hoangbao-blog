import classNames from "classnames/bind";
import styles from "./TwinSpinner.module.scss";

const cx = classNames.bind(styles);

function TwinSpinner() {
    return (
        <div className={cx("loadingio-spinner-double-ring-n6fnn5v8y4")}>
            <div className={cx("ldio-yebtp2sbrj")}>
                <div></div>
                <div></div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default TwinSpinner;
