import styled from 'styled-components';

import { color } from '~/theme';

const GenrePill = ({ genre = 'Action' }) => {
  return <StyledGenre className="genre">{genre}</StyledGenre>;
};

export default GenrePill;

const StyledGenre = styled.span`
  color: #000;
  font-size: 16px;
  line-height: 24px;
  border-radius: 8px;
  background-color: ${color.yellow};
  padding: 11px 24px;
  text-align: center;
`;
