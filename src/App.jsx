import { Route, Routes } from "react-router-dom";
import Toaster from "./Toaster";
import Home from "./modules/Home/Home";
import Login from "./modules/Auth/pages/Login";
import Register from "./modules/Auth/pages/Register";


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
        </Routes>
        <Toaster/>
      </>
     
    </>
  );
}

export default App;
