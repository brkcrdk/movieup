import styled from 'styled-components';
import Navigation from '~/components/navigation';
import SearchBox from '~/components/search-box';
import { device } from '~/theme';

const Desktop = () => {
  return (
    <StyledDesktop>
      <Navigation />
      <SearchBox inHeader />
    </StyledDesktop>
  );
};

export default Desktop;

const StyledDesktop = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    display: none;
  }
`;
