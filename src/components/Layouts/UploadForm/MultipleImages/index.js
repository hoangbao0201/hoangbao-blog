import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./MultipleImages.module.scss";

const cx = classNames.bind(styles);

function MultipleImages({ variant, upload, size }) {
    let classed_variant = "form-square";
    let classed_size = "size-sm";
    if (variant) {
        classed_variant = `form-${variant}`;
    }
    if (size) {
        classed_size = `size-${size}`;
    }

    // Set value input
    const [dataImages, setDataImages] = useState([]);
    const onchangeValueInput = (e) => {

        // Value input multiple files
        upload(e.target.files);

        // Array images URL
        let arrayImages = Object.entries(e.target.files).map((e) => {
            return URL.createObjectURL(e[1]);
        });

        setDataImages([...dataImages, ...arrayImages]);
    };

    return (
        <div className={cx("wrapper", classed_variant, classed_size)}>
            <div className={cx("dev-form-group")}>
                <input
                    id="input-image"
                    name="files"
                    type="file"
                    multiple
                    onChange={onchangeValueInput}
                    // style={{ display: "none" }}
                />
            </div>

            <div className={cx("list-images")}>
                {dataImages.length > 0 &&
                    dataImages.map((image, index) => {
                        return (
                            <div className={cx("grid-image")} key={index}>
                                <img src={image} alt="image" />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default MultipleImages;
