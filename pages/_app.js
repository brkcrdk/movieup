import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '~/store';

import Loading from '~/components/loading';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore((state) => state);
  const { events } = useRouter();
  useEffect(() => {
    const start = () => NProgress.start();
    const done = () => NProgress.done();
    events.on('routeChangeStart', start);
    events.on('routeChangeComplete', done);
    return () => {
      events.off('routeChangeStart', start);
      events.off('routeChangeComplete', done);
    };
  }, [events]);

  return (
    <PersistGate persistor={store.__persistor} loading={<Loading />}>
      <Component {...pageProps} />
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
