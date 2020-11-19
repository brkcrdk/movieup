import styled from 'styled-components';

import Container from '~/components/container';
import Selectbox from '~/components/selectbox';
import SearchBox from '~/components/search-box';
import { color, device } from '~/theme';

const SearchWFilter = ({ homepage }) => {
  return (
    <Container>
      <StyledSearchWFilter homepage={homepage}>
        <Filters>
          <Selectbox />
          <Selectbox />
        </Filters>
        <SearchBox />
        <SearchBtn>
          Search
          <i className="icon-arrow-right" />
        </SearchBtn>
      </StyledSearchWFilter>
    </Container>
  );
};

export default SearchWFilter;

const StyledSearchWFilter = styled.div`
  margin-top: ${(p) => p.homepage && '-80px'};
  padding: 30px;
  z-index: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 16px 28px rgba(141, 40, 173, 0.15);
  display: flex;
  @media ${device.tablet} {
    flex-direction: column;
    margin-top: ${(p) => p.homepage && '-200px'};
  }
`;

const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
  margin-right: 20px;
  @media ${device.tablet} {
    margin-bottom: 20px;
  }
  @media ${device.phone} {
    margin-right: 0;
    grid-template-columns: 1fr;
  }
`;

const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  margin-left: 20px;
  width: 180px;
  background: ${color.yellow};
  padding: 19px 35px 19px 30px;
  border-radius: 8px;
  i {
    color: #fff;
    margin-left: 20px;
    font-size: 20px;
  }
  @media ${device.tablet} {
    margin-top: 20px;
    margin-left: 0;
    width: 100%;
  }
`;
