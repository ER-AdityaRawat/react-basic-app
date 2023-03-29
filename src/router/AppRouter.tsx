import { Route, Routes } from "react-router-dom";
import Banner from "../components/common/Banner";
import Section from "../components/feature/Section";
import Hotel from "../pages/Hotel";
import Parent from "../pages/Parent";
import ParentForm from "../pages/ParentForm";
import PhonePe from "../pages/PhonePe";
import ProductsPage from "../pages/Products";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Banner />
            <Section />
          </>
        }
      />
      <Route path="/knowledgecenter" element={<PhonePe />} />
      <Route path="/caseStudies" element={<Hotel />} />
      <Route path="/offerings" element={<Parent />} />
      <Route path="/productsPage" element={<ProductsPage />} />
      <Route path="/form" element={<ParentForm />} />
    </Routes>
  );
};
export default AppRouter;
