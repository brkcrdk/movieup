import styled from 'styled-components';
import { color } from '~/theme';
import { useRedux } from '~/hooks';

const ToggleFav = ({ movie }) => {
  const { isFav, handleFav } = useRedux();

  return (
    <StyledToggleFav
      onClick={() => {
        movie && handleFav(movie);
      }}
      isFav={movie && isFav(movie.imdbID)}
    >
      <i className="icon-heart" />
      {movie && isFav(movie.imdbID)
        ? 'Added to favourites'
        : 'Add to favourites'}
    </StyledToggleFav>
  );
};

export default ToggleFav;

const StyledToggleFav = styled.button`
  transition: all 0.5s ease-in-out;
  border-radius: 8px;
  background: ${(p) => (p.isFav ? '#fff' : `${color.yellow}`)};
  padding: 20px 15px;
  color: ${(p) => (p.isFav ? `${color.yellow}` : '#fff')};
  border: 1px solid;
  border-color: ${(p) => (p.isFav ? `${color.yellow}` : 'transparent')};
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  i {
    font-size: 30px;
    margin-right: 8px;
  }
  @media (max-width: 1550px) {
    padding: 15px 10px;
  }
`;
