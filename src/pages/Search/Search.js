import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import PodcastItem from '~/components/PodcastItem/PodcastItem';
import Wrapper from '~/components/Wrapper/Wrapper';

const cx = classNames.bind(styles);

function Search() {
    return (
        <Wrapper>
            <h2 className={cx('title')}>Duyệt tìm tất cả</h2>
            <div className={cx('list-pobcast')}>
                <div className="row">
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                    <div className="col l-2-4">
                        <PodcastItem />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Search;
