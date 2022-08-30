import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('description')}>
                <h4>Xem trước Spotify</h4>
                <p>
                    Đăng ký để nghe không giới hạn các bài hát và podcast với quảng cáo không thường xuyên. Không cần
                    thẻ tín dụng.
                </p>
            </div>
            <div className={cx('register')}>
                <button>Đăng ký miễn phí</button>
            </div>
        </footer>
    );
}

export default Footer;
