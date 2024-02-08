import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { PageAdmin } from "./pages/Admin";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageAdmin />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
