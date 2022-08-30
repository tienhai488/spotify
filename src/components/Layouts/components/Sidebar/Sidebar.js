import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import * as Icon from '~/components/icons';
import SidebarItem from './SidebarItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <Icon.Logo className={cx('spotify-logo--text')} />
                    </Link>
                </div>
                <ul className={cx('list-page')}>
                    <SidebarItem title={'Trang chủ'} icon={Icon.Home} path="/" />
                    <SidebarItem title={'Tìm kiếm'} icon={Icon.Search} path="/search" />
                    <SidebarItem title={'Thư viện'} icon={Icon.Libary} />
                </ul>
                <ul className={cx('list-favourite')}>
                    <SidebarItem title={'Tạo playlist'} icon={Icon.Add} />
                    <SidebarItem title={'Bài hát đã thích'} icon={Icon.Heart} />
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
