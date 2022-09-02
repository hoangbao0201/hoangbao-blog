import classNames from "classnames/bind";
import { useContext, useState } from "react";
import { AuthContext } from "~/context/authContext";
import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

function Register() {
    const { registerUser } = useContext(AuthContext);

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
                            <input
                                type="text"
                                className={cx(
                                    "form-input",
                                    // `${inputWarning == "name" ? "warning" : ""}`
                                )}
                                placeholder="Họ"
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
                            <input
                                type="text"
                                className={cx(
                                    "form-input",
                                )}
                                placeholder="Tên"
                                required
                                name="name"
                                value={valueInput.name}
                                onChange={EventOnChangeInput}
                            />
                        </div>
                    </div>
                    <div className={cx("dev-form-group")}>
                        <input
                            type="text"
                            className={cx(
                                "form-input",
                            )}
                            placeholder="Tài khoản"
                            required
                            name="username"
                            value={valueInput.username}
                            onChange={EventOnChangeInput}
                        />
                    </div>
                    <div className={cx("dev-form-group")}>
                        <input
                            type="password"
                            className={cx(
                                "form-input",
                            )}
                            placeholder="Mật khẩu"
                            required
                            name="password"
                            value={valueInput.password}
                            onChange={EventOnChangeInput}
                        />
                    </div>
                    <div className={cx("dev-form-group")}>
                        <input
                            type="password"
                            className={cx(
                                "form-input",
                            )}
                            placeholder="Nhập lại mật khẩu"
                            required
                            name="rePassword"
                            value={valueInput.rePassword}
                            onChange={EventOnChangeInput}
                        />
                    </div>
                    <div className={cx("dev-form-group", "dev-warning")}>
                        {valueAlert}
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
