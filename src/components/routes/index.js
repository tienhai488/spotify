import Home from '~/pages/Home/Home';
import PodcastAndEpisodes from '~/pages/PodcastAndEpisodes/PodcastAndEpisodes';
import Profile from '~/pages/Profile/Profile';
import Search from '~/pages/Search/Search';
import Track from '~/pages/Track/Track';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: Search, checkSearch: true },
    { path: '/search/:slug', component: Profile, checkSearch: true },
    { path: '/search/:slug/tracks', component: Track, checkSearch: true },
    { path: '/search/:slug/podcastAndEpisodes', component: PodcastAndEpisodes, checkSearch: true },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
