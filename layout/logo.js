import styled from 'styled-components';
import Link from 'next/link';
import { device } from '~/theme';

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <StyledLogo
          src="/static/images/logo.png"
          alt="movieup-logo"
          title="MovieUp"
        />
      </a>
    </Link>
  );
};

export default Logo;

const StyledLogo = styled.img`
  max-width: 217px;
  max-height: 40.5px;
  margin-right: 87px;
  @media ${device.desktop} {
    margin-right: 45px;
    width: 70%;
  }
  @media ${device.tablet} {
    margin-right: 25px;
    width: 50%;
  }
`;
