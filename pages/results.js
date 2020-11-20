import Layout from '~/layout';
import Breadcrumb from '~/components/breadcrumb';
import SearchWFilter from '~/components/search-w-filter';
import MovieList from '~/components/movie-list';
const Movies = () => {
  return (
    <Layout>
      <Breadcrumb />
      <SearchWFilter />
      <MovieList />
    </Layout>
  );
};

export default Movies;
