import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import {
  Container,
  LogoHome,
  NavItem,
  NavLinkWrapper,
  NavList,
} from '../../styles/header';

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = cookies['token'];
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setIsLoggedIn(!!token);
  }, [cookies]);

  const handleLogout = () => {
    removeCookie('token');
    localStorage.removeItem('token'); // 토큰 삭제
    setIsLoggedIn(false); // 로그인 상태 변경
    window.location.href = '/'; // '/'로 리다이렉트하여 이동
  };

  return (
    <Container>
      <NavList>
        <NavLinkWrapper to="/" exact>
          <LogoHome />
        </NavLinkWrapper>
        <NavItem>
          {isLoggedIn ? (
            <>
              <NavLinkWrapper
                to="/logout"
                activeClassName="active"
                onClick={handleLogout}
              >
                Logout
              </NavLinkWrapper>
              <NavLinkWrapper to="/" exact>
                Home
              </NavLinkWrapper>
              <NavLinkWrapper to="/mypage" activeClassName="active">
                My Page
              </NavLinkWrapper>
            </>
          ) : (
            <>
              <NavLinkWrapper to="/login" activeClassName="active">
                Login
              </NavLinkWrapper>
              <NavLinkWrapper to="/register" activeClassName="active">
                Signup
              </NavLinkWrapper>
            </>
          )}
        </NavItem>
      </NavList>
    </Container>
  );
};

export default Navbar;
