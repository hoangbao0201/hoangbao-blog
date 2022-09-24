import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./FormNumberProduct.module.scss";

const cx = classNames.bind(styles);

function FormNumberProduct({ initial, action }) {
    const [isValue, setIsValue] = useState(initial || 0);

    const eventUpNumber = () => {
        setIsValue(isValue + 1);
    };

    const eventDownNumber = () => {
        if (isValue > 0) {
            setIsValue(isValue - 1);
        }
    };

    useEffect(() => {
        action(isValue);
    }, [isValue])

    return (
        <div className={cx("form-quatity-buy")}>
            <button
                className={cx(
                    "btn-form",
                    "down",
                    `${isValue > 0 ? "" : "btn-disabled"}`
                )}
                onClick={eventDownNumber}
            >
                <svg viewBox="0 0 10 10" x="0" y="0">
                    <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                </svg>
            </button>
            <input
                className={cx("box-number", "numbers")}
                value={isValue}
                onChange={(e) =>
                    setIsValue(
                        e.target.value == 0 ? 0 : parseInt(e.target.value)
                    )
                }
            />
            <button className={cx("btn-form", "up")} onClick={eventUpNumber}>
                <svg viewBox="0 0 10 10" x="0" y="0">
                    <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                </svg>
            </button>
        </div>
    );
}

export default FormNumberProduct;
