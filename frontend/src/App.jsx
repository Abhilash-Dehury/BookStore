import Home from "./home/Home";
import Courses from "./courses/Courses";
import Contacts from "./contact/Contacts";
import Register from "./components/Resister";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path='/contact' element={<Contacts/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
};

export default App;

