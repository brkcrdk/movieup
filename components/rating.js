import styled from 'styled-components';

const Rating = () => {
  return (
    <StyledRating className="rating">
      <img src="/static/images/imdb.png" />
      <span>8.8</span>
    </StyledRating>
  );
};

export default Rating;

const StyledRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  width: 100px;
`;
