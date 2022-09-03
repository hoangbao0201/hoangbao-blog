import classNames from "classnames/bind";
import Devider from "../Devider";
import StickBadge from "../StickBadge";
import styles from "./CardProduct.module.scss";

const cx = classNames.bind(styles);

function CardProduct() {
    return (
        <div className={cx("product")}>
            <a href="/product:100083">
                <div className={cx("grid-item", "dev-card")}>
                    <StickBadge>new product</StickBadge>
                    <div className={cx("grid-image")}></div>
                    <div className={cx("content-card")}>
                        <div className={cx("title")}>
                            C++ cho người mới bắt đầu
                        </div>
                        <div className={cx("description")}>
                            Khóa học lập trình C++ cơ bản cho người mới bắt đầu.
                            Khóa học này sẽ cung cấp những kiến thức cơ bản, dễ
                            hiểu nhất về ngôn ngữ lập trình C++.
                        </div>
                        <Devider />
                        <div className={cx("information")}>
                            <div className={cx("price")}>Price 200.000 ₫</div>
                            <div className={cx("sold")}>Sold 120</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default CardProduct;
