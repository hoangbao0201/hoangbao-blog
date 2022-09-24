import axios from "axios";
import classNames from "classnames/bind";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "~/components/Layouts/Spinner";
import TitlePage from "~/components/Layouts/TitlePage";
import MultipleImages from "~/components/Layouts/UploadForm/MultipleImages";
import SingleImage from "~/components/Layouts/UploadForm/SingleImage";
import UploadImageForm from "~/components/Layouts/UploadImageForm";
import WarningForm from "~/components/Layouts/WarningForm";
import { apiUrl } from "~/constants";
import { AuthContext } from "~/context/authContext";
import { PostContext } from "~/context/postContext";
import ContentCreate from "./ContentCreate";
import styles from "./CreatePost.module.scss";

const cx = classNames.bind(styles);

function CreatePost() {
    const navigate = useNavigate();
    const {
        state: { authLoading, isAuthenticated },
    } = useContext(AuthContext);
    const { createPost, uploadSingleImage, uploadMultipleImages } =
        useContext(PostContext);

    const [valueAlert, setValueAlert] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [contentInfo, setContentInfo] = useState(null);
    const [dataSingleImage, setDataSingleImage] = useState(null);
    const [dataMultipleImages, setDataMultipleImages] = useState(null);

    const submitFormUpload = async () => {
        setIsLoading(true);

        // Check data
        if (!dataSingleImage) {
            setValueAlert("Bạn chưa upload avatar sản phẩm");
            setTimeout(() => {
                setValueAlert(null);
            }, 6000);
            setIsLoading(false);
            return;
        }
        if (!contentInfo) {
            setValueAlert("Bạn chưa điền thông tin sản phẩm");
            setTimeout(() => {
                setValueAlert(null);
            }, 6000);
            setIsLoading(false);
            return;
        } else {
            if (!contentInfo.title) {
                setValueAlert("Bạn chưa điền tên sản phẩm");
                setTimeout(() => {
                    setValueAlert(null);
                }, 6000);
                setIsLoading(false);
                return;
            }
            if (!contentInfo.description) {
                setValueAlert("Bạn chưa điền thông tiên chi tiết sản phẩm");
                setTimeout(() => {
                    setValueAlert(null);
                }, 6000);
                setIsLoading(false);
                return;
            }
            if (!contentInfo.price) {
                setValueAlert("Bạn chưa điền giá sản phẩm");
                setTimeout(() => {
                    setValueAlert(null);
                }, 5000);
                setIsLoading(false);
                return;
            }
            if (!contentInfo.totalProduct) {
                setValueAlert("Bạn chưa điền số lượng sản phẩm");
                setTimeout(() => {
                    setValueAlert(null);
                }, 6000);
                setIsLoading(false);
                return;
            }
        }
        if (!Number.isInteger(parseInt(contentInfo.price))) {
            setValueAlert("Số lượng sản phẩm phải là số");
            setTimeout(() => {
                setValueAlert(null);
            }, 6000);
            setIsLoading(false);
            return;
        }

        let dataServerListImagesProduct;
        if (dataMultipleImages) {
            // Send request multiple images
            dataServerListImagesProduct = await uploadMultipleImages(
                dataMultipleImages
            );
        }
        if (!dataServerListImagesProduct.success) {
            setIsLoading(false);
            return;
        }

        // // Send request single image
        const dataServerAvatarProduct = await uploadSingleImage(
            dataSingleImage
        );
        if (!dataServerAvatarProduct.success) {
            setIsLoading(false);
            return;
        }

        // // // Send request data information
        const dataServer = await createPost({
            ...contentInfo,
            avatar: dataServerAvatarProduct.image,
            listImages: dataServerListImagesProduct.images,
        });

        // // // All accessfully
        if (dataServer.success) {
            navigate("/dashboard");
        }

        setIsLoading(false);
    };

    let body = null;
    if (authLoading) {
        body = <Spinner size="auto" />;
    } else {
        if (isAuthenticated) {
            body = (
                <>
                    {isLoading && <Spinner modal size="auto" />}
                    <TitlePage>Thông tin sản phẩm</TitlePage>
                    <div className={cx("content")}>
                        <div className={cx("content-image")}>
                            <SingleImage
                                size="sm"
                                variant="square"
                                upload={setDataSingleImage}
                            />
                        </div>
                        <div className={cx("content-form")}>
                            <ContentCreate setContentInfo={setContentInfo} />
                        </div>
                        <div className={cx("upload-multiple-image")}>
                            <MultipleImages upload={setDataMultipleImages} />

                            {valueAlert && (
                                <WarningForm>{valueAlert}</WarningForm>
                            )}
                        </div>
                        <div className={cx("form-button-submit")}>
                            <button
                                className={cx("dev-btn-lg")}
                                onClick={submitFormUpload}
                            >
                                Tạo bài
                            </button>
                        </div>
                    </div>
                </>
            );
        } else {
            navigate("/");
        }
    }

    return <div className={cx("wrapper", "dev-container-lg")}>{body}</div>;
}

export default CreatePost;
