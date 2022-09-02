import classNames from "classnames/bind";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "~/context/authContext";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
    const { loginUser } = useContext(AuthContext);

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
                        <input
                            type="text"
                            className={cx("form-input")}
                            placeholder="Tài khoản"
                            required
                            name="username"
                            value={valueInput.username}
                            onChange={EventOnChangeInput}
                        />
                    </div>
                    <div className={cx("dev-form-group")}>
                        <input
                            type={showPass ? "text" : "password"}
                            className={cx("form-input")}
                            placeholder="Mật khẩu"
                            required
                            name="password"
                            value={valueInput.password}
                            onChange={EventOnChangeInput}
                        />
                        <span className={cx("icon-show-pass")} onClick={() => setShowPass(!showPass)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="8"
                                viewBox="0 0 18 8"
                                fill="none"
                            >
                                <path
                                    d="M16.8761 2.06462L17.0029 1.98096C17.2497 1.81028 17.3077 1.4733 17.1369 1.22814C16.9646 0.980801 16.6257 0.924978 16.3841 1.09332C7.92876 7.00479 1.77389 1.38425 1.51532 1.14273C1.29713 0.938532 0.953295 0.948881 0.750115 1.16576C0.545914 1.38352 0.555826 1.72414 0.771832 1.92907C0.783493 1.94015 0.976033 2.11637 1.32744 2.37712L0.244351 4.16333C0.0898519 4.4181 0.170891 4.75071 0.425813 4.90652C0.512974 4.959 0.611941 4.98538 0.707701 4.98538C0.889747 4.98538 1.06698 4.89282 1.17003 4.72623L2.22908 2.98112C2.82288 3.34259 3.58429 3.73729 4.49146 4.07077L3.96952 5.81574C3.88309 6.10302 4.04473 6.40268 4.33026 6.4881L4.48592 6.51112C4.71665 6.51112 4.93237 6.35954 5.00262 6.12502L5.51946 4.40397C6.35681 4.63295 7.29357 4.78759 8.30452 4.82432V6.55266C8.30452 6.85175 8.54603 7.09326 8.84512 7.09326C9.14391 7.09326 9.38557 6.85175 9.38557 6.55266V4.8147C10.2677 4.76631 11.2025 4.61458 12.1786 4.33619L12.844 6.09077C12.9269 6.30692 13.1325 6.43927 13.3495 6.43927L13.5407 6.40516C13.8198 6.29905 13.9614 5.98729 13.8552 5.70831L13.2074 3.99877C14.0962 3.66864 15.0149 3.234 15.9637 2.6574L16.8395 3.82649C16.9462 3.96773 17.109 4.04352 17.2717 4.04352C17.3851 4.04352 17.4984 4.00912 17.5956 3.93493C17.8352 3.75565 17.8836 3.41678 17.7052 3.17818L16.8761 2.06462Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className={cx("dev-form-group", "forgot-password")}>
                        <Link to="/auth/forgot-password">Quên mật khẩu?</Link>
                    </div>
                    <div className={cx("dev-form-group", "dev-warning")}>
                        {valueAlert}
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
