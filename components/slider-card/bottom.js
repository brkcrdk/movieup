import styled from 'styled-components';
import Link from 'next/link';
import ToggleFav from '~/components/toggle-fav';
import { color, device } from '~/theme';

const Bottom = () => {
  return (
    <StyledBottom>
      <ToggleFav />
      <Link href="/">
        <a>View Details</a>
      </Link>
    </StyledBottom>
  );
};

export default Bottom;

const StyledBottom = styled.footer`
  display: flex;
  align-items: center;
  @media ${device.desktop} {
    justify-content: space-between;
  }
  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
  a {
    color: ${color.yellow};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-left: 41px;
    text-align: center;
    @media (max-width: 1550px) {
      margin-left: 20px;
    }
    @media (max-width: 1400px) {
      margin-left: 10px;
    }
    @media ${device.desktop} {
      margin-left: 0;
    }
    @media ${device.tablet} {
      margin-bottom: 20px;
    }
  }
`;
