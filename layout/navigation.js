import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { color, device } from '~/theme';

const Navigation = () => {
  const { route } = useRouter();
  const paths = [
    { href: '/', title: 'Home' },
    { href: '/favourite', title: 'Favourite' },
  ];
  return (
    <StyledNavigation>
      {paths.map(({ href, title }) => (
        <Link key={title} href={href}>
          <a className={route === href ? 'active' : ''}>{title}</a>
        </Link>
      ))}
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
