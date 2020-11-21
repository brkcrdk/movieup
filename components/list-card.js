import styled from 'styled-components';
import Link from 'next/link';

import Rating from '~/components/rating';
import Body from '~/components/body';

import { device } from '~/theme';

const ListCard = ({ poster, title, year, imdbID = '' }) => {
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
  height: 100%;
  width: 100%;
  margin: 0 auto;
  @media ${device.phone} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  border-radius: 8px;
  height: 40vh;
  width: 100%;
  max-width: 383px;
  max-height: 450px;
  @media ${device.phone} {
    height: 40vh;
  }
`;

const Content = styled.article`
  .rating {
    margin-top: 25px;
  }
  .body {
    margin-top: 35px;
  }
`;
