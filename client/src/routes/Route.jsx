import Register from '../pages/User/Register';
import Login from '../pages/User/Login';
import MyPage from '../pages/MyPage/MyPage';
import Like from '../pages/MyPage/Like';
import Info from '../pages/MyPage/Info';
import PlayList from '../pages/MyPage/PlayList';
import Running from '../pages/MyPage/Chatting';
import Home from '../pages/home/HomePage';
import ChatList from '../pages/MyPage/Chatting';
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
    path: '/MyPage',
    link: '/MyPage',
    element: MyPage,
  },
  LIKE: {
    path: '/MyPage/like',
    link: '/MyPage/like',
    element: Like,
  },
  INFO: {
    path: '/MyPage/info',
    link: '/MyPage/info',
    element: Info,
  },
  PLAYLIST: {
    path: '/MyPage/playlist',
    link: '/MyPage/playlist',
    element: PlayList,
  },
  RUNNING: {
    path: '/MyPage/running',
    link: '/MyPage/running',
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
    path: '/MyPage',
    link: '/MyPage',
    element: MyPage,
  },
  LIKE: {
    name: '좋아요',
    path: '/MyPage/like',
    link: '/MyPage/like',
    element: Like,
  },
  PLAYLIST: {
    name: '플레이리스트',
    path: '/MyPage/playlist',
    link: '/MyPage/playlist',
    element: PlayList,
  },
  CHATLIST: {
    name: '내 채팅방',
    path: '/MyPage/chatting',
    link: '/MyPage/chatting',
    element: ChatList,
  },
  INFO: {
    name: '내 정보 보기',
    path: '/MyPage/info',
    link: '/MyPage/info',
    element: Info,
  },
};

export const PUBLIC_ROUTE_ARR = Object.values(PUBLIC_ROUTE);
export const PRIVATE_ROUTE_ARR = Object.values(PRIVATE_ROUTE);
