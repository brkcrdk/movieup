import styled from 'styled-components';
import Rating from '~/components/rating';
import Body from '~/components/body';
const ListCard = () => {
  return (
    <StyledListCard>
      <CardImage src="/static/images/placeholder.png" />
      <Content>
        <Rating />
        <Body />
      </Content>
    </StyledListCard>
  );
};

export default ListCard;

const StyledListCard = styled.article``;

const CardImage = styled.img`
  object-fit: cover;
  height: 450px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  max-width: 383px;
  max-height: 450px;
`;

const Content = styled.article`
  .rating {
    margin-top: 25px;
  }
  .body {
    margin-top: 35px;
  }
`;
