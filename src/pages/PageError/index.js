import classNames from 'classnames/bind'
import { useContext } from 'react';
import Spinner from '~/components/Layouts/Spinner';
import { AuthContext } from '~/context/authContext';
import styles from './PageError.module.scss';

const cx = classNames.bind(styles);

function PageError() {

    const { state: { authLoading } } = useContext(AuthContext);


    if(authLoading) {
        return <Spinner modal size="auto" />
    }
    return <div className={cx('page-error')}>
        <img width="300" src='/images/page404.gif' alt='image-gif'/>
        <span className={cx("title")}>Không tìm thấy nội dung này</span>
    </div>;
}

export default PageError;