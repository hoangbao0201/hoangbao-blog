import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ children, size, action, variant, disabled }) {

    const eventSubmitButton = () => {
        action();
    }

    return (
        <button
            className={cx(
                "button",
                `${size ? "size-" + size : ""}`,
                `${disabled ? "disabled" : ""}`,
                `${variant ? "variant-" + variant : ""}`,
            )}
            disabled={disabled || ""}
            onClick={eventSubmitButton}
        >
            {children}
        </button>
    );
}

export default Button;
