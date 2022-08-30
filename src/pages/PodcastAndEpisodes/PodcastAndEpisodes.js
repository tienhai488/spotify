import styles from './PodcastAndEpisodes.module.scss';
import classNames from 'classnames/bind';
import Wrapper from '~/components/Wrapper/Wrapper';
import ListTab from '~/components/ListTab/ListTab';
import { AddLibary, Play, Upload } from '~/components/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PodcastAndEpisodes() {
    return (
        <Wrapper>
            <ListTab />
            <div className={cx('container')}>
                <div className={cx('practice')}>
                    <img src="https://i.scdn.co/image/ab6765630000ba8a97c61708ce3e6456a0321563" alt="title" />
                    <div className={cx('content')}>
                        <h3 className={cx('title')}>
                            Vì sao nước đến chân mới nhảy? | Cách giải quyết con khỉ chuyên trì hoãn? Vì sao nước đến
                            chân mới nhảy? | Cách giải quyết con khỉ chuyên trì hoãn?
                        </h3>
                        <p className={cx('description')}>
                            Luận văn mấy nghìn từ, mấy chục trang thì vài ba ngày trước khi đến hạn mới bắt đầu ngồi
                            viết. 11:59 là tới deadline nộp bản thảo sếp giao, nhưng 11:58 vẫn gõ phím lia lịa? Rõ ràng
                            là chúng mình có cả một khoảng thời gian dài chuẩn bị nhưng lúc nào cũng trong tình trạng bị
                            deadline rượt. Vậy vì sao chúng ta hay trì hoãn? Đâu là giải pháp đặc trị căn bệnh "mãn
                            tính" này? --- Send in a voice message: https://anchor.fm/visaothenhi/message
                        </p>
                        <div className={cx('action')}>
                            <div className={cx('action-icon')}>
                                <Play width={20} height={20} />
                            </div>
                            <div className={cx('action-timer')}>
                                <span>26 thg 7</span>
                                <p>-</p>
                                <span>7 phút 22 giây</span>
                            </div>
                            <div className={cx('action-btn')}>
                                <button>
                                    <Upload />
                                </button>
                                <button>
                                    <AddLibary />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faEllipsis} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={cx('seperate')} />
            </div>
        </Wrapper>
    );
}

export default PodcastAndEpisodes;
