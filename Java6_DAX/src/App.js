import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import các trang người dùng
import Shop from "./page/users/Shop";
import TrangChu from "./page/users/TrangChu";
import Login from "./page/account/Login";
import Register from "./page/account/Register";
import ShopSingle from "./page/users/ShopSingle";
import ProfileKh from "./page/users/profileKH";
import GioHang from "./page/users/giohang";
import ThanhToan from "./page/users/ThanhToan";
import HoanThanh from "./page/users/HoanThanh";
import History from "./page/users/History";
import MainLayout from "./MainLayout";

// Import các trang quản trị
import Admin from "./MainAdmin"; // Đổi từ MainAdmin thành Admin để đồng bộ với tên import
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";

import "./Admin.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes công khai */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<TrangChu />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/chitiet" element={<ShopSingle />} />
          <Route path="/ttkhachhang" element={<ProfileKh />} />
          <Route path="/giohang" element={<GioHang />} />
          <Route path="/thanhtoan" element={<ThanhToan />} />
          <Route path="/hoanthanh" element={<HoanThanh />} />
          <Route path="/history" element={<History />} />
        </Route>

        {/* Routes quản trị */}
        <Route element={<Admin />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/team" element={<Team />} />
          <Route path="/admin/contacts" element={<Contacts />} />
          <Route path="/admin/invoices" element={<Invoices />} />
          <Route path="/admin/form" element={<Form />} />
          <Route path="/admin/bar" element={<Bar />} />
          <Route path="/admin/pie" element={<Pie />} />
          <Route path="/admin/line" element={<Line />} />
          <Route path="/admin/faq" element={<FAQ />} />
          <Route path="/admin/calendar" element={<Calendar />} />
          <Route path="/admin/geography" element={<Geography />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
