import classNames from 'classnames/bind'
import { useState } from 'react';
import { iconCamera, iconPlus } from '~/public/imgSvg';
import styles from './SingleImage.module.scss';

const cx = classNames.bind(styles);

function SingleImage({ variant, upload, size }) {

    let classed_variant = "form-square";
    let classed_size = "size-sm";
    if(variant) {
        classed_variant = `form-${variant}`;
    }
    if(size) {
        classed_size = `size-${size}`;
    }


    // Set value input
    const [valueInput, setValueInput] = useState(null);
    const onchangeValueInput = (e) => {
        const fileImage = e.target.files[0];

        setValueInput(URL.createObjectURL(fileImage));
        upload(fileImage);
    };


    // Set body
    let body = null;
    if (!valueInput) {
        body = <>{iconPlus}</>;
    } else {
        body = (
            <img
                src={valueInput}
                alt="avatar default"
                style={{ width: "100%" }}
            />
        );
    }

    return (
        <>
            <div className={cx("wrapper", classed_variant, classed_size)}>
                <input
                    id="input-image"
                    name="file"
                    type="file"
                    onChange={onchangeValueInput}
                    style={{ display: "none" }}
                />

                <label className={cx("form-image")} htmlFor="input-image">
                    <div className={cx("grid-image")}>{body}</div>
                    <div className={cx("icon-camera")}>{iconCamera}</div>
                </label>
            </div>
        </>
    );
}

export default SingleImage;