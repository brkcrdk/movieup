import Layout from '~/layout';
import Breadcrumb from '~/components/breadcrumb';
import CardSlider from '~/components/card-slider';
import DetailCard from '~/components/detail-card';

const Detail = () => {
  return (
    <Layout>
      <Breadcrumb />
      <DetailCard />
      <CardSlider />
    </Layout>
  );
};

export default Detail;
