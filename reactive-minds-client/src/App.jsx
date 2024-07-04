import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import EmotionStatePage from "./pages/EmotionStatePage/EmotionStatePage";
import StrategiesPage from "./pages/StrategiesPage/StrategiesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/emotions" element={<EmotionStatePage />}></Route>
          <Route path="/strategies" element={<StrategiesPage />}></Route>
          <Route path="/users" element={<LoginPage />}></Route>
          <Route path="/profile/:user" element={<ProfilePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
