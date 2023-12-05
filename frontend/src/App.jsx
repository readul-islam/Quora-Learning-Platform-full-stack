import { Route, Routes } from "react-router-dom";
import Toaster from "./Toaster";
import Home from "./modules/Home/Home";
import Login from "./modules/Auth/pages/Login";
import Register from "./modules/Auth/pages/Register";
import CourseList from "./modules/Courses/CourseList";
import Course from "./modules/Courses/Course";
import Dashboard from "./modules/Dashboard/pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/main/Layout";

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
