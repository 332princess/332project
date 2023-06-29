import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #000;
  opacity: 90%;
  padding: 5px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.ul`
  display: flex;
  margin-right: 10px;
  a {
    text-decoration: none;
    color: #ddd;
    font-weight: bold;
    margin: 0 1.2vw 0 1.2vw;

    width: 50px;
    height: 50px;
    border-radius: 100%;

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
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;
  color: #ddd;
  font-weight: bold;
  margin: 0 1.2vw 0 1.2vw;

  background-image: url('/assets/logoMyu.png');
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;

  &.active {
    color: #ff0000;
  }

  @media screen and (max-width: 768px) {
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: left;
    height: 40px;
    width: 40px;
    font-size: 20px;
    justify-content: space-evenly;
  }
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
  padding: 40px 16px;
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
  display: grid;
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    margin: 0 1.2vw 0 1.2vw;

    width: 50px;
    height: 50px;
    border-radius: 100%;

    &.active {
      color: #ff0000;
    }
  }
`;
