import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PostProvider from "./contexts/PostContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";

function App() {
  return (
    <PostProvider>
      <div className="container my-5">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </PostProvider>
  );
}

export default App;
