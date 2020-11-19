import Layout from '~/layout';
import Breadcrumb from '~/components/breadcrumb';
import SearchWFilter from '~/components/search-w-filter';

const Movies = () => {
  return (
    <Layout>
      <Breadcrumb />
      <SearchWFilter />
    </Layout>
  );
};

export default Movies;
