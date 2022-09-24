import classNames from "classnames/bind";
import styles from "./FormImage.module.scss";

const cx = classNames.bind(styles);

function FormImage({ listImages, variant, size, action }) {
    let classed_variant = "form-square";
    let classed_size = "size-sm";
    if (variant) {
        classed_variant = `form-${variant}`;
    }
    if (size) {
        classed_size = `size-${size}`;
    }

    return (
        <div className={cx("list-images", classed_size, classed_variant)}>
            {listImages.length > 0 &&
                listImages.map((image, index) => {
                    return (
                        <div className={cx("grid-image")} key={index}>
                            <img src={image} alt="image" />
                        </div>
                    );
                })}
        </div>
    );
}

export default FormImage;
