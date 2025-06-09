import './App.css'
import {Spotlight} from "./spotlight/Spotlight.tsx";
import {MainNavigationMenuList} from "@/navigation/Navigation";
import {Route, Routes} from "react-router-dom"
import LanguageLearning from "@/language-learning/LanguageLearning";
import Home from "@/Home/Home";


const App = () => {
  return (
      <main className="bg-black min-h-screen flex flex-col items-center justify-center">
        <div className="top-2 z-50 fixed justify-center items-center">
          <MainNavigationMenuList/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/language-learning"
            element={<LanguageLearning />}
          />
        </Routes>
        <div>
          <Spotlight
              className="-top-40 left-0 md:-top-20 md:left-60"
              fill="white"
          />
        </div>
      </main>
  );
};

export default App;
