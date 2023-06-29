import React, { useRef, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { SideBarWrap, NavItems, NavLinkWrapper } from '../../styles/header';

const SideBar = ({ isOpen, setIsOpen, handleToggleOpen }) => {
  const outside = useRef();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const token = cookies['token'];
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setIsLoggedIn(!!token);
  }, [cookies, setIsLoggedIn]);

  const handleLogout = () => {
    removeCookie('token');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsOpen(false); // 사이드바 닫기
    window.location.href = '/';
  };

  const handleOutsideClick = (e) => {
    if (!outside.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <SideBarWrap id="sidebar" ref={outside} className={isOpen ? 'open' : ''}>
      <ul>
        <NavItems>
          {isLoggedIn ? (
            <>
              <NavLinkWrapper
                to="/logout"
                activeClassName="active"
                onClick={() => {
                  handleLogout();
                  handleToggleOpen();
                }}
              >
                Logout
              </NavLinkWrapper>
              <NavLinkWrapper to="/" exact onClick={handleToggleOpen}>
                Home
              </NavLinkWrapper>
              <NavLinkWrapper
                to="/mypage"
                activeClassName="active"
                onClick={handleToggleOpen}
              >
                My Page
              </NavLinkWrapper>
            </>
          ) : (
            <>
              <NavLinkWrapper
                to="/login"
                activeClassName="active"
                onClick={handleToggleOpen}
              >
                Login
              </NavLinkWrapper>
              <NavLinkWrapper
                to="/register"
                activeClassName="active"
                onClick={handleToggleOpen}
              >
                Signup
              </NavLinkWrapper>
            </>
          )}
        </NavItems>
      </ul>
    </SideBarWrap>
  );
};

export default SideBar;
