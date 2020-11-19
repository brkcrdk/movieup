import styled from 'styled-components';
import { color } from '~/theme';

const Breadcrumb = () => {
  return (
    <StyledBreadcrumb>
      <p>Breadcrumb is here</p>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;

const StyledBreadcrumb = styled.div`
  background: ${color.breadcrumbBackground};
`;
