import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import BookingForm from "./components/Booking/Create";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Registration";
import Review from "./components/Reviews/Review";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/create/:id" element={<BookingForm/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/review" element={<Review/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
