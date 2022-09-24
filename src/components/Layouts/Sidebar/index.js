import { iconPlus } from "~/public/imgSvg";

import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(styles);

function Sidebar() {
    const navigate = useNavigate();

    const [isModal, setIsModal] = useState(false);

    const pageCreatePost = () => {
        navigate("/create/post");
    };

    return (
        <>
            {isModal && (
                <Modal title="Tạo sản phẩm" action={setIsModal}>
                    nguyen
                </Modal>
            )}
            <div className={cx("sidebar")}>
                <div className={cx("list-item")}>
                    <div className={cx("item-btn-sidebar")}>
                        <div
                            className={cx(
                                "create-post",
                                `${isModal ? "active" : ""}`
                            )}
                            onClick={() => setIsModal(!isModal)}
                        >
                            {iconPlus}
                        </div>
                    </div>

                    <div className={cx("item-sidebar")}>Create</div>
                    <div className={cx("item-sidebar")}>Shop</div>
                    <div className={cx("item-sidebar")}>Rating</div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
