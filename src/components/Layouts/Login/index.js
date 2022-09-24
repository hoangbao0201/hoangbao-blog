import classNames from "classnames/bind";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "~/context/authContext";
import { iconEyeHidden, iconEyeShow } from "~/public/imgSvg";
import WarningForm from "../WarningForm";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
    const { loginUser } = useContext(AuthContext);

    const [checkInput, setCheckInput] = useState({});
    const [showPass, setShowPass] = useState(false);
    const [valueAlert, setValueAlert] = useState(null);
    const [valueInput, setValueInput] = useState({
        username: "",
        password: "",
    });

    const EventOnChangeInput = (e) => {
        setValueInput({
            ...valueInput,
            [e.target.name]: e.target.value,
        });
    };

    const EventSubmitForm = async (e) => {
        e.preventDefault();

        const dataServer = await loginUser({
            username: `${valueInput.username}`,
            password: `${valueInput.password}`,
        });

        if (!dataServer.success) {
            // setCheckInput(dataServer.warning);
            setValueAlert(dataServer.msg);

            setTimeout(() => {
                setValueAlert(null);
            }, 6000);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <form className={cx("form")} onSubmit={EventSubmitForm}>
                    <div className={cx("title")}>Đăng nhập</div>
                    <div className={cx("dev-form-group")}>
                        <div className={cx("dev-title-stick-input")}>
                            Tài khoản
                        </div>
                        <input
                            type="text"
                            className={cx(
                                "dev-form-input",
                                `${
                                    checkInput.username === valueInput.username
                                        ? "dev-warning-input"
                                        : ""
                                }`
                            )}
                            // placeholder="Tài khoản"
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
                            className={cx(
                                "dev-form-input",
                                `${
                                    checkInput.password
                                        ? "dev-warning-input"
                                        : ""
                                }`
                            )}
                            // placeholder="Mật khẩu"
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
                    <div className={cx("dev-form-group", "forgot-password")}>
                        <Link to="/auth/forgot-password">Quên mật khẩu?</Link>
                    </div>
                    <div className={cx("dev-form-group", "dev-warning")}>
                        {/* {valueAlert} */}
                        {valueAlert && <WarningForm>{valueAlert}</WarningForm>}
                    </div>
                    <div className={cx("dev-form-group")}>
                        <button
                            type="submit"
                            className={cx(
                                "dev-btn-auto",
                                "button-submit-login"
                            )}
                        >
                            Đăng nhập
                        </button>
                    </div>
                    <div className={cx("dev-form-group")}>
                        <Link to="/auth/register" style={{ flex: "1" }}>
                            <button
                                className={cx(
                                    "dev-btn-auto",
                                    "button-submit-register"
                                )}
                            >
                                Đăng ký
                            </button>
                        </Link>
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

export default Login;
