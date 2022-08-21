import { Outlet } from 'react-router-dom';
import Header1 from '../component/components/Header1';
import Navbar from '../component/components/Navbar';
import Footer from '../component/components/Footer';

function Layout() {
  return (
    <>
      <Navbar/>
      <Header1/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
