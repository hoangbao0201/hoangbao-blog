import classNames from "classnames/bind";
import { useState } from "react";
import FormNumberProduct from "~/components/Layouts/FormNumberProduct";
import styles from "./BuyerInfomation.module.scss";

const cx = classNames.bind(styles);

function BuyerInfomation({ user }) {
    const [isUser, setIsUser] = useState(user);

    const eventOnChangeValue = (e) => {
        setIsUser({
            ...isUser,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={cx("form")}>
            <div className={cx("title")}>Thông tin khách hàng</div>
            <div className={cx("dev-form-group", "form-group")}>
                <div className={cx("dev-title-stick-input")}>Họ và tên</div>
                <input
                    className={cx("dev-form-input")}
                    value={`${isUser.name ? isUser.name : ""}`}
                    name="name"
                    onChange={eventOnChangeValue}
                />
            </div>
            <div className={cx("dev-form-group", "form-group")}>
                <div className={cx("adress-phone")}>(+84)</div>
                <input
                    className={cx("dev-form-input", "phone-input")}
                    value={`${isUser.phone ? isUser.phone : ""}`}
                    name="phone"
                    onChange={eventOnChangeValue}
                    placeholder="Số điện thoại"
                />
            </div>
            <div className={cx("dev-form-group", "form-group")}>
                <div className={cx("dev-title-stick-input")}>Địa chỉ</div>
                <input
                    className={cx("dev-form-input")}
                    value={`${isUser.adress ? isUser.adress : ""}`}
                    name="adress"
                    onChange={eventOnChangeValue}
                />
            </div>
            <div className={cx("dev-form-group", "form-group")}>
                <div className={cx("dev-title-stick-input")}>
                    Thông tin yêu cầu
                </div>

                <textarea
                    className={cx("dev-form-input", "input-description")}
                />
            </div>
            <div className={cx("dev-form-group", "form-group")}>
                <div className={cx("dev-title-row-input")}>Số lượng sản phẩm</div>
                <FormNumberProduct initial={8} />
            </div>
            <button className={cx("dev-btn-auto", "dev-btn-action-sky")}>
                Đặt mua
            </button>
        </div>
    );
}

export default BuyerInfomation;
