import styles from './TopicItem.module.scss';
import classNames from 'classnames/bind';
import { Play } from '~/components/icons';

const cx = classNames.bind(styles);

function TopicItem({ src, title, description, profile = false, podCast = false }) {
    const classNames = cx('img', { profile });
    return (
        <div className={cx('wrapper')}>
            <img src={src} alt={title} className={classNames} />
            <h4 className={cx('title')}>{title}</h4>
            <p className={cx('description')}>{description}</p>
            {!podCast && (
                <div className={cx('play')}>
                    <Play className={cx('play-btn')} />
                </div>
            )}
        </div>
    );
}

export default TopicItem;
