import Layout from '~/layout';
import Banner from '~/components/homepage/banner';
import SearchWFilter from '~/components/search-w-filter';
import SliderCard from '../components/slider-card/index';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <SearchWFilter homepage />
      <SliderCard />
    </Layout>
  );
};

export default Home;
