import { Route, Routes } from "react-router-dom";
import LayoutContainer from "../components/templates/layout.template";
import MyPlans from "../pages/my-plans/my-plans";
import Claims from "../pages/claims/claims";
import Faq from "../pages/Faq/faq";
import Settings from "../pages/settings/settings";
import Profile from "../pages/profile/profile";
import Support from "../pages/support/support";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route index element={<MyPlans />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
      </Route>
    </Routes>
  );
};

export default Router;
