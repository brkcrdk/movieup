import styled from 'styled-components';
import { color } from '~/theme';
import { device } from '~/theme';

const SearchBox = ({ inHeader = false }) => {
  return (
    <StyledSearchBox inHeader={inHeader}>
      <input placeholder="Enter movie name here" />
      <i className="icon-search" />
    </StyledSearchBox>
  );
};

export default SearchBox;

const StyledSearchBox = styled.div`
  padding: 20px 25px;
  background: ${color.inputBackground};
  border-radius: 8px;
  max-width: ${(p) => (p.inHeader ? '443px' : '100%')};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.desktop} {
    margin-left: ${(p) => p.inHeader && '25px'};
  }
  input {
    width: 100%;
    outline: none;
    border: none;
    background: transparent;
    color: ${color.inputTexts};
    margin-right: 5px;
  }
`;
