import Head from 'next/head';
const head = () => {
  return (
    <Head>
      <title>Movie UP</title>
      <link rel="stylesheet" href="/static/styles/default.css" />
      <link rel="stylesheet" href="/static/styles/normalize.css" />
      <link rel="stylesheet" href="/static/icomoon/style.css" />
      <link rel="stylesheet" href="/static/styles/swiper/swiper.css" />
      <link rel="stylesheet" href="/static/styles/swiper/swiper.min.css" />
      <link rel="stylesheet" href="/static/styles/nprogress.css" />
    </Head>
  );
};

export default head;
