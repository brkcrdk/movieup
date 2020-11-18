import styled from 'styled-components';

import Container from '~/components/container';

import { color, device } from '~/theme';
const Banner = () => {
  return (
    <StyledBanner>
      <Container>
        <Content>
          <img src="/static/images/circles.png" />
          <h1>
            Welcome to
            <br />
            <strong>MovieUP</strong>
          </h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </h5>
        </Content>
      </Container>
      <Shadow />
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled.section`
  background-image: url(/static/images/banner.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 75vh;
`;

const Content = styled.div`
  z-index: 9;
  margin-top: 127px;
  color: #fff;
  position: relative;
  max-width: 587px;
  h1 {
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-size: 65px;
    line-height: 84px;
  }
  h5 {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
  img {
    top: -40px;
    position: absolute;
  }
`;

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${color.bannerPlaceholder};
`;
