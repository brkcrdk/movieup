import styled from 'styled-components';
import { useRouter } from 'next/router';

import { color, device } from '~/theme';
import { useRedux } from '~/hooks';

const Navigation = () => {
  const { route, push } = useRouter();
  const { handleSidebar } = useRedux();

  const paths = [
    { href: '/', title: 'Home' },
    { href: '/favourite', title: 'Favourite' },
  ];

  return (
    <StyledNavigation>
      {paths.map(({ href, title }) => (
        <a
          key={title}
          className={route === href ? 'active' : ''}
          onClick={() => {
            handleSidebar();
            setTimeout(() => {
              push(href);
            }, 300);
          }}
        >
          {title}
        </a>
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
