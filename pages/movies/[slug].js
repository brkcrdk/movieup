import Layout from '~/layout';
import Breadcrumb from '~/components/breadcrumb';
import CardSlider from '~/components/card-slider';
import DetailCard from '~/components/detail-card';

const Detail = ({ data }) => {
  return (
    <Layout>
      <Breadcrumb />
      <DetailCard data={data} />
      <CardSlider title="Related Movies" />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const { slug } = query;
  const req = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${slug}`
  );
  const data = await req.json();

  return {
    props: {
      data,
    },
  };
}

export default Detail;
