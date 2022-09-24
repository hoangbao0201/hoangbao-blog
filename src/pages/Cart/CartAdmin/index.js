import classNames from "classnames/bind";
import Button from "~/components/Layouts/Button";
import TitlePage from "~/components/Layouts/TitlePage";
import { format } from "~/utils/formatNumber";
import styles from "./CartAdmin.module.scss";

const cx = classNames.bind(styles);

function CartAdmin({ cart, action }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("dev-container-lg", "container")}>
                <TitlePage>Giỏ hàng</TitlePage>
                <div className={cx("grid-table")}>
                    <table className={cx("table")}>
                        <tbody>
                            <tr>
                                <th className={cx("name")}>Người mua</th>
                                <th className={cx("product")}>Sản phẩm</th>
                                <th className={cx("amount")}>Số lượng</th>
                                <th className={cx("money")}>Số tiền</th>
                                <th className={cx("moreInfo")}>Lời nhắc</th>
                                <th className={cx("manipulation")}>Thao tác</th>
                            </tr>
    
                            <>
                                {cart.map((product, index) => {
                                    return (
                                        <tr className={cx()} key={index} style={{backgroundColor: `${index%2==0 && "#eeee"}`}}>
                                            <td className={cx("name")}>
                                                {product.name}
                                            </td>
                                            <td className={cx("product")}>
                                                {product.post.title}
                                            </td>
                                            <td className={cx("amount")}>
                                                {product.amount}
                                            </td>
                                            <td className={cx("money")}>{`${format(
                                                product.amount * product.post.price
                                            )} VNĐ`}</td>
                                            <td className={cx("moreInfo")}>
                                                {product.moreInfo}
                                            </td>
                                            <td className={cx("touch")}>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    action={() =>
                                                        action(product._id)
                                                    }
                                                >
                                                    DELETE
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CartAdmin;
