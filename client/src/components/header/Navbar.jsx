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
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <Container>
      <NavList>
        <NavLinkWrapper to="/" exact="true">
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
              <NavLinkWrapper to="/" exact="true">
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
