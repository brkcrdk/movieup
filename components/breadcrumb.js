import styled from 'styled-components';
import Link from 'next/link';
import Container from '~/components/container';
import { color } from '~/theme';

const Breadcrumb = () => {
  return (
    <StyledBreadcrumb>
      <Container>
        <Link href="/">
          <a>Home /</a>
        </Link>
        <Link href="/">
          <a>Search Result</a>
        </Link>
      </Container>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;

const StyledBreadcrumb = styled.div`
  background: ${color.breadcrumbBackground};
  padding: 24px 0;
  align-items: center;
  a {
    margin: 0 5px;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    &:hover {
      color: ${color.yellow};
    }
  }

  .container {
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
