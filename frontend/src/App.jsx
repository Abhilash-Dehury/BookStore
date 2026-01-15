import Home from "./home/Home";
import Courses from "./courses/Courses";
import Contacts from "./contact/Contacts";
import Register from "./components/Register";
import  { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser,setAuthUser]=useAuth();
    console.log(authUser);
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={authUser?<Courses />:<Navigate to="/register"/>} />
      <Route path='/contact' element={<Contacts/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    <Toaster/>
    </div>
  );
};

export default App;

