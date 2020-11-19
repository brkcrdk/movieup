import styled from 'styled-components';
import { color } from '~/theme';
const Middle = () => {
  return (
    <StyledMiddle>
      <span>2019</span>
      <h4>The Godfather</h4>
      <p>
        The aging patriarch of an organized crime dynasty transfers control of
        his clandestine empire to his reluctant son.
      </p>
    </StyledMiddle>
  );
};

export default Middle;

const StyledMiddle = styled.section`
  span,
  h4 {
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  span {
    font-size: 18px;
    color: ${color.yellow};
  }
  h4 {
    font-size: 30px;
    line-height: 30px;
  }
  p {
    margin-top: 26px;
    max-width: 471px;
    font-size: 16px;
    line-height: 35px;
    font-weight: 400;
    color: ${color.contentTexts};
  }
`;
