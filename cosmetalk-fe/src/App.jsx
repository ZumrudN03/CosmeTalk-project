import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import Reviews from "./Pages/Reviews";
import Brands from "./Pages/Brands";
import "./assets/reset.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Wishlist from "./Pages/Wishlist";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/blogdetail/:id" element={<BlogDetail />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
