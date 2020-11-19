import Layout from '~/layout';
import Banner from '~/components/homepage/banner';
import SearchWFilter from '~/components/search-w-filter';
const Home = () => {
  return (
    <Layout>
      <Banner />
      <SearchWFilter homepage />
    </Layout>
  );
};

export default Home;
