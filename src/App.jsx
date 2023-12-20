import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./pages/root-layout/RootLayout";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          <Route element={ <RootLayout /> }>
            <Route element={ <Home /> } path="/" />
          </Route>

        </Routes>
      </Router>
    </div>
  );
};

export default App;