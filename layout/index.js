import Head from './head';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
