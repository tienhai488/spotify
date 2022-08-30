import styles from './PodcastItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function PodcastItem() {
    return (
        <Link to="/search" className={cx('item')}>
            <div>
                <h2 className={cx('title')}>Podcast</h2>
                <img
                    className={cx('img')}
                    src="https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5"
                    alt={'hihanh'}
                />
            </div>
        </Link>
    );
}

export default PodcastItem;
