import styled from 'styled-components';

import Genre from '~/components/genre';
import { device } from '~/theme';

const Top = () => {
  return (
    <StyledTop>
      <Rating>
        <img src="static/images/imdb.png" />
        <span>8.8</span>
      </Rating>
      <Genres>
        <Genre genre="Action" />
        <Genre genre="Biography" />
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

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  width: 100px;
`;

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  .genre {
    margin: 5px;
  }
`;
