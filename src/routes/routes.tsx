import { Route, Routes } from "react-router-dom";
import LayoutContainer from "../components/templates/layout.template";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}></Route>
    </Routes>
  );
};

export default Router;
