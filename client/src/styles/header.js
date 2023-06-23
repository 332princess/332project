import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  background-color: #000;
  opacity: 90%;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  margin-right: 10px;
`;

export const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;
  color: #ddd;
  font-weight: bold;
  margin: 0 1.2vw 0 1.2vw;

  &.active {
    color: #ff0000;
  }
`;

export const LogoHome = styled.div`
  background-image: url('/assets/logoMyu.png');
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;
