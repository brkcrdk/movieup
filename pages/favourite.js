import Layout from '~/layout';
import MovieList from '~/components/movie-list';
import Breadcrumb from '~/components/breadcrumb';

const Favourite = () => {
  return (
    <Layout>
      <Breadcrumb />
      <MovieList title="Favourites" />
    </Layout>
  );
};

export default Favourite;
