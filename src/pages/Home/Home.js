import Category from '~/components/Category/Category';
import Wrapper from '~/components/Wrapper/Wrapper';

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

function Home() {
    return (
        <Wrapper>
            <Category data={PLAY_LIST} title="Spotify Playlists" />
            <Category data={PLAY_LIST} title="Spotify Playlists" />
            <Category data={PLAY_LIST} title="Spotify Playlists" />
            <Category data={PLAY_LIST} title="Spotify Playlists" />
            <Category data={PLAY_LIST} title="Spotify Playlists" />
        </Wrapper>
    );
}

export default Home;
