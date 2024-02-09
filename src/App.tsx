import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageAdmin } from "./pages/Admin";
import { Home } from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { LoginRoute } from "./components/LoginRoute";

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<PageAdmin />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
          <Route path="/" element={<PageAdmin />}>
            <Route path="/public-videos" element={<Home />} />
            <Route path="/login" element={<LoginRoute />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
