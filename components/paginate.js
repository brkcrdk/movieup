import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { color, device } from '~/theme';

const Paginate = ({ pageCount, pageChange }) => {
  return (
    <StyledPaginate>
      <ReactPaginate
        onPageChange={pageChange}
        pageCount={pageCount}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
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
    flex-wrap: wrap;
    list-style: none;
    padding-inline-start: 0;
    li {
      padding: 13px 22px;
      border-radius: 10px;
      background: ${color.disabledButton};
      color: ${color.yellow};
      margin: 0 5px;
      transition: all 0.3s ease-in-out;
      @media ${device.tablet} {
        /* Paginate mobilede responsive problemi yapıyor 
        bu nedenle sadece previous, next ve selected butonlarını sadece
        belirlir bir çözünürlüğün üzerinde gösteriyorum*/
        display: none;
      }
      &.previous,
      &.next {
        margin: 0 30px;
        display: block;
        @media ${device.mini} {
          margin: 0 auto;
        }
      }
      &.selected {
        display: block;
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
