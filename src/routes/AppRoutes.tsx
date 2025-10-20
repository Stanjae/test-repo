import { Route, Routes } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import TechDocumentation from "../pages/TechDocumentation";
import Buildings from "../pages/Buildings";
import FerrisWheel from "../pages/FerrisWheel";
import InstaStories from "../pages/InstaStories";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="buildings" element={<Buildings />} />
        <Route path="ferris-wheel" element={<FerrisWheel />} />
        <Route path="insta-stories" element={<InstaStories />} />
      </Route>
      <Route path="technical-documentation" element={<TechDocumentation />} />
    </Routes>
  );
}

export default AppRoutes