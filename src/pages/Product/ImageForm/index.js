import classNames from 'classnames/bind'
import styles from './ImageForm.module.scss';

const cx = classNames.bind(styles);

function ImageForm() {
    return <div className={cx('content')}>
        <div className={cx("grid-image")}></div>
    </div>;
}

export default ImageForm;