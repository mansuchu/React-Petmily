import { Outlet } from 'react-router-dom';
import Header5 from '../component/components/Header5';
import Navbar from '../component/components/Navbar';
import Footer from '../component/components/Footer';

function Layout() {
  return (
    <>
      <Navbar/>
      <Header5/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
