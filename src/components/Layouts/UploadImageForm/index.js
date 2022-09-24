import classNames from "classnames/bind";
import { useContext, useState } from "react";
import { AuthContext } from "~/context/authContext";
import UploadAvatar from "~/pages/Profile/UploadAvatarForm";
import { iconCamera, iconPlus } from "~/public/imgSvg";
import Progress from "../Progress";
import Spinner from "../Spinner";
import styles from "./UploadImageForm.module.scss";

const cx = classNames.bind(styles);

function UploadImageForm({ variant, upload }) {

    let classed = "form-square";
    if(variant) {
        classed = `form-${variant}`;
    }

    const [valueInput, setValueInput] = useState(null);

    const onchangeValueInput = (e) => {
        const fileImage = e.target.files[0];

        setValueInput(URL.createObjectURL(fileImage));
        upload(fileImage);
    };

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
            <div className={cx("wrapper", classed)}>
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

export default UploadImageForm;
