import classNames from "classnames/bind";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "~/components/Layouts/Button";
import FormNumberProduct from "~/components/Layouts/FormNumberProduct";
import { AuthContext } from "~/context/authContext";
import { PostContext } from "~/context/postContext";
import { format } from "~/utils/formatNumber";
import styles from "./InfoBuyer.module.scss";

const cx = classNames.bind(styles);

function InfoBuyer({ post, user }) {
    const navigate = useNavigate();
    const { buyProduct } = useContext(PostContext);

    const [infoBuyer, setInfoBuyer] = useState({
        postId: post._id,
        name: user.name,
        phone: user.phone,
        adress: user.adress,
        moreInfo: "",
        amount: 0,
    });
    const [totalPrice, setTotalPrice] = useState(0);

    const eventOnChangeValue = (e) => {
        setInfoBuyer({
            ...infoBuyer,
            [e.target.name]: e.target.value,
        });
    };

    const eventOnChangeNumber = (amount) => {
        const priceProduct = post.price;
        setInfoBuyer({
            ...infoBuyer,
            amount: amount
        });
        setTotalPrice( amount * priceProduct );
    }

    const eventSubmitFormInfoBuyer = async () => {
        const dataServerBuyProduct = await buyProduct({
            name: infoBuyer.name,
            phone: infoBuyer.phone,
            adress: infoBuyer.adress,
            moreInfo: infoBuyer.moreInfo,
            amount: infoBuyer.amount,
            postId: infoBuyer.postId,
        });

        if(dataServerBuyProduct.success) {
            window.location.reload();
            // navigate("/cart");

            // console.log(dataServerBuyProduct)
        }
    }

    return (
        <div className={cx("form")}>
            <div className={cx("title")}>Thông tin khách hàng</div>
            <div className={cx("dev-form-group", "form-group")}>
                <div className={cx("dev-title-stick-input")}>Họ và tên</div>
                <input
                    className={cx("dev-form-input")}
                    value={`${infoBuyer.name ? infoBuyer.name : ""}`}
                    name="name"
                    onChange={eventOnChangeValue}
                />
            </div>
            <div className={cx("dev-form-group", "form-group")}>
                <div className={cx("adress-phone")}>(+84)</div>
                <input
                    className={cx("dev-form-input", "phone-input")}
                    value={`${infoBuyer.phone ? infoBuyer.phone : ""}`}
                    name="phone"
                    onChange={eventOnChangeValue}
                    placeholder="Số điện thoại"
                />
            </div>
            <div className={cx("dev-form-group", "form-group")}>
                <div className={cx("dev-title-stick-input")}>Địa chỉ</div>
                <input
                    className={cx("dev-form-input")}
                    value={`${infoBuyer.adress ? infoBuyer.adress : ""}`}
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
                    value={`${infoBuyer.moreInfo ? infoBuyer.moreInfo : ""}`}
                    name="moreInfo"
                    onChange={eventOnChangeValue}
                />
            </div>
            <div className={cx("dev-form-group", "form-group")}>
                <div className={cx("dev-title-row-input")}>
                    Số lượng sản phẩm
                </div>
                <FormNumberProduct action={eventOnChangeNumber}/>
            </div>
            <div className={cx("dev-form-group", "form-group")}>
                <div className={cx("dev-title-row-input")}>
                    Thành tiền: <span>{`${format(totalPrice)}`} VNĐ</span>
                </div>
            </div>

            <Button size="auto" action={eventSubmitFormInfoBuyer}>Đặt mua</Button>

        </div>
    );
}

export default InfoBuyer;
