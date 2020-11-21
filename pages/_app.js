import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '~/store';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore((state) => state);
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      NProgress.start();
    });
    router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });
  }, [router.events]);
  return (
    <PersistGate persistor={store.__persistor} loading={<p>Loading..</p>}>
      <Component {...pageProps} />
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
