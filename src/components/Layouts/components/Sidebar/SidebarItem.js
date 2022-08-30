import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarItem({ title, icon, path }) {
    const Icon = icon;
    if (path) {
        return (
            <Link to={path}>
                <li className={cx('item')}>
                    <Icon />
                    <span className={cx('title')}>{title}</span>
                </li>
            </Link>
        );
    } else {
        return (
            <li className={cx('item')}>
                <Icon />
                <span className={cx('title')}>{title}</span>
            </li>
        );
    }
}

export default SidebarItem;
