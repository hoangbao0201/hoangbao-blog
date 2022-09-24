import classNames from "classnames/bind";
import Devider from "../Devider";
import StickBadge from "../StickBadge";
import styles from "./CardProduct.module.scss";

const cx = classNames.bind(styles);

function CardProduct({ post, id }) {

    return (
        <div className={cx("product")}>
            <a href={`/product/${id}`}>
                <div className={cx("grid-item", "dev-card")}>
                    <StickBadge>new product</StickBadge>
                    <div className={cx("grid-image")}>
                        {post.avatar ? (
                            <img
                                className={cx("image-card")}
                                src={post.avatar}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className={cx("content-card")}>
                        <div className={cx("title")}>
                            {post ? post.title : "title"}
                        </div>
                        <div className={cx("description")}>
                            {post ? post.description : "description"}
                        </div>
                        <Devider />
                        <div className={cx("information")}>
                            <div className={cx("price")}>
                                Price {post ? post.price : "1000"} ₫
                            </div>
                            <div className={cx("sold")}>
                                Sold {post ? post.sold : "1000"}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default CardProduct;
