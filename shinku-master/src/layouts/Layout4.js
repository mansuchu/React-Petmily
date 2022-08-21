import { Outlet } from 'react-router-dom';
import Header4 from '../component/components/Header4';
import Navbar from '../component/components/Navbar';
import Footer from '../component/components/Footer';

function Layout() {
  return (
    <>
      <Navbar/>
      <Header4/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
