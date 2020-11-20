import Layout from '~/layout';
import Breadcrumb from '~/components/breadcrumb';
import SearchWFilter from '~/components/search-w-filter';
import MovieList from '~/components/movie-list';
import { useRouter } from 'next/router';
const Movies = ({ data }) => {
  const { query } = useRouter();
  console.log(data);

  return (
    <Layout>
      <Breadcrumb />
      <SearchWFilter />
      <MovieList title={query.name} movies={data} />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const { type, year, name } = query;
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${name || ''}&y=${
      year || ''
    }&type=${type || ''}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}

export default Movies;
