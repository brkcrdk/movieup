import styled from 'styled-components';
import { color } from '~/theme';
import Link from 'next/link';

const Bottom = () => {
  return (
    <StyledBottom>
      <button>
        <i className="icon-heart" />
        Add to favourites
      </button>
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
  button {
    border: none;
    border-radius: 8px;
    background: ${color.yellow};
    padding: 20px 15px;
    color: #fff;
    display: flex;
    align-items: center;
    i {
      font-size: 30px;
      margin-right: 8px;
    }
  }
  a {
    color: ${color.yellow};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-left: 41px;
  }
`;
