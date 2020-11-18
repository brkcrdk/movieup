import { useEffect } from 'react';
import styled from 'styled-components';
import Navigation from '~/components/navigation';
import { color, device } from '~/theme';
import { useRedux } from '~/hooks';

const Mobile = () => {
  const { sidebar } = useRedux();
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [sidebar]);

  return (
    <StyledMobile isOpen={sidebar}>
      <Navigation />
    </StyledMobile>
  );
};

export default Mobile;

const StyledMobile = styled.aside`
  display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: ${(p) => (p.isOpen ? '0' : '100%')};
    transition: all 0.5s ease-in-out;
    background: #fff;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 2;
    span {
      color: ${color.yellow};
    }
  }
`;
