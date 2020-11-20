import Layout from '~/layout';
import MovieList from '~/components/movie-list';
import Breadcrumb from '~/components/breadcrumb';

const Favourites = () => {
  return (
    <Layout>
      <Breadcrumb />
      <MovieList />
    </Layout>
  );
};

export default Favourites;
