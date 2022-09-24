import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import TitlePage from "~/components/Layouts/TitlePage";
import { format } from "~/utils/formatNumber";
import styles from "./ContentCreate.module.scss";

const cx = classNames.bind(styles);

function ContentCreate({ setContentInfo }) {
    const [valueAlert, setValueAlert] = useState(null);
    const [valueInput, setValueInput] = useState({
        title: "",
        description: "",
        price: "",
        totalProduct: "",
    });

    const EventOnChangeInput = (e) => {
        setValueInput({
            ...valueInput,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        setContentInfo(valueInput);
    }, [valueInput])

    return (
        <form className={cx("form")}>
            <div className={cx("dev-form-group")}>
                <TitlePage size="sm">Tiêu đề</TitlePage>
                <input
                    type="text"
                    className={cx("dev-form-input")}
                    placeholder="Tiêu đề"
                    required
                    name="title"
                    value={valueInput.title}
                    onChange={EventOnChangeInput}
                />
            </div>
            <div className={cx("dev-form-group")}>
                <textarea
                    type="text"
                    className={cx("dev-form-input", "input-description")}
                    placeholder="Mô tả"
                    required
                    name="description"
                    value={valueInput.description}
                    onChange={EventOnChangeInput}
                />
                {/* <textarea></textarea> */}
            </div>
            <div className={cx("dev-form-group")}>
                <input
                    type="text"
                    className={cx("dev-form-input")}
                    placeholder="Giá bán"
                    required
                    name="price"
                    value={valueInput.price}
                    onChange={EventOnChangeInput}
                />
            </div>
            <div className={cx("dev-form-group")}>
                <input
                    type="text"
                    className={cx("dev-form-input")}
                    placeholder="Số lượng sản phẩm"
                    required
                    name="totalProduct"
                    value={valueInput.totalProduct}
                    onChange={EventOnChangeInput}
                />
            </div>
        </form>
    );
}

export default ContentCreate;
