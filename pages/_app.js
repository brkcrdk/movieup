import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '~/store';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore((state) => state);
  return (
    <PersistGate persistor={store.__persistor} loading={<p>Loading..</p>}>
      <Component {...pageProps} />
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
