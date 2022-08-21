import { Outlet } from 'react-router-dom';
import Header3 from '../component/components/Header3';
import Navbar from '../component/components/Navbar';
import Footer from '../component/components/Footer';

function Layout() {
  return (
    <>
      <Navbar/>
      <Header3/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
