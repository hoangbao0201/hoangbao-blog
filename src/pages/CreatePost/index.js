import classNames from 'classnames/bind'
import UploadImageForm from '~/components/Layouts/UploadImageForm';
import styles from './CreatePost.module.scss';

const cx = classNames.bind(styles);

function CreatePost() {
    return <div className={cx('wrapper', "dev-container-lg")}>
        <div className={cx("dev-content", "content")}>
            <div className={cx("content-image")}>
                <UploadImageForm />
            </div>
        </div>
    </div>;
}

export default CreatePost;