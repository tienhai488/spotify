import styles from './ListTab.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ListTab() {
    return (
        <ul className={cx('list-tab')}>
            <li>Tất cả</li>
            <li>Nghệ sĩ</li>
            <li>Play list</li>
            <li>Bài hát</li>
            <li>Album</li>
            <li>Podcast và chương trình</li>
            <li>Hồ sơ</li>
        </ul>
    );
}

export default ListTab;
