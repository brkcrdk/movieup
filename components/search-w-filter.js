import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from '~/components/container';
import Selectbox from '~/components/selectbox';
import SearchBox from '~/components/search-box';
import { color, device } from '~/theme';

const types = ['movie', 'series', 'episode'].map((type) => ({
  value: type,
  label: type,
}));
const years = [...Array(2022).keys()]
  .filter((number) => number >= 1950)
  .map((number) => ({ value: number, label: number }))
  .reverse();

const SearchWFilter = ({ homepage }) => {
  const [year, setYear] = useState();
  const [type, setType] = useState();
  const [name, setName] = useState('');

  const { events } = useRouter();

  const [searchText, setSearchText] = useState('Search');

  useEffect(() => {
    const start = () => setSearchText('Searching');
    const done = () => setSearchText('Search');
    events.on('routeChangeStart', start);
    events.on('routeChangeComplete', done);
    return () => {
      events.off('routeChangeStart', start);
      events.off('routeChangeComplete', done);
    };
  }, [events]);

  const handleYear = (e) => {
    // NOTE: React select' in clearable özelliği ile seçilmiş olan option kaldırılırsa
    // event null dönüyor. Bu nedenle eğer event null dönerse statei sıfırla eğer event
    // bir değer dönüyorsa statei güncelle
    if (e) {
      return setYear(e.value);
    } else {
      return setYear();
    }
  };
  const handleType = (e) => {
    if (e) {
      return setType(e.value);
    } else {
      return setType();
    }
  };
  const handleName = ({ target: { value } }) => {
    setName(value);
  };

  return (
    <Container>
      <StyledSearchWFilter homepage={homepage}>
        <Filters>
          <Selectbox placeholder="Year" options={years} onChange={handleYear} />
          <Selectbox placeholder="Type" options={types} onChange={handleType} />
        </Filters>
        <SearchBox onChange={handleName} />
        <Link
          href={{
            pathname: '/results',
            query: { ...(year && { year }), ...(type && { type }), name },
          }}
        >
          <SearchBtn disabled={!name}>
            {searchText}
            <i className="icon-arrow-right" />
          </SearchBtn>
        </Link>
      </StyledSearchWFilter>
    </Container>
  );
};

export default SearchWFilter;

const StyledSearchWFilter = styled.div`
  margin-top: ${(p) => (p.homepage ? '-80px' : '35px')};
  padding: 30px;
  z-index: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 16px 28px rgba(141, 40, 173, 0.15);
  display: flex;
  @media ${device.tablet} {
    flex-direction: column;
    margin-top: ${(p) => p.homepage && '-200px'};
  }
`;

const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
  margin-right: 20px;
  @media ${device.tablet} {
    margin-bottom: 20px;
  }
  @media ${device.phone} {
    margin-right: 0;
    grid-template-columns: 1fr;
  }
`;

const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-left: 20px;
  width: 180px;
  background: ${color.yellow};
  padding: 19px 35px 19px 30px;
  border-radius: 8px;
  i {
    color: #fff;
    margin-left: 20px;
    font-size: 20px;
  }
  &:disabled {
    background: ${color.disabledButton};
    cursor: context-menu;
  }
  @media ${device.tablet} {
    margin-top: 20px;
    margin-left: 0;
    width: 100%;
  }
`;
