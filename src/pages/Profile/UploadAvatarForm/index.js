import { useContext, useState } from "react";
import Progress from "~/components/Layouts/Progress";
import Spinner from "~/components/Layouts/Spinner";
import { AuthContext } from "~/context/authContext";
import { avatarDefault, iconCamera } from "~/public/imgSvg";

import classNames from "classnames/bind";
import styles from "./UploadAvatar.module.scss";

const cx = classNames.bind(styles);

function UploadAvatar({ uploadAvatar }) {
    const {
        state: { authLoading, user },
    } = useContext(AuthContext);

    const [isSpinner, setIsSpinner] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [singleProgress, setSingleProgress] = useState(0);
    const [valueInput, setValueInput] = useState(null);
    const [dataImage, setDataImage] = useState(null);

    const onchangeValueInput = (e) => {
        const fileImage = e.target.files[0];

        setValueInput(URL.createObjectURL(fileImage));
        setDataImage(fileImage);
        setSingleProgress(0);
        setShowAlert(null);
    };

    const uploadSingleFile = {
        onUploadProgress: (progressEvent) => {
            let { loaded, total } = progressEvent;

            const percent = Math.floor((loaded / total) * 100);

            console.log( `${loaded}kb of ${total}kb | ${percent}%` );

            setSingleProgress(percent);
        },
    };

    const onSubmitFormUpload = async (e) => {
        e.preventDefault();
        setIsSpinner(true);

        if(!dataImage) {
            setShowAlert("Bạn chưa upload ảnh");
            setIsSpinner(false);

            setTimeout(() => {
                setShowAlert(null);
            }, 6000);
            return
        }

        const formData = new FormData();
        formData.append("file", dataImage);

        const dataServer = await uploadAvatar(formData, uploadSingleFile);

        setIsSpinner(false);
        window.location.reload();
        console.log(dataServer);
    };

    let body = null;
    if (authLoading) {
        body = <Spinner size="sm" />;
    } else {
        if (!valueInput && !user.avatar.url) {
            body = <>{avatarDefault}</>;
        }
        if (!valueInput && user.avatar.url) {
            body = (
                <img
                    src={user.avatar.url}
                    alt="avatar upload"
                    style={{ width: "100%" }}
                />
            );
        } else {
            if (valueInput) {
                body = (
                    <img
                        src={valueInput}
                        alt="avatar default"
                        style={{ width: "100%" }}
                    />
                );
            }
        }
    }

    return (
        <div className={cx("wrapper")}>
            <input
                id="input-avatar"
                name="file"
                type="file"
                onChange={onchangeValueInput}
                style={{ display: "none" }}
            />

            <label className={cx("form-avatar")} htmlFor="input-avatar">
                <div className={cx("grid-avatar")}>{body}</div>
                <div className={cx("icon-camera")}>{iconCamera}</div>
            </label>
            {!authLoading && <div className={cx("form-name")}>{user.name}</div>}

            <Progress size="lg" now={singleProgress} />

            { showAlert && <p className={cx("dev-warning")}>{showAlert}</p> }

            <button
                className={cx("dev-btn-lg", "btn-submit-avatar", "dev-btn-action-sky")}
                onClick={onSubmitFormUpload}
                disabled={isSpinner ? "disabled" : ""}
            >
                { isSpinner ? <Spinner size="sm"/> : "Upload" }
            </button>
        </div>
    );
}

export default UploadAvatar;
