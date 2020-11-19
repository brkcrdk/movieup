import styled from 'styled-components';
import { useRedux } from '~/hooks';
import { color, device } from '~/theme';
const Hamburger = () => {
  const { handleSidebar, sidebar } = useRedux();
  return (
    <StyledHamburger
      onClick={() => {
        handleSidebar();
      }}
      type="button"
      isActive={sidebar}
    >
      <span />
      <span />
      <span />
    </StyledHamburger>
  );
};

export default Hamburger;

const StyledHamburger = styled.button`
  background: none;
  position: relative;
  margin-bottom: 15px;
  margin-right: 20px;
  display: none;
  @media ${device.tablet} {
    display: block;
  }
  span {
    width: 30px;
    height: 4px;
    border-radius: 2px;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
    background: ${color.yellow};
    transform-origin: 0 100%;
    &:nth-child(1) {
      top: 0;
      transform: ${(p) => p.isActive && 'rotate(45deg) translateX(-5px)'};

      /* border: 1px solid red; */
    }
    &:nth-child(2) {
      top: 8px;
      opacity: ${(p) => p.isActive && '0'};
    }
    &:nth-child(3) {
      top: 16px;
      transform: ${(p) => p.isActive && 'rotate(-45deg) translate(-2.5px)'};
    }
  }
`;
