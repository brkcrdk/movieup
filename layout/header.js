import styled from 'styled-components';
import Container from '~/components/container';
import Desktop from './desktop';
import Mobile from './mobile';
import Hamburger from './hamburger';
import Logo from './logo';

import { device } from '~/theme';
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Content>
          <Logo />
          <Desktop />
          <Hamburger />
        </Content>
      </Container>
      <Mobile />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: grid;
  background: #fff;
  padding-top: 36px;
  padding-bottom: 24px;
  @media ${device.desktop} {
    padding-top: 24px;
    padding-bottom: 18px;
  }
  @media ${device.tablet} {
    padding-top: 18px;
    padding-bottom: 12px;
  }
  @media ${device.phone} {
    padding-top: 12px;
    padding-bottom: 6px;
  }
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 999;
`;
