import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import Brands from "./Pages/Brands";
import "./assets/reset.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Wishlist from "./Pages/Wishlist";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import SkinCareReviews from "./Pages/SkinCareReviews";
import MakeUpReviews from "./Pages/MakeUpReviews";
import AdminPanel from "./Pages/AdminPanel";
import AdminLayout from "./Layouts/AdminLayout";
import AdminMakeUp from "./Pages/AdminMakeUp";
import AdminSkinCare from "./Pages/AdminSkinCare";
import AdminBlog from "./Pages/AdminBlog";
import AddMakeUp from "./Pages/AddMakeUp";
import UpdateMakeUp from "./Pages/UpdateMakeUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/makeupreviews" element={<MakeUpReviews />} />
            <Route path="/skincarereviews" element={<SkinCareReviews />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/blogdetail/:id" element={<BlogDetail />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminPanel />} />
            <Route path="/admin/makeup" element={<AdminMakeUp/>}/>
            <Route path="/admin/skincare" element={<AdminSkinCare/>}/>
            <Route path="/admin/blog" element={<AdminBlog/>}/>
            <Route path="/admin/addmakeup" element={<AddMakeUp/>}/>
            <Route path="/admin/updatemakeup/:id" element={<UpdateMakeUp/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
