import React, { useRef, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { SideBarWrap, NavItems } from '../../styles/header';
import { Link } from 'react-router-dom';

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
              <Link
                to="/logout"
                activeClassName="active"
                onClick={() => {
                  handleLogout();
                  handleToggleOpen();
                }}
              >
                Logout
              </Link>
              <Link to="/" exact onClick={handleToggleOpen}>
                Home
              </Link>
              <Link
                to="/mypage"
                activeClassName="active"
                onClick={handleToggleOpen}
              >
                My Page
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                activeClassName="active"
                onClick={handleToggleOpen}
              >
                Login
              </Link>
              <Link
                to="/register"
                activeClassName="active"
                onClick={handleToggleOpen}
              >
                Signup
              </Link>
            </>
          )}
        </NavItems>
      </ul>
    </SideBarWrap>
  );
};

export default SideBar;
