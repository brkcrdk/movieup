import styled from 'styled-components';

import Container from '~/components/container';
import ListCard from '~/components/list-card';
import Paginate from '~/components/paginate';

import { device, color } from '~/theme';

const MovieList = ({ title = '', error, totalResults, movies, pageChange }) => {
  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <Container>
      {movies ? (
        <Header>
          Search result <span>{title}</span>
        </Header>
      ) : (
        <Header>{title}</Header>
      )}
      <StyledMovieList>
        {movies?.map(({ imdbID, Title, Year, Poster }, index) => (
          <ListCard
            key={index}
            title={Title}
            year={Year}
            poster={Poster}
            imdbID={imdbID}
          />
        ))}
      </StyledMovieList>
      {totalResults && (
        <Paginate
          pageCount={totalResults && totalResults / 10}
          pageChange={pageChange}
        />
      )}
    </Container>
  );
};

export default MovieList;

const StyledMovieList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 25px;
  margin: 0 auto;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.phone} {
    grid-gap: 25px 12.5px;
    grid-template-columns: 1fr;
  }
`;

const Header = styled.h1`
  margin-top: 75px;
  margin-bottom: 70px;
  font-weight: 600;
  font-size: 45px;
  line-height: 67px;
  span {
    color: ${color.yellow};
  }
  @media ${device.tablet} {
    font-size: 35px;
    margin: 35px 0;
  }
  @media ${device.phone} {
    margin: 15px 0;
    font-size: 20px;
  }
`;

const ErrorText = styled.h1`
  text-align: center;
  margin-top: 100px;
  color: ${color.yellow};
`;
