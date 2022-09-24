import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "~/components/Layouts/Modal";
// import Modal from "~/components/Layouts/Modal";
import Sidebar from "~/components/Layouts/Sidebar";
import Spinner from "~/components/Layouts/Spinner";
import { AuthContext } from "~/context/authContext";
// import Spinner from "~/components/Layouts/Spinner";
import { PostContext } from "~/context/postContext";
import styles from "./Dashboard.module.scss";

const cx = classNames.bind(styles);

function Dashboard() {
    const navigate = useNavigate();
    const { state: { authLoading, isAuthenticated } } = useContext(AuthContext);
    const {
        state: { postLoading, posts, admin },
        getAllPosts,
        deletePost,
    } = useContext(PostContext);

    const [isModalDelete, setIsModalDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAllPosts();
    }, []);

    // Check btn action
    const btnDeletePost = (post) => {
        setIsModalDelete(post);
    };

    const eventDeletePost = async (post) => {
        setIsLoading(true);

        const dataServerDeletePost = await deletePost(post._id);

        setIsLoading(false);
    };

    let body = null;

    if (postLoading) {
        body = (
            <tr>
                <td colSpan={7}></td>
            </tr>
        );
    } else {
        if (posts.length === 0) {
            body = (
                <tr>
                    <td colSpan={7}>Bạn chưa đăng tải sản phẩm nào</td>
                </tr>
            );
        } else {
            body = (
                <>
                    {posts.map((post, index) => {
                        return (
                            <tr key={index} style={{backgroundColor: `${index%2===0 && "#eeee"}`}}>
                                <td>
                                    <div className={cx("content-td")}>
                                        {index + 1}
                                    </div>
                                </td>
                                <td>
                                    <div className={cx("content-td")}>
                                        {post._id}
                                    </div>
                                </td>
                                <td>
                                    <div className={cx("content-td")}>
                                        {post.title}
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className={cx(
                                            "value-description",
                                            "content-td"
                                        )}
                                    >
                                        {post.description}
                                    </div>
                                </td>
                                <td>
                                    <div className={cx("content-td")}>
                                        {post.price}
                                    </div>
                                </td>
                                <td>{post.sold}</td>
                                <td>
                                    <button
                                        className={cx(
                                            "dev-btn-sm",
                                            "btn-action-edit"
                                        )}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className={cx(
                                            "dev-btn-sm",
                                            "btn-action-delete"
                                        )}
                                        onClick={() => btnDeletePost(post)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </>
            );
        }
    }

    return (
        <div className={cx("content")}>
            {isLoading && <Spinner modal size="auto" />}

            {/* Show modal delete */}
            {isModalDelete && (
                <Modal
                    align="top"
                    action={setIsModalDelete}
                    title="Bạn có chắc chắn muốn xóa sản phẩm"
                >
                    <div className={cx("dev-form-group")}>
                        Id sản phẩm: <span> {isModalDelete._id}</span>
                    </div>
                    <div className={cx("dev-form-group")}>
                        Tên sản phẩm: <span> {isModalDelete.title}</span>
                    </div>
                    <div className={cx("dev-form-group", "modal-list-btn")}>
                        <button
                            className={cx("dev-btn-lg", "modal-action-delete")}
                            onClick={() => eventDeletePost(isModalDelete)}
                        >
                            Xóa
                        </button>
                        <button
                            className={cx("dev-btn-lg", "modal-action-close")}
                            onClick={() => setIsModalDelete(false)}
                        >
                            Thoát
                        </button>
                    </div>
                </Modal>
            )}

            <div className={cx("wrapper", "dev-container-lg")}>
                <div className={cx("grid-table")}>
                    <table className={cx("table")}>
                        <tbody>
                            <tr>
                                <th className={cx("first")}>First</th>
                                <th className={cx("id")}>Id</th>
                                <th className={cx("title")}>Title</th>
                                <th className={cx("description")}>Description</th>
                                <th className={cx("price")}>Price</th>
                                <th className={cx("sold")}>Sold</th>
                                <th className={cx("edit")}>Edit</th>
                            </tr>
                            {body}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
