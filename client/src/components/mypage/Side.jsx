import React from 'react';
import { Container, Title, Box, URLs, Logo } from '../../styles/sidebar';
import { PRIVATE_ROUTE_ARR } from '../../routes/Route';

const Side = () => {
  return (
    <Container>
      <Title>마이페이지</Title>
      <Box>
        {PRIVATE_ROUTE_ARR.map((menu, index) => {
          return (
            <div>
              <URLs to={menu.path} key={index}>
                {menu.name}
              </URLs>
            </div>
          );
        })}
        <Logo />
      </Box>
    </Container>
  );
};
export default Side;
