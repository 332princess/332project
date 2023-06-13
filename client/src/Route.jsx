import Register from './components/User/Register/Register';
import Login from './components/User/Login/Login';
import MyPage from './components/MyPage/MyPage';
import Like from './components/MyPage/Detail/Like';
import Info from './components/MyPage/Detail/Info';
import PlayList from './components/MyPage/Detail/PlayList';
import Running from './components/MyPage/Detail/Running';

export const ROUTE = {
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
