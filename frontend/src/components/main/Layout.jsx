import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import routes from "./routes";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

const Layout = () => {
  const params = useLocation();
  
  console.log(params)
  const renderRoutes = routes.map(
    (route) =>
      route.component && (
        <Route
          key={route.id}
          path={`${route.path}`}
          element={<route.component />}
        />
      )
  );
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-tr min-h-screen from-accent to-neutral ">
        <Routes>{renderRoutes}</Routes>
      </div>
    <Footer />
    </>
  );
};

export default Layout;
