import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./ContentUpload.module.scss";
import Spinner from "~/components/Layouts/Spinner";

const cx = classNames.bind(styles);

function ContentUpload({ user, updateUser }) {

    const [formWarning, setFormWarning] = useState(null)
    const [showSpinner, setShowSpinner] = useState(false);
    const [valueInput, setValueInput] = useState({
        name: user.name,
        username: user.username,
        oldPassword: "",
        newPassword: "",
    });

    const EventOnChangeInput = (e) => {
        setValueInput({
            ...valueInput,
            [e.target.name]: e.target.value,
        });
    };

    const EventSubmitForm = async (e) => {
        e.preventDefault();
        setShowSpinner(true);

        const dataServer = await updateUser(valueInput);

        setShowSpinner(false)

        if(!dataServer.success) {
            setFormWarning(dataServer.msg);

            setTimeout(() => {
                setFormWarning(null)
            }, 5000);
        }

    };

    return (
        <div className={cx("wrapper")}> 
            {showSpinner && <Spinner size="lg" modal/>}
            <form className={cx("form")} onSubmit={EventSubmitForm}>
                <div className={cx("title")}>Thông tin</div>
                <div className={cx("dev-form-group", "form-group-input")}>
                    <div className={cx("dev-title-input")}>Tên:</div>
                    <input
                        type="text"
                        className={cx("form-input")}
                        required
                        placeholder={valueInput.name}
                        name="name"
                        value={valueInput.name}
                        onChange={EventOnChangeInput}
                    />
                </div>
                <div className={cx("dev-form-group", "form-group-input")}>
                    <div className={cx("dev-title-input")}>Tài khoản:</div>
                    <input
                        type="text"
                        className={cx("form-input")}
                        required
                        placeholder={valueInput.username}
                        name="username"
                        value={valueInput.username}
                        onChange={EventOnChangeInput}
                    />
                </div>
                <div className={cx("dev-form-group", "form-group-input")}>
                    <div className={cx("dev-title-input")}>Mật khẩu cũ:</div>
                    <input
                        type="password"
                        className={cx("form-input")}
                        required
                        name="oldPassword"
                        onChange={EventOnChangeInput}
                    />
                </div>
                <div className={cx("dev-form-group", "form-group-input")}>
                    <div className={cx("dev-title-input")}>Mật khẩu mới:</div>
                    <input
                        type="password"
                        className={cx("form-input")}
                        required
                        name="newPassword"
                        onChange={EventOnChangeInput}
                    />
                </div>
                <div className={cx("dev-form-group", "dev-warning")}>
                    {formWarning}
                </div>
                <div className={cx("dev-form-group")}>
                    <button
                        className={cx(
                            "dev-btn-auto",
                            "dev-btn-action-sky",
                            "btn-upload"
                        )}
                        type="submit"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContentUpload;
