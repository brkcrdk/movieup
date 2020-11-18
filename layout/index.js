import Head from './head';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      {children}
    </>
  );
};

export default Layout;
