import Layout from '~/layout';
import Banner from '~/components/homepage/banner';
import SearchWFilter from '~/components/search-w-filter';
import CardSlider from '~/components/card-slider';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <SearchWFilter homepage />
      <CardSlider title="Popular Videos" />
    </Layout>
  );
};

export default Home;
