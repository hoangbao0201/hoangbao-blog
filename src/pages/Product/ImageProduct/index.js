import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./ImageProduct.module.scss";

const cx = classNames.bind(styles);

function ImageProduct({ post }) {
    const [avatarProduct, setAvatarProduct] = useState(post.avatar);
    const [changeOptionImage, setChangeOptionImage] = useState(0);

    const eventChangeImage = (e, image) => {
        setAvatarProduct(image);
        setChangeOptionImage(e.target.id);
    };

    return (
        <>
            <div className={cx("avatar-image")} >
                <img src={avatarProduct} alt="image" />
            </div>
            <div className={cx("list-images")}>
                <div
                    id="0"
                    className={cx(
                        "grid-image",
                        `${changeOptionImage == 0 ? "active" : ""}`
                    )}
                    style={{
                        backgroundImage: `url(${post.avatar})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}
                    onClick={(e) => eventChangeImage(e, post.avatar)}
                ></div>
                {post.listImages.length > 0 &&
                    post.listImages.map((image, index) => {
                        return (
                            <div
                                key={index}
                                id={index + 1}
                                className={cx(
                                    "grid-image",
                                    `${
                                        changeOptionImage == index + 1
                                            ? "active"
                                            : ""
                                    }`
                                )}
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                }}
                                onClick={(e) => eventChangeImage(e, image)}
                            ></div>
                        );
                    })}
            </div>
        </>
    );
}

export default ImageProduct;
