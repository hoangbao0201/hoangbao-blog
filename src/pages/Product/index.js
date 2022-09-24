import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "~/components/Layouts/Spinner";
import { PostContext } from "~/context/postContext";
import ImageProduct from "./ImageProduct";

import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import InfoProduct from "./InfoProduct";

const cx = classNames.bind(styles);

function Product() {
    const params = useParams();

    const {
        state: { post, postLoading },
        getPost,
    } = useContext(PostContext);

    useEffect(() => {
        getPost(params.id);
    }, []);

    let body = null;
    if (postLoading) {
        // body = <Spinner size="auto" />;
        return
    } else {
        body = (
            <>
                <div className={cx("content-image")}>
                    <ImageProduct post={post} />
                </div>
                <div className={cx("content-information")}>
                    <InfoProduct post={post} />
                </div>
            </>
        );
    }

    return (
        <div className={cx("wrapper", "dev-container-lg")}>
            <div className={cx("container")}>{body}</div>
        </div>
    );
}

export default Product;
