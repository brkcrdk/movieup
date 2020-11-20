import styled from 'styled-components';
import { color } from '~/theme';
const AddToFav = () => {
  return (
    <StyledAddToFav>
      <i className="icon-heart" />
      Add to favourites
    </StyledAddToFav>
  );
};

export default AddToFav;

const StyledAddToFav = styled.button`
  border-radius: 8px;
  background: ${color.yellow};
  padding: 20px 15px;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 16px;
  i {
    font-size: 30px;
    margin-right: 8px;
  }
  @media (max-width: 1550px) {
    padding: 15px 10px;
  }
`;
