import styles from './ArtistOffer.module.scss';
import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { Play } from '~/components/icons';
import Title from '~/components/Title/Title';

const cx = classNames.bind(styles);

function ArtistOffer() {
    return (
        <Fragment>
            <Title title={'Kết quả hàng đầu'} />
            <div className={cx('info-artist')}>
                <div className={cx('img-song')}>
                    <img src="https://i.scdn.co/image/ab6761610000f17837206c8851747995ecf49f9d" alt="denvau" />
                </div>
                <h1>Đen</h1>
                <button>Nghệ sĩ</button>
                <div className={cx('play')}>
                    <Play className={cx('play-btn')} />
                </div>
            </div>
        </Fragment>
    );
}

export default ArtistOffer;
