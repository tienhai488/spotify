import styles from './Track.module.scss';
import classNames from 'classnames/bind';

import Wrapper from '~/components/Wrapper/Wrapper';
import ListTab from '~/components/ListTab/ListTab';
import { Clock, HeartHollow, Play } from '~/components/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Track() {
    return (
        <Wrapper>
            <ListTab />
            <div className={cx('track')}>
                <div className={cx('index')}>#</div>
                <div className={cx('img-song')}>
                    <p>TIÊU ĐỀ</p>
                </div>
                <div className={cx('content')}></div>
                <div className={cx('album')}>ALBUM</div>
                <div className={cx('action')}>
                    <Clock />
                </div>
            </div>
            <div className={cx('track')}>
                <div className={cx('index')}>
                    <span className={cx('index-num')}>1</span>
                    <Play className={cx('index-icon')} width={16} height={16} />
                </div>
                <div className={cx('img-song')}>
                    <img src="https://i.scdn.co/image/ab6761610000f17837206c8851747995ecf49f9d" alt="denvau" />
                </div>
                <div className={cx('content')}>
                    <h4>Ai muốn nghe không</h4>
                    <span>Đen</span>
                </div>
                <div className={cx('album')}>
                    <span>Ai muốn nghe không</span>
                </div>
                <div className={cx('action')}>
                    <HeartHollow className={cx('action-icon')} />
                    <p className={cx('timer')}>4:12</p>
                    <FontAwesomeIcon icon={faEllipsis} className={cx('action-icon')} />
                </div>
            </div>
        </Wrapper>
    );
}

export default Track;
