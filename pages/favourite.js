import Layout from '~/layout';
import MovieList from '~/components/movie-list';
import Breadcrumb from '~/components/breadcrumb';

const Favourite = () => {
  return (
    <Layout>
      <Breadcrumb />
      <MovieList />
    </Layout>
  );
};

export default Favourite;
