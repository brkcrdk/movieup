import Layout from '~/layout';
import styled from 'styled-components';
import { color, device } from '~/theme';

const Loading = () => {
  return (
    <Layout>
      <StyledLoading>
        <Text>Loading.. Please wait.</Text>
      </StyledLoading>
    </Layout>
  );
};

export default Loading;

const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Text = styled.h1`
  text-align: center;
  margin-top: 100px;
  color: ${color.yellow};
  @media ${device.phone} {
    font-size: 25px;
  }
`;
