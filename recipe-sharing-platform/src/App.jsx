import UserProfile from "./components/UserProfile"
import HomePage from "./components/HomePage"
import RecipeDetail from "./components/RecipeDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/recipe/:id" element={<RecipeDetail />}/>
        </Routes>
      </BrowserRouter>
        {/* <HomePage />
        <UserProfile /> */}
    </div>
  );
};

export default App
