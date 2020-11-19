import styled from 'styled-components';
import { color } from '~/theme';

const Genre = ({ genre }) => {
  return <StyledGenre className="genre-pill">{genre}</StyledGenre>;
};

export default Genre;

const StyledGenre = styled.span`
  color: #000;
  font-size: 16px;
  line-height: 24px;
  border-radius: 8px;
  background-color: ${color.yellow};
  padding: 11px 24px;
`;