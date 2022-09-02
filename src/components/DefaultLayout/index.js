import classNames from "classnames/bind";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Sidebar from "../Layouts/Sidebar";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <nav className={cx("nav-top")}></nav>
            <Header />
            <div className={cx("content")}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
