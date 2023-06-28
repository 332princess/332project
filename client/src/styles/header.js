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
    display: ${(props) => (props.isToggleOpen ? 'block' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
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
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const MenuToggleBtn = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: block;
    background-color: #000;
    font-size: 20px;
  }
`;
