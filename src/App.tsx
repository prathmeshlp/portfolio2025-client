import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen w-full bg-custom-dark-gradient-latest">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;