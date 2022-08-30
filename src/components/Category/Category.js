import styles from './Category.module.scss';
import classNames from 'classnames/bind';
import TopicItem from '../TopicItem/TopicItem';
import { TYPE_ALL, TYPE_PODCAST, TYPE_PROFILE } from '../TypeItem';

const cx = classNames.bind(styles);

function Category({ data, title, type, noline }) {
    var profile, podcast;
    if (type === TYPE_PROFILE) {
        profile = true;
    }
    if (type === TYPE_PODCAST) {
        podcast = true;
    }
    if (type === TYPE_ALL) {
        profile = true;
        podcast = true;
    }
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title', { noline })}>{title}</h2>
            <div className={cx('row')}>
                {data.map((item, index) => (
                    <div key={index} className={cx('col', 'l-2-4')}>
                        <TopicItem
                            src={item.linkImg}
                            title={item.title}
                            description={item.description}
                            profile={profile}
                            podCast={podcast}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
