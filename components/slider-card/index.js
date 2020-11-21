import styled from 'styled-components';

import Top from './top';
import Bottom from './bottom';
import Body from '~/components/body';

import { device } from '~/theme';

const SliderCard = () => {
  return (
    <StyledSliderCard>
      <img src="/static/images/placeholder.png" />
      <Content>
        <Top />
        <Body clampBody={3} />
        <Bottom />
      </Content>
    </StyledSliderCard>
  );
};

export default SliderCard;

const StyledSliderCard = styled.article`
  background-color: #fafafa;
  display: flex;
  margin: 100px 0;
  padding: 44px 22px 44px 50px;
  border-radius: 10px;

  @media (max-width: 1550px) {
    padding: 24px 10px 24px 30px;
  }
  @media ${device.desktop} {
    flex-direction: column;
    padding: 30px 15px;
  }
  @media ${device.phone} {
    width: 80%;
    margin: 0 auto;
  }
  @media ${device.mini} {
    width: 90%;
  }

  img {
    border-radius: 8px;
    @media ${device.desktop} {
      object-fit: contain;
    }
  }
`;

const Content = styled.article`
  margin-left: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1550px) {
    margin-left: 40px;
  }
  @media (max-width: 1400px) {
    margin-left: 20px;
  }
  @media ${device.desktop} {
    margin-left: 0;
  }
`;
