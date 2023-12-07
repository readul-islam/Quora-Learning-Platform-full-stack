import { Route, Routes } from 'react-router-dom';
import Toaster from './Toaster';
import Layout from './components/main/Layout';
import Login from './modules/Auth/pages/Login';
import Register from './modules/Auth/pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
