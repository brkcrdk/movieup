import styled from 'styled-components';

import Genre from '~/components/genre';

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
  .genre-pill {
    margin-left: 15px;
  }
`;
