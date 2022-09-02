import classNames from 'classnames/bind'
import styles from './Devider.module.scss';

const cx = classNames.bind(styles);

function Devider() {
    return <div className={cx('devider')}></div>;
}

export default Devider;