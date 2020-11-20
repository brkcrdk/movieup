import styled from 'styled-components';

import Container from '~/components/container';
import ListCard from '~/components/list-card';
import Paginate from '~/components/paginate';

import { device, color } from '~/theme';

const MovieList = () => {
  return (
    <Container>
      <Header>
        Search result <span>Godfather</span>
      </Header>
      <StyledMovieList>
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </StyledMovieList>
      <Paginate />
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
  }
  @media ${device.mini} {
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
