import styled from 'styled-components';
import Link from 'next/link';
import { color, device } from '~/theme';

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/favourite">
        <a className="active">Favourite</a>
      </Link>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  display: flex;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
  a {
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    &.active {
      color: ${color.yellow};
    }
    &:first-child {
      margin-right: 50px;
      @media ${device.desktop} {
        margin-right: 25px;
      }
      @media ${device.tablet} {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }
  }
`;
