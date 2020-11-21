import styled from 'styled-components';

import GenrePill from '~/components/genre-pill';
import Rating from '~/components/rating';

import { device } from '~/theme';

const Top = () => {
  return (
    <StyledTop>
      <Rating />
      <Genres>
        <GenrePill genre="Action" />
        <GenrePill genre="Biography" />
      </Genres>
    </StyledTop>
  );
};

export default Top;

const StyledTop = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1550px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media ${device.desktop} {
    margin-top: 30px;
  }
  @media ${device.phone} {
    margin-top: 10px;
  }
`;

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 1550px) {
    margin-top: 20px;
  }
  .genre {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;
