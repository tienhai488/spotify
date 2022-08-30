import styles from './PlaySong.module.scss';
import classNames from 'classnames/bind';
import { HeartHollow, Play } from '../../icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PlaySong() {
    return (
        <div className={cx('play-song')}>
            <div className={cx('img-song')}>
                <img src="https://i.scdn.co/image/ab6761610000f17837206c8851747995ecf49f9d" alt="denvau" />
                <Play width={16} height={16} className={cx('icon-play')} />
            </div>
            <div className={cx('content')}>
                <h4>Ai muốn nghe không</h4>
                <span>Đen</span>
            </div>
            <div className={cx('action')}>
                <HeartHollow className={cx('action-icon')} />
                <p className={cx('timer')}>4:12</p>
                <FontAwesomeIcon icon={faEllipsis} className={cx('action-icon')} />
            </div>
        </div>
    );
}

export default PlaySong;
