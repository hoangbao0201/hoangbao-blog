import classNames from "classnames/bind";
import styles from "./InfomationForm.module.scss";

const cx = classNames.bind(styles);

function InfomationForm() {
    return (
        <div className={cx("content")}>
            <div className={cx("title")}>
                Mũ bảo hiểm nửa đầu nón 1/2 MÀU TRƠN nhiều màu Siêu HOT cao cấp
                có kính 2022
            </div>
            <div className={cx("info")}>15 Đánh Giá 50 Đã Bán</div>
            <div className={cx("price")}>₫49.000 - ₫115.000</div>
            <div className={cx("form")}>
                
            </div>
        </div>
    );
}

export default InfomationForm;
