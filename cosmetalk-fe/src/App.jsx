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
import AdminPanel from "./Pages/Admin/AdminPanel";
import AdminLayout from "./Layouts/AdminLayout";
import AdminMakeUp from "./Pages/Admin/AdminMakeUp";
import AdminSkinCare from "./Pages/Admin/AdminSkinCare";
import AdminBlog from "./Pages/Admin/AdminBlog";
import AddMakeUp from "./Pages/Admin/AddMakeUp";
import UpdateMakeUp from "./Pages/Admin/UpdateMakeUp";
import AddSkinCare from "./Pages/Admin/AddSkinCare";
import AddBlog from "./Pages/Admin/AddBlog";
import UpdateSkinCare from "./Pages/Admin/UpdateSkinCare";
import UpdateBlog from "./Pages/Admin/UpdateBlog";
import Register from "./Pages/Register";

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
            <Route path="/register" element={<Register/>}/>
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminPanel />} />
            <Route path="/admin/makeup" element={<AdminMakeUp/>}/>
            <Route path="/admin/skincare" element={<AdminSkinCare/>}/>
            <Route path="/admin/blog" element={<AdminBlog/>}/>
            <Route path="/admin/addmakeup" element={<AddMakeUp/>}/>
            <Route path="/admin/updatemakeup/:id" element={<UpdateMakeUp/>}/>
            <Route path="/admin/addskincare" element={<AddSkinCare/>}/>
            <Route path="/admin/addblog" element={<AddBlog/>}/>
            <Route path="/admin/updateskincare/:id" element={<UpdateSkinCare/>}/>
            <Route path="/admin/updateblog/:id" element={<UpdateBlog/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
