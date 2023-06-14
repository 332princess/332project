import Register from './pages/User/Register';
import Login from './pages/User/Login';
import MyPage from './pages/MyPage/MyPage';
import Like from './pages/MyPage/Like';
import Info from './pages/MyPage/Info';
import PlayList from './pages/MyPage/PlayList';
import Running from './pages/MyPage/Running';
import Home from './pages/HomePage';
import Song from './pages/SongPage';

export const ROUTE = {
  HOME: {
    path: '/',
    link: '/',
    component: Home,
  },
  REGISTER: {
    path: '/register',
    link: '/register',
    element: Register,
  },
  LOGIN: {
    path: '/login',
    link: '/login',
    element: Login,
  },
  SONG: {
    path: '/song',
    link: '/song',
    element: Song,
  },
  MYPAGE: {
    path: '/mypage',
    link: '/mypage',
    element: MyPage,
  },
  LIKE: {
    path: '/mypage/like',
    link: '/mypage/like',
    element: Like,
  },
  INFO: {
    path: '/mypage/info',
    link: '/mypage/info',
    element: Info,
  },
  PLAYLIST: {
    path: '/mypage/playlist',
    link: '/mypage/playlist',
    element: PlayList,
  },
  RUNNING: {
    path: '/mypage/running',
    link: '/mypage/running',
    element: Running,
  },
};
export const PUBLIC_ROUTE = {
  HOME: {
    path: '/',
    link: '/',
    component: Home,
  },
  REGISTER: {
    path: '/register',
    link: '/register',
    element: Register,
  },
  LOGIN: {
    path: '/login',
    link: '/login',
    element: Login,
  },
};
export const PRIVATE_ROUTE = {
  SONG: {
    path: '/song',
    link: '/song',
    element: Song,
  },
  MYPAGE: {
    path: '/mypage',
    link: '/mypage',
    element: MyPage,
  },
  LIKE: {
    name: '좋아요',
    path: '/mypage/like',
    link: '/mypage/like',
    element: Like,
  },
  INFO: {
    name: '내 정보 보기',
    path: '/mypage/info',
    link: '/mypage/info',
    element: Info,
  },
  PLAYLIST: {
    name: '플레이리스트',
    path: '/mypage/playlist',
    link: '/mypage/playlist',
    element: PlayList,
  },
  RUNNING: {
    name: '달린 기록',
    path: '/mypage/running',
    link: '/mypage/running',
    element: Running,
  },
};

export const PUBLIC_ROUTE_ARR = Object.values(PUBLIC_ROUTE);
export const PRIVATE_ROUTE_ARR = Object.values(PRIVATE_ROUTE);
