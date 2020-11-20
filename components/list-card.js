import styled from 'styled-components';
import Rating from '~/components/rating';
import Body from '~/components/body';
const ListCard = ({ poster, title, year }) => {
  // TODO: Route to detail link
  return (
    <StyledListCard>
      <CardImage src={poster} />
      <Content>
        <Rating />
        <Body clampBody={4} title={title} year={year} />
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
