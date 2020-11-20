import { useState } from 'react';
import styled from 'styled-components';
import Swiper from '~/components/swiper';
import SliderCard from '~/components/slider-card/index';

import { device, color } from '~/theme';
import { useSwiper } from '~/hooks';

const Slider = () => {
  const [slider, setSlider] = useState();
  const { active, slideNext, slidePrev } = useSwiper(slider);
  const data = [...Array(5).keys()];

  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      601: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <StyledSlider>
      <ShadowLeft>
        <NavigationBtn type="button" onClick={slidePrev}>
          <i className="icon-arrow-left" />
        </NavigationBtn>
      </ShadowLeft>
      <Swiper settings={swiperSettings} setSlider={setSlider}>
        {data.map((item) => (
          <SliderCard key={item} />
        ))}
      </Swiper>
      <ShadowRight>
        <NavigationBtn type="button" onClick={slideNext}>
          <i className="icon-arrow-right" />
        </NavigationBtn>
      </ShadowRight>
      <Dots>
        {data.map((item) => (
          <span key={item} className={item === active ? 'active' : ''} />
        ))}
      </Dots>
    </StyledSlider>
  );
};

export default Slider;

const StyledSlider = styled.div`
  position: relative;
`;

const Shadow = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  width: 25%;
  height: 70%;
  top: 15%;
  z-index: 9;
  @media (max-width: 1550px) {
    height: 68%;
    top: 16%;
  }
  @media ${device.desktop} {
    top: 10%;
    height: 80%;
  }
  @media ${device.phone} {
    display: none;
  }
`;

const ShadowLeft = styled(Shadow)`
  left: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.9) 20%,
    rgba(255, 255, 255, 0.7) 50%,
    transparent 100%
  );
`;
const ShadowRight = styled(Shadow)`
  right: 0;
  background: linear-gradient(
    to right,
    transparent 5%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0.9) 100%
  );
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media ${device.phone} {
    margin-top: 30px;
  }
  span {
    width: 30px;
    height: 5px;
    background: ${color.disabledButton};
    margin: 0 6px;
    border-radius: 4px;
    transition: all 0.5s ease-in-out;
    &.active {
      width: 50px;
      background: ${color.yellow};
    }
  }
`;

const NavigationBtn = styled.button`
  background: #fff;
  padding: 21px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${color.yellow};
    i {
      color: #fff;
    }
  }
  i {
    font-size: 30px;
    color: ${color.yellow};
  }
`;
