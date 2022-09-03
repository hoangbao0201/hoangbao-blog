import classNames from "classnames/bind";
import { iconPlus } from "~/public/imgSvg";
import styles from "./UploadImageForm.module.scss";

const cx = classNames.bind(styles);

function UploadImageForm({ children }) {
    return (
        <>
            <input id="file-upload-image" type="file" style={{display: "none"}}/>
            <label className={cx("grid-image")} htmlFor="file-upload-image">
                <i className={cx("icon-plus")}>{iconPlus}</i>
            </label>
        </>
    );
}

export default UploadImageForm;
