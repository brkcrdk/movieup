import styled from 'styled-components';
import Select from 'react-select';
import { color, device } from '~/theme';

const Selectbox = () => {
  const options = [
    {
      value: 1,
      label: 'bir',
    },
    {
      value: 2,
      label: 'iki',
    },
  ];

  const customStyle = {};
  return (
    <StyledSelectbox>
      <Select
        styles={{
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
        }}
        options={options}
        placeholder="Year"
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
    right: 26px;
    transform: translateY(-50%);
    color: ${color.yellow};
    font-size: 20px;
  }
`;
