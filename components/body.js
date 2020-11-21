/* eslint-disable max-len */
import styled from 'styled-components';

import { color, device, clampText } from '~/theme';

// NOTE: Test etmek amaçlı var
const dummyText =
  'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.';

const Body = ({
  clampBody,
  year = '2019',
  title = 'The Godfather',
  body = dummyText,
}) => {
  return (
    <StyledBody className="body" clampBody={clampBody}>
      <span>{year}</span>
      <h4>{title}</h4>
      <p>{body}</p>
    </StyledBody>
  );
};

export default Body;

const StyledBody = styled.section`
  @media (max-width: 1550px) {
    margin-top: 15px;
  }
  @media ${device.desktop} {
    margin-top: 30px;
  }
  @media ${device.phone} {
    margin-top: 15px;
  }
  span,
  h4 {
    font-weight: 600;
  }
  span {
    font-size: 18px;
    color: ${color.yellow};
    @media (max-width: 1550px) {
      font-size: 16px;
    }
  }
  h4 {
    font-size: 30px;
    line-height: 30px;

    @media (max-width: 1550px) {
      font-size: 25px;
    }
  }
  p {
    margin-top: 26px;
    width: 85%;
    font-size: 16px;
    line-height: 35px;
    font-weight: 400;
    color: ${color.contentTexts};

    ${(p) => p.clampBody && clampText(p.clampBody)};

    @media (max-width: 1550px) {
      margin-top: 10px;
      font-size: 14px;
      line-height: 30px;
    }
    @media ${device.desktop} {
      width: 100%;
    }
  }
`;
