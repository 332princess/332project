import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  background-color: #000;
  opacity: 90%;
  padding: 5px;
  position: sticky;
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

  @media screen and (max-width: 768px) {
    display: none;
`;

export const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;
  color: #ddd;
  font-weight: bold;
  margin: 0 1.2vw 0 1.2vw;

  &.active {
    color: #ff0000;
  }

  @media screen and (max-width: 768px) {
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: left;
    height: 40px;
    font-size: 20px;
    justify-content: space-evenly;
  }
`;

export const LogoHome = styled.div`
  background-image: url('/assets/logoMyu.png');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const LogoWrapper = styled.div`
  height: 50px;
`;

export const MenuToggleBtn = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: block;
    background-color: #000;
    font-size: 30px;
    margin: 10px;
  }
`;

export const SideBarWrap = styled.div`
  z-index: 99999;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #e7e4e1;
  height: 100%;
  width: 40%;
  right: -65%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  margin-top: 10px;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  margin-right: 10px;
`;
