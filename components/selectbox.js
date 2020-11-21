import styled from 'styled-components';
import Select from 'react-select';

import { color, device } from '~/theme';

const Selectbox = ({ placeholder = '', options = [], onChange }) => {
  const customStyle = {
    indicatorSeparator: () => {},
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      '& svg': { display: 'none' },
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      border: '0',
      boxShadow: 'none',
      background: color.inputBackground,
      fontSize: '18px',
      textTransform: 'capitalize',
    }),
    valueContainer: (defaultStyles) => ({
      ...defaultStyles,
      padding: '20px',
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      maxHeight: 250,
      overflow: 'hidden',
      textTransform: 'capitalize',
    }),
    clearIndicator: (defaultStyles) => ({
      ...defaultStyles,
      right: 46,
    }),
  };

  return (
    <StyledSelectbox>
      <Select
        styles={customStyle}
        isClearable
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        theme={(theme) => ({
          ...theme,
          borderRadius: '8px',
          colors: {
            ...theme.colors,
            primary: color.yellow,
            primary25: color.disabledButton,
          },
        })}
      />
      <i className="icon-caret-down" />
    </StyledSelectbox>
  );
};

export default Selectbox;

const StyledSelectbox = styled.div`
  position: relative;
  width: 100%;
  @media ${device.tablet} {
    max-width: 100%;
    margin: 0;
  }
  i {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: ${color.yellow};
    font-size: 20px;
    pointer-events: none;
  }
`;
