import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children, checkSearh = false }) {
    return (
        <div className={cx('wrapper')}>
            <Header checkSearh={checkSearh} />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
