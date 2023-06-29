import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  Header,
  NavItem,
  NavLinkWrapper,
  MenuToggleBtn,
} from '../../styles/header';
import SideBar from './SideBar';
import { ROUTE } from '../../routes/Route';

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const token = cookies['token'];
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setIsLoggedIn(!!token);
  }, [cookies]);

  const handleLogout = () => {
    removeCookie('token');
    localStorage.removeItem('token'); // 토큰 삭제
    setIsLoggedIn(false); // 로그인 상태 변경
  };

  return (
    <Header>
      <NavLinkWrapper to="/" exact></NavLinkWrapper>
      <NavItem>
        {isLoggedIn ? (
          <>
            <li>
              <Link
                to={ROUTE.HOME.path}
                activeClassName="active"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </li>
            <li>
              <Link to={ROUTE.PLAYLIST.path} activeClassName="active">
                My Page
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={ROUTE.LOGIN.path} activeClassName="active">
                Login
              </Link>
            </li>
            <li>
              <Link to={ROUTE.REGISTER.path} activeClassName="active">
                Signup
              </Link>
            </li>
          </>
        )}
      </NavItem>
      <MenuToggleBtn role="button" onClick={toggleSide}>
        <FaBars />
      </MenuToggleBtn>
      <SideBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleToggleOpen={toggleSide}
      />
    </Header>
  );
};

export default Navbar;
