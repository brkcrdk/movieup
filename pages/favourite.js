import Layout from '~/layout';
import MovieList from '~/components/movie-list';
import Breadcrumb from '~/components/breadcrumb';

import { useRedux } from '~/hooks';

const Favourite = () => {
  const { favs } = useRedux();
  if (favs.length) {
    console.log(favs);
  }

  return (
    <Layout>
      <Breadcrumb />
      <MovieList
        title="Favourites"
        movies={favs}
        error={!favs.length && 'No Favourite Movie Yet!'}
      />
    </Layout>
  );
};

export default Favourite;
