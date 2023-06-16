import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  justify-content: space-between; /* 텍스트를 오른쪽으로 이동 */
  align-items: center; /* 가운데 정렬 */
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
  // margin-right: 1330px; /* 이미지 오른쪽 여백 설정 */
`;

const Navbar = () => {
  return (
    <Container>
      <NavList>
        <NavLinkWrapper to="/">
          <LogoHome />
        </NavLinkWrapper>
        <NavItem>
          <NavLinkWrapper to="/login" activeClassName="active">
            Login
          </NavLinkWrapper>
          <NavLinkWrapper to="/mypage" activeClassName="active">
            My Page
          </NavLinkWrapper>
        </NavItem>
      </NavList>
    </Container>
  );
};

export default Navbar;
