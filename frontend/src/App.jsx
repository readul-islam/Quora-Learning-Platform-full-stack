import { Route, Routes } from "react-router-dom";
import Toaster from "./Toaster";
import Home from "./modules/Home/Home";
import Login from "./modules/Auth/pages/Login";
import Register from "./modules/Auth/pages/Register";
import CourseList from "./modules/Courses/CourseList";
import Course from "./modules/Courses/Course";


function App() {
 
  return (
    <>
    
      <>
     
        <Routes>
          {['/', 'home'].map((path) => (
            <Route path={path} element={<Home />} >
        </Route>
          ))}
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/courses' element={<CourseList/>}/>
          <Route path='/course/:courseId' element={<Course/>}/>
        </Routes>
        <Toaster/>
      </>
     
    </>
  );
}

export default App;
