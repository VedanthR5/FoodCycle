import DetailedOrder from "../../modules/DetailedOrder";
import Orders from "../../modules/Orders";
import VendorMenu from "../../modules/VendorMenu";
import CreateMenuItem from "../../modules/CreateMenuItem";
import OrderHistory from "../../modules/OrderHistory";
import Settings from "../../modules/Settings";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="order/:id" element={<DetailedOrder />} />
      <Route path="items" element={<VendorMenu />} />
      <Route path="items/create" element={<CreateMenuItem />} />
      <Route path="order-history" element={<OrderHistory />} />
      { <Route path="settings" element={<Settings />} /> }
    </Routes>
  );
};

export default AppRoutes;