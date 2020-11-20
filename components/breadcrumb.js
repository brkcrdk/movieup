import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '~/components/container';
import { color } from '~/theme';

const Breadcrumb = () => {
  const { route } = useRouter();
  return (
    <StyledBreadcrumb>
      <Container>
        <Link href="/">
          <a>Home / </a>
        </Link>
        <span>{route.split('/')[1]}</span>
      </Container>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;

const StyledBreadcrumb = styled.div`
  background: ${color.breadcrumbBackground};
  padding: 24px 0;
  align-items: center;
  a,
  span {
    margin: 0 5px;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    text-transform: capitalize;
  }
  a:hover {
    color: ${color.yellow};
  }
  span:hover {
    cursor: context-menu;
  }

  .container {
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
