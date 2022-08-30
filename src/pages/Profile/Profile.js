// import styles from './Profile.module.scss';
// import classNames from 'classnames/bind';
import Category from '~/components/Category/Category';
import { TYPE_ALL, TYPE_PODCAST, TYPE_PROFILE } from '~/components/TypeItem';
import Wrapper from '~/components/Wrapper/Wrapper';
import ListTab from '~/components/ListTab/ListTab';
import ResultSearch from '~/components/ResultSearch/ResultSearch';

const PLAY_LIST = [
    {
        linkImg: 'https://i.scdn.co/image/ab67706f0000000241ca37ff51d700812202c4cd',
        title: 'RapCaviar',
        description: 'Music from Drake, Offset and 42 Dugg.',
    },
    {
        linkImg: 'https://i.scdn.co/image/ab67706f0000000241ca37ff51d700812202c4cd',
        title: 'RapCaviar',
        description: 'Music from Drake, Offset and 42 Dugg.',
    },
    {
        linkImg: 'https://i.scdn.co/image/ab67706f0000000241ca37ff51d700812202c4cd',
        title: 'RapCaviar',
        description: 'Music from Drake, Offset and 42 Dugg.',
    },
    {
        linkImg: 'https://i.scdn.co/image/ab67706f0000000241ca37ff51d700812202c4cd',
        title: 'RapCaviar',
        description: 'Music from Drake, Offset and 42 Dugg.',
    },
    {
        linkImg: 'https://i.scdn.co/image/ab67706f0000000241ca37ff51d700812202c4cd',
        title: 'RapCaviar',
        description: 'Music from Drake, Offset and 42 Dugg.',
    },
];

function Profile() {
    return (
        <Wrapper>
            <ListTab />
            <ResultSearch />
            <Category title={'Có sự xuất hiện của đen'} data={PLAY_LIST} type={TYPE_PROFILE} noline={true} />
            <Category title={'Có sự xuất hiện của đen'} data={PLAY_LIST} type={TYPE_PODCAST} noline={true} />
            <Category title={'Có sự xuất hiện của đen'} data={PLAY_LIST} type={TYPE_ALL} noline={true} />
            <Category title={'Có sự xuất hiện của đen'} data={PLAY_LIST} noline={true} />
        </Wrapper>
    );
}

export default Profile;
