import classNames from 'classnames/bind'
import styles from './Progress.module.scss';

const cx = classNames.bind(styles);

function Progress({ size, now }) {

    let classed = "size-lg";
    if(size) {
        classed = `size-${size}`;
    }

    return <div className={cx('progress', classed)}>
        <div className={cx("loading")} style={{width: `${now}%`}}></div>
    </div>;
}

export default Progress;