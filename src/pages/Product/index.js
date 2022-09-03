import classNames from "classnames/bind";
import ImageForm from "./ImageForm";
import InfomationForm from "./InfomationForm";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx("wrapper", "dev-container-lg")}>
            <div className={cx("dev-content")}>
                <div className={cx("content-image")}>
                    <ImageForm />
                </div>
                <div className={cx("content-information")}>
                    <InfomationForm />
                </div>
            </div>
        </div>
    );
}

export default Product;
