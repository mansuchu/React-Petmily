import { Outlet } from 'react-router-dom';
import Header from '../component/components/Header';
import Navbar from '../component/components/Navbar';
import Footer from '../component/components/Footer';

function Layout() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;
