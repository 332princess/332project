import Register from '../pages/user/Register';
import Login from '../pages/user/Login';
import MyPage from '../pages/mypage/MyPage';
import Like from '../pages/mypage/Like';
import Info from '../pages/mypage/Info';
import PlayList from '../pages/mypage/PlayList';
import Running from '../pages/mypage/Chatting';
import Home from '../pages/home/HomePage';
import ChatList from '../pages/mypage/Chatting';
import Chat from '../pages/chat/Chatting';
import Video from '../pages/video/Video';

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
  VIDEO: {
    path: '/video',
    link: '/video',
    element: Video,
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
  VIDEO: {
    path: '/video',
    link: '/video',
    element: Video,
  },
  CHAT: {
    path: '/chat',
    link: '/chat',
    element: Chat,
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
  PLAYLIST: {
    name: '플레이리스트',
    path: '/mypage/playlist',
    link: '/mypage/playlist',
    element: PlayList,
  },
  CHATLIST: {
    name: '내 채팅방',
    path: '/mypage/chatting',
    link: '/mypage/chatting',
    element: ChatList,
  },
  INFO: {
    name: '내 정보 보기',
    path: '/mypage/info',
    link: '/mypage/info',
    element: Info,
  },
};

export const PUBLIC_ROUTE_ARR = Object.values(PUBLIC_ROUTE);
export const PRIVATE_ROUTE_ARR = Object.values(PRIVATE_ROUTE);
