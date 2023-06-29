import Register from '../pages/user/Register';
import Login from '../pages/user/Login';
import MyPage from '../pages/mypage/MyPage';
import Like from '../pages/mypage/Like';
import Info from '../pages/mypage/Info';
import PlayList from '../pages/mypage/PlayList';
import Home from '../pages/home/HomePage';
// import ChatList from '../pages/mypage/Chatting';
import Chat from '../pages/chat/Chatting';
import Video from '../pages/video/Video';
import ChatMain from '../pages/chat/chatmain';

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
  CHATMAIN: {
    name: '좋아요',
    path: '/chat/chatmain',
    link: '/chat/chatmain',
    element: ChatMain,
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
  PLAYLIST: {
    name: '플레이리스트',
    path: '/MyPage/playlist',
    link: '/MyPage/playlist',
    element: PlayList,
  },
  LIKE: {
    name: '좋아요',
    path: '/MyPage/like',
    link: '/MyPage/like',
    element: Like,
  },
  CHATMAIN: {
    name: '채팅',
    path: '/chat/chatmain',
    link: '/chat/chatmain',
    element: ChatMain,
  },
  // CHATLIST: {
  //   name: '내 채팅방',
  //   path: '/MyPage/chatting',
  //   link: '/MyPage/chatting',
  //   element: ChatList,
  // },
  INFO: {
    name: '내 정보 보기',
    path: '/MyPage/info',
    link: '/MyPage/info',
    element: Info,
  },
};

export const PUBLIC_ROUTE_ARR = Object.values(PUBLIC_ROUTE);
export const PRIVATE_ROUTE_ARR = Object.values(PRIVATE_ROUTE);
