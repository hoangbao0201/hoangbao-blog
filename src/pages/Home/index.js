import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import CardProduct from "~/components/Layouts/CardProduct";
import TitlePage from "~/components/Layouts/TitlePage";
import { useContext, useEffect } from "react";
import { PostContext } from "~/context/postContext";
import Spinner from "~/components/Layouts/Spinner";
import Button from "~/components/Layouts/Button";

const cx = classNames.bind(styles);

function Home() {
    const {
        state: { posts, postLoading },
        getAllPosts,
    } = useContext(PostContext);

    useEffect(() => {
        getAllPosts();
    }, []);

    let body = null;
    if (postLoading) {
        // body = <Spinner size="auto" />;
        return
    } else {
        if (posts.length === 0) {
            body = <div>Chưa có sản phẩm nào</div>;
        } else {
            body = (
                <>
                    {posts.map((post, index) => {
                        return (
                            <CardProduct
                                key={index}
                                post={post}
                                id={post._id}
                            />
                        );
                    })}
                </>
            );
        }
    }

    return (
        <div className={cx("wrapper", "dev-container-lg")}>
            <TitlePage>Các sản phẩm</TitlePage>

            {/* <Spinner modal size="auto"/> */}

            <div className={cx("list-product")}>
                {body}
                {body}
                {body}
                {body}
                {body}
            </div>
        </div>
    );
}

export default Home;
