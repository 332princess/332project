import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  background-color: #f5f5f5;
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
`;

const NavItem = styled.li`
  margin-right: 10px;
`;

const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &.active {
    color: #ff0000;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <NavList>
        <NavItem>
          <NavLinkWrapper exact to="/" activeClassName="active">
            Home
          </NavLinkWrapper>
        </NavItem>
        <NavItem>
          <NavLinkWrapper to="/login" activeClassName="active">
            Login
          </NavLinkWrapper>
        </NavItem>
        <NavItem>
          <NavLinkWrapper to="/mypage" activeClassName="active">
            My Page
          </NavLinkWrapper>
        </NavItem>
      </NavList>
    </Container>
  );
};

export default Navbar;
