import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import EmotionStatePage from "./pages/EmotionStatePage/EmotionStatePage";
import StrategiesPage from "./pages/StrategiesPage/StrategiesPage";
import UserPage from "./pages/UserPage/UserPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Reactive Minds</h1>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/emotions" element={<EmotionStatePage />}></Route>
          <Route path="/users" element={<UserPage />}></Route>
          <Route path="/strategies" element={<StrategiesPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
