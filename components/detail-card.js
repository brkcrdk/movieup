import styled from 'styled-components';
import Container from '~/components/container';
import Rating from '~/components/rating';
import AddToFav from '~/components/add-to-fav';
import Body from '~/components/body';
import Genre from '~/components/genre';
import { device } from '~/theme';
const DetailCard = () => {
  return (
    <Container>
      <StyledDetailCard>
        <img src="/static/images/placeholder.png" />
        <Content>
          <Header>
            <Rating />
            <AddToFav />
          </Header>
          <Body clampBody={6} />
          <Genres>
            <Genre genre="Action" />
            <Genre genre="Biography" />
            <Genre genre="Action" />
            <Genre genre="Biography" />
            <Genre genre="Action" />
            <Genre genre="Biography" />
            <Genre genre="Action" />
            <Genre genre="Biography" />
            <Genre genre="Biography" />
            <Genre genre="Biography" />
            <Genre genre="Biography" />
            <Genre genre="Biography" />
          </Genres>
        </Content>
      </StyledDetailCard>
    </Container>
  );
};

export default DetailCard;

const StyledDetailCard = styled.article`
  display: flex;
  margin: 75px 0;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: column;
    margin: 50px 0;
  }
  @media ${device.phone} {
    margin-bottom: 25px;
  }

  img {
    max-height: 405px;
    max-width: 281px;
    border-radius: 10px;
  }
`;

const Content = styled.article`
  width: 100%;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet} {
    margin-left: 0;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    margin-top: 40px;
  }
  @media ${device.mini} {
    flex-direction: column;
  }
  .rating {
    @media ${device.mini} {
      margin-bottom: 20px;
    }
  }
`;

const Genres = styled.footer`
  margin-top: 40px;
  flex-wrap: wrap;
  display: flex;
  .genre {
    margin-right: 15px;
    margin-bottom: 15px;
    @media ${device.phone} {
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
`;
