import Sidebar from "~/components/Layouts/Sidebar";

import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import CardProduct from "~/components/Layouts/CardProduct";
import TitlePage from "~/components/Layouts/TitlePage";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("wrapper", "dev-container-lg")}>
            <TitlePage>Các sản phẩm</TitlePage>
            <div className={cx("list-product", "dev-content")}>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div>
    );
}

export default Home;
