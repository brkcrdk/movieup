import styled from 'styled-components';
import Top from './top';
import Middle from './middle';
import Bottom from './bottom';
const SliderCard = () => {
  return (
    <StyledSliderCard>
      <img src="/static/images/placeholder.png" />
      <Content>
        <Top />
        <Middle />
        <Bottom />
      </Content>
    </StyledSliderCard>
  );
};

export default SliderCard;

const StyledSliderCard = styled.article`
  background-color: #fafafa;
  display: flex;
  width: 942px;
  margin: 100px 0;
  padding: 44px 22px 44px 50px;
  border-radius: 10px;
  img {
    border-radius: 8px;
  }
`;

const Content = styled.article`
  margin-left: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
