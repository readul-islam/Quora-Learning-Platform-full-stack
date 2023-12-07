import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import routes from './routes';

const Layout = () => {
  const params = useLocation();

  console.log(params);
  const renderRoutes = routes.map(
    (route) =>
      route.component && (
        <Route
          key={route.id}
          path={`${route.path}`}
          element={<route.component />}
        />
      ),
  );
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-tr mt-2 min-h-screen from-accent to-neutral ">
        <Routes>{renderRoutes}</Routes>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
