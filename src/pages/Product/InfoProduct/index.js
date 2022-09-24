import { useContext, useState } from "react";
import Modal from "~/components/Layouts/Modal";
import { format } from "~/utils/formatNumber";
import InfoBuyer from "../InfoBuyer";

import classNames from "classnames/bind";
import styles from "./InfoProduct.module.scss";
import { AuthContext } from "~/context/authContext";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function InfoProduct({ post }) {
    const navigate = useNavigate();
    const { state: { user } } = useContext(AuthContext)
    const [isModal, setIsModal] = useState(false);

    const eventBuyProduct = () => {
        if(!user) {
            navigate("/auth/login");
        }
        setIsModal(true);
    };

    return (
        <div className={cx("content")}>
            {isModal && (
                <Modal align="center" action={setIsModal}>
                    <InfoBuyer post={post} user={user}/>
                </Modal>
            )}

            <div className={cx("dev-form-group")}>
                <div className={cx("title")}>{post.title}</div>
            </div>
            <div className={cx("dev-form-group")}>
                <div className={cx("info")}>{post.description}</div>
            </div>
            <div className={cx("dev-form-group")}>
                <div className={cx("price")}>
                    <span className={cx("sale-price")}>
                        ₫{format(Math.floor(post.price * 1.1))}
                    </span>
                    <span className={cx("price-product")}>
                        ₫{format(post.price)}
                    </span>
                </div>
            </div>
            <div className={cx("dev-form-group")}>
                <button
                    className={cx("dev-btn-bg", "btn-buy")}
                    onClick={eventBuyProduct}
                >
                    Mua Ngay
                </button>
            </div>
        </div>
    );
}

export default InfoProduct;
