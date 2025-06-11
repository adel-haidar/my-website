import './App.css'
import {MainNavigationMenuList} from "@/navigation/Navigation";
import {Route, Routes} from "react-router-dom"
import LanguageLearning from "@/language-learning/LanguageLearning";
import Home from "@/Home/Home";
import TechArticles from "@/tech-articles/TechArticles";
import LocalizationModuleFederation
  from "@/LocalizationModuleFederation/LocalizationModuleFederation";


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
          <Route
              path="/tech-articles"
              element={<TechArticles />}
          />
          <Route
              path="/localization-module-federation"
              element={<LocalizationModuleFederation/>}
            />
        </Routes>
      </main>
  );
};

export default App;
