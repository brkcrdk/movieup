import { useRouter } from 'next/router';

import Layout from '~/layout';
import Breadcrumb from '~/components/breadcrumb';
import SearchWFilter from '~/components/search-w-filter';
import MovieList from '~/components/movie-list';

const Movies = ({ data }) => {
  const { query, push } = useRouter();

  const handlePagination = (e) => {
    push({
      pathname: '/results',
      query: { ...query, page: e.selected + 1 },
    });
    setTimeout(() => {
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 500);
  };

  return (
    <Layout>
      <Breadcrumb />
      <SearchWFilter />
      <MovieList
        title={query.name}
        movies={data}
        pageChange={handlePagination}
      />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const { type, year, name, page } = query;
  const req = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${name || ''}&y=${
      year || ''
    }&type=${type || ''}&page=${page || ''}`
  );
  const data = await req.json();

  return {
    props: {
      data,
    },
  };
}

export default Movies;
