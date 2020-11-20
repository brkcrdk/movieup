import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { color, device } from '~/theme';

const Paginate = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, [width]);

  const displayed = width > 768 ? 2 : width > 601 ? 1 : 0;

  return (
    <StyledPaginate>
      <ReactPaginate
        pageCount={15}
        pageRangeDisplayed={displayed}
        marginPagesDisplayed={displayed}
      />
    </StyledPaginate>
  );
};

export default Paginate;

const StyledPaginate = styled.div`
  display: flex;
  justify-content: center;
  margin: 75px 0;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    padding-inline-start: 0;
    li {
      padding: 13px 22px;
      border-radius: 10px;
      background: ${color.disabledButton};
      color: ${color.yellow};
      margin: 0 5px;
      transition: all 0.3s ease-in-out;
      &.previous,
      &.next {
        margin: 0 30px;
        @media ${device.mini} {
          margin: 0 auto;
        }
      }
      &.selected {
        background: ${color.yellow};
        color: #fff;
      }
      &.break {
        @media ${device.phone} {
          display: none;
        }
      }
      a {
        font-weight: 600;
        font-size: 16px;
        @media ${device.phone} {
          font-size: 13px;
        }
      }
    }
  }
`;
