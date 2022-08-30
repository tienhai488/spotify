import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Close, Search } from '~/components/icons';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Header({ checkSearh = true }) {
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('redirect')}>
                <button>
                    <FontAwesomeIcon icon={faAngleLeft} className={cx('redirect-btn')} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faAngleRight} className={cx('redirect-btn')} />
                </button>
            </div>
            <div className={cx('search')} onClick={() => inputRef.current.focus()}>
                <button className={cx('search-btn')}>
                    <Search />
                </button>
                <input
                    placeholder="Nghệ sĩ, bài hát hoặc podcast"
                    ref={inputRef}
                    value={searchValue}
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue && (
                    <button
                        className={cx('close-btn')}
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <Close />
                    </button>
                )}
            </div>

            <div className={cx('action')}>
                <button className={cx('action-btn')}>Premium</button>
                <button className={cx('action-btn')}>Hỗ trợ</button>
                <button className={cx('action-btn')}>Tải xuống</button>
                <div className={cx('seperate')}></div>
                <button className={cx('action-btn')}>Đăng kí</button>
                <button className={cx('action-btn')}>Đăng nhập</button>
            </div>
        </div>
    );
}

export default Header;
