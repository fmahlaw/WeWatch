import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import MainPage from "./pages/mainPage/mainPage";
import NoPage from "./pages/noPage";
import HalamanAwal from "./pages/frontPage/frontPage";
import ContactMe from "./pages/contactPage/contactMePage";

function App() {
  
  const [isLogin, setIsLogin] = useState(true)
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<MainPage isLogin={isLogin} setIsLogin={setIsLogin} />} />
          <Route path="frontPage" element={<HalamanAwal isLogin={isLogin} setIsLogin={setIsLogin} />} />
          <Route path="contactMe" element={<ContactMe isLogin={isLogin} setIsLogin={setIsLogin} />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
