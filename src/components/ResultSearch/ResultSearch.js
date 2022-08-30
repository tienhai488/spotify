import styles from './ResultSearch.module.scss';
import classNames from 'classnames/bind';

import ArtistOffer from './ArtistOffer/ArtistOffer';
import PlaySong from './PlaySong/PlaySong';
import Title from '../Title/Title';

const cx = classNames.bind(styles);

function ResultSearch() {
    return (
        <div className={cx('result')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-5', 'artist')}>
                    <ArtistOffer />
                </div>
                <div className={cx('col', 'l-7', 'the-song')}>
                    <Title title={'Bài tập'} />
                    <PlaySong />
                    <PlaySong />
                    <PlaySong />
                    <PlaySong />
                </div>
            </div>
        </div>
    );
}

export default ResultSearch;
