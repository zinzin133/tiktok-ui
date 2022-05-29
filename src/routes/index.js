import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/component/Layout/HeaderOnly';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
