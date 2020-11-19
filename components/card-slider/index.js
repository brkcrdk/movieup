import styled from 'styled-components';
import Link from 'next/link';

import Container from '~/components/container';
import Slider from './slider';

import { color, device } from '~/theme';

const CardSlider = () => {
  return (
    <StyledCardSlider>
      <Container>
        <Header>
          <h4>Popular Movies</h4>
          <Link href="/">
            <a>
              View more
              <i className="icon-arrow-right" />
            </a>
          </Link>
        </Header>
      </Container>
      <Slider />
    </StyledCardSlider>
  );
};

export default CardSlider;

const StyledCardSlider = styled.section`
  margin: 100px 0;
  @media ${device.phone} {
    margin: 50px 0 100px 0;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h4 {
    font-weight: 600;
    font-size: 35px;
    line-height: 52px;
    @media ${device.tablet} {
      font-size: 30px;
    }
    @media ${device.phone} {
      font-size: 25px;
    }
    @media ${device.mini} {
      font-size: 20px;
    }
  }
  a {
    display: flex;
    align-items: center;
    color: ${color.yellow};
    font-size: 16px;
    @media ${device.tablet} {
      font-size: 15px;
    }
    @media ${device.phone} {
      font-size: 14px;
    }
    @media ${device.mini} {
      font-size: 13px;
    }
    i {
      margin-left: 30px;
      font-size: 25px;
      @media ${device.tablet} {
        margin-left: 20px;
      }
      @media ${device.phone} {
        margin-left: 15px;
        font-size: 20px;
      }
      @media ${device.mini} {
        margin-left: 5px;
      }
    }
  }
`;
