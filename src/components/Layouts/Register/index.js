import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/context/authContext";
import { iconEyeHidden, iconEyeShow } from "~/public/imgSvg";
import WarningForm from "../WarningForm";
import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

function Register() {
    const { registerUser } = useContext(AuthContext);

    const [showPass, setShowPass] = useState(false);
    const [valueAlert, setValueAlert] = useState(null);
    // const [inputWarning, setInputWarning] = useState(null);
    const [valueInput, setValueInput] = useState({
        surname: "",
        name: "",
        username: "",
        password: "",
        rePassword: "",
    });

    const EventOnChangeInput = (e) => {
        setValueInput({
            ...valueInput,
            [e.target.name]: e.target.value,
        });
    };

    const EventSubmitForm = async (e) => {
        e.preventDefault();
        const dataServer = await registerUser({
            name: `${valueInput.surname} ${valueInput.name}`,
            username: `${valueInput.username}`,
            password: `${valueInput.password}`,
            rePassword: `${valueInput.rePassword}`,
        });

        if (!dataServer.success) {
            setValueAlert(dataServer.msg);
            // setInputWarning(dataServer.type);

            setTimeout(() => {
                setValueAlert(null);
                // setInputWarning(null);
            }, 6000);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <form className={cx("form")} onSubmit={EventSubmitForm}>
                    <div className={cx("title")}>Đăng kí tài khoản</div>
                    <div className={cx("form-group-row")}>
                        <div
                            className={cx(
                                "dev-form-group",
                                "grid-input-item",
                                "form-left"
                            )}
                        >
                            <div className={cx("dev-title-stick-input")}>
                                Họ
                            </div>
                            <input
                                type="text"
                                className={cx(
                                    "dev-form-input"
                                    // `${inputWarning == "name" ? "warning" : ""}`
                                )}
                                // placeholder="Nguyễn Hoàng"
                                required
                                name="surname"
                                value={valueInput.surname}
                                onChange={EventOnChangeInput}
                            />
                        </div>
                        <div
                            className={cx(
                                "dev-form-group",
                                "grid-input-item",
                                "form-right"
                            )}
                        >
                            <div className={cx("dev-title-stick-input")}>
                                Tên
                            </div>
                            <input
                                type="text"
                                className={cx("dev-form-input")}
                                // placeholder="Bảo"
                                required
                                name="name"
                                value={valueInput.name}
                                onChange={EventOnChangeInput}
                            />
                        </div>
                    </div>
                    <div className={cx("dev-form-group")}>
                        <div className={cx("dev-title-stick-input")}>
                            Tài khoản
                        </div>
                        <input
                            type="text"
                            className={cx("dev-form-input")}
                            // placeholder="hoangbao"
                            required
                            name="username"
                            value={valueInput.username}
                            onChange={EventOnChangeInput}
                        />
                    </div>
                    <div className={cx("dev-form-group")}>
                        <div className={cx("dev-title-stick-input")}>
                            Mật khẩu
                        </div>
                        <input
                            type={showPass ? "text" : "password"}
                            className={cx("dev-form-input")}
                            // placeholder="..."
                            required
                            name="password"
                            value={valueInput.password}
                            onChange={EventOnChangeInput}
                        />
                        <span
                            className={cx("icon-show-pass")}
                            onClick={() => setShowPass(!showPass)}
                        >
                            {showPass ? iconEyeShow : iconEyeHidden}
                        </span>
                    </div>
                    <div className={cx("dev-form-group")}>
                        <div className={cx("dev-title-stick-input")}>
                            Nhập lại mật khẩu
                        </div>
                        <input
                            type={showPass ? "text" : "password"}
                            className={cx("dev-form-input")}
                            // placeholder="..."
                            required
                            name="rePassword"
                            value={valueInput.rePassword}
                            onChange={EventOnChangeInput}
                        />
                    </div>
                    <div className={cx("dev-form-group", "dev-warning")}>
                        {valueAlert && <WarningForm>{valueAlert}</WarningForm>}
                    </div>
                    <div className={cx("dev-form-group")}>
                        <button
                            type="submit"
                            className={cx(
                                "dev-btn-auto",
                                "button-submit-register"
                            )}
                        >
                            Đăng kí
                        </button>
                    </div>

                    <div className={cx("dev-form-group", "text-or")}>
                        ---hoặc---
                    </div>
                    <div className={cx("dev-form-group", "login-with-social")}>
                        <button className={cx("dev-btn-lg", "button-login-fb")}>
                            Facebook
                        </button>
                        <button className={cx("dev-btn-lg", "button-login-gg")}>
                            Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
