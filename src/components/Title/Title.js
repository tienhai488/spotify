import styles from './Title.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Title({ title }) {
    return <h2 className={cx('title')}>{title}</h2>;
}

export default Title;
