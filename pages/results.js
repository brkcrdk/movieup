import Layout from '~/layout';
import Breadcrumb from '~/components/breadcrumb';
import SearchWFilter from '~/components/search-w-filter';
import MovieList from '~/components/movie-list';
const Movies = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Breadcrumb />
      <SearchWFilter />
      <MovieList />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const { type, year, name } = query;
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=Batman`
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
