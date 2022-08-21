import { Outlet } from 'react-router-dom';
import Header2 from '../component/components/Header2';
import Navbar from '../component/components/Navbar';
import Footer from '../component/components/Footer';

function Layout() {
  return (
    <>
      <Navbar/>
      <Header2/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
