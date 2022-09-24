import classNames from 'classnames/bind'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '~/context/authContext';
import styles from './CheckUser.module.scss';

const cx = classNames.bind(styles);

function CheckUser({ children }) {
    const navigate = useNavigate();

    const { state: { authLoading, isAuthenticated } } = useContext(AuthContext);

    if(authLoading) {
        return
    }
    else {
        if(isAuthenticated) {
            return <div className={cx('wrapper')}>{ children }</div>;
        }
        else {
            navigate("/");
        }
    }

    
}

export default CheckUser;