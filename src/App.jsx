import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BookingPage } from "./pages/BookingPage";
import { ConfirmedBooking } from "./pages/ConfirmedBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
