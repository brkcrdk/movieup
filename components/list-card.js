import styled from 'styled-components';
import Rating from '~/components/rating';
import Body from '~/components/body';
import Link from 'next/link';

const ListCard = ({ poster, title, year, imdbID = '' }) => {
  // TODO: Route to detail link
  return (
    <Link href={`/movies/${imdbID}`}>
      <a>
        <StyledListCard>
          <CardImage
            src={poster === 'N/A' ? '/static/images/placeholder.png' : poster}
          />
          <Content>
            <Rating />
            <Body clampBody={4} title={title} year={year} />
          </Content>
        </StyledListCard>
      </a>
    </Link>
  );
};

export default ListCard;

const StyledListCard = styled.article`
  cursor: pointer;
`;

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
