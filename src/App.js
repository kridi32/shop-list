import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Addshop from "./Components/AddShop";
import FormModal from "./Components/AddShop";
import Home from "./Components/Home";
import SingleShop from "./Components/SingleShop";

function App() {
  
  return (
    <main className="App bg-[#E8F9FD]   min-h-screen w-screen">
      {/* main heading */}
      <h1 className="text-[#2155CD] text-5xl font-bold py-8">Shop list</h1>

      <div className="container mx-auto  flex flex-col justify-center overflow-hidden">
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/shops/add" element={<Addshop />} />
      </Routes>
     </div>
      
      
    </main>
  );
}

export default App;
