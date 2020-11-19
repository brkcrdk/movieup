import styled from 'styled-components';
import Link from 'next/link';

import Container from '~/components/container';
import Swiper from '~/components/swiper';
import SliderCard from './slider-card/index';

import { color } from '~/theme';

const CardSlider = () => {
  const swiperSettings = {
    slidesPerView: 2,
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
  };
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
      <Swiper settings={swiperSettings}>
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </Swiper>
    </StyledCardSlider>
  );
};

export default CardSlider;

const StyledCardSlider = styled.section`
  margin: 100px 0;
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
  }
  a {
    color: ${color.yellow};
  }
`;
