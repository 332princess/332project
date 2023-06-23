import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Container = styled.nav`
  background-color: #000;
  opacity: 90%;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.li`
  margin-right: 10px;
`;

const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;
  color: #ddd;
  font-weight: bold;
  margin: 0 1.2vw 0 1.2vw;

  &.active {
    color: #ff0000;
  }
`;

export const LogoHome = styled.div`
  background-image: url('/logoMyu.png');
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = cookies['token'];
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(!!cookies.token);
    };

    checkLoginStatus();
  }, [cookies.token]);

  const handleLogout = () => {
    removeCookie('token');
    localStorage.removeItem('token'); // 토큰 삭제
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
