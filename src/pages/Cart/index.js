import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "~/components/Layouts/Button";
import TitlePage from "~/components/Layouts/TitlePage";
import { AuthContext } from "~/context/authContext";
import { PostContext } from "~/context/postContext";
import { format } from "~/utils/formatNumber";
import styles from "./Cart.module.scss";
import CartAdmin from "./CartAdmin";

const cx = classNames.bind(styles);

function Cart() {
    const navigate = useNavigate();

    const {
        state: { admin, authLoading, user, isAuthenticated },
    } = useContext(AuthContext);
    const {
        state: { cart, postLoading },
        getCart,
        deleteCart,
    } = useContext(PostContext);

    const eventDetroyCart = async (cartId) => {
        const dataServerDeleteCart = await deleteCart(cartId);

        if (dataServerDeleteCart.success) {
            window.location.reload();
        }
    };

    useEffect(() => {
        if (!authLoading) {
            getCart();
        }
    }, [user]);

    let body = null;
    if (postLoading) {
        return;
    } else {
        if (admin) {
            return <CartAdmin cart={cart} action={eventDetroyCart} />;
        } else if (cart.length > 0) {
            body = (
                <>
                    {cart.map((item, index) => {
                        return (
                            <tr key={index} style={{backgroundColor: `${index%2===0 && "#eeee"}`}}>
                                <td className={cx("product")}>
                                    {item.post.title}
                                </td>
                                <td className={cx("price")}>
                                    {item.post.price}
                                </td>
                                <td className={cx("amount")}>{item.amount}</td>
                                <td className={cx("money")}>
                                    {`${format(item.amount * item.post.price)}`}
                                </td>
                                <td className={cx("touch")}>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        action={() => eventDetroyCart(item._id)}
                                    >
                                        DELETE
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}

                    {/* <tr>
                        <td colSpan={5}>{}</td>
                    </tr> */}
                </>
            );
        } else {
            body = (
                <tr>
                    <td colSpan={5}>Bạn chưa đặt sản phẩm nào</td>
                </tr>
            );
        }
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("dev-container-lg", "container")}>
                <TitlePage>Giỏ hàng</TitlePage>
                <div className={cx("grid-table")}>
                    <table className={cx("table")}>
                        <tbody>
                            <tr>
                                <th className={cx("product")}>Sản phẩm</th>
                                <th className={cx("price")}>Đơn giá</th>
                                <th className={cx("amount")}>Số lượng</th>
                                <th className={cx("money")}>Số tiền</th>
                                <th className={cx("manipulation")}>Thao tác</th>
                            </tr>
                            {body}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;
