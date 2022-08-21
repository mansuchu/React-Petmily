import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';
import Layout3 from './layouts/Layout3';
import Layout4 from './layouts/Layout4';
import Layout5 from './layouts/Layout5';
import AppForm from './component/form/AppForm';
import LoginForm from './component/form/LoginForm';
import SingUp from './pages/SignUp';
import Main from './pages/Main';
import './App.css';
import MyPage from './pages/MyPage';
import Prodect from './pages/Prodect';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>

        <Route path="/" element={<Layout1 />}>
          <Route path="prodect" element={<Prodect />} />
        </Route>

        <Route path="/" element={<Layout2 />}>
        <Route path="mypage" element={<MyPage />} />
        </Route>

        <Route path="/" element={<Layout3 />}>
          <Route path="login" element={<LoginForm />} />
        </Route>

        <Route path="/" element={<Layout4 />}>
          <Route path="SingUp" element={<SingUp />} /> 
        </Route>

        <Route path="/" element={<Layout5 />}>
        <Route path="AppForm" element={<AppForm />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
