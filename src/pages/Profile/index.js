import classNames from "classnames/bind";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "~/context/authContext";
import ContentUpload from "./ContentUpload";
import styles from "./Profile.module.scss";
import UploadAvatar from "./UploadAvatarForm";

const cx = classNames.bind(styles);

function Profile() {
    const {
        state: { authLoading, isAuthenticated, user },
        updateUser,
        uploadAvatar,
    } = useContext(AuthContext);

    let body = null;
    if (authLoading) {
    } else {
        body = (
            <>
                <div className={cx("grid-form-avatar", "dev-col-4")}>
                    <UploadAvatar uploadAvatar={uploadAvatar} />
                </div>
                <div className={cx("grid-form-update", "dev-col-8")}>
                    <ContentUpload user={user} updateUser={updateUser} />
                </div>
            </>
        );
    }

    return (
        <div className={cx("wrapper", "dev-container-lg", "dev-content")}>
            {body}
        </div>
    );
}

export default Profile;
