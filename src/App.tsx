import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageAdmin } from "./pages/Admin";
import { Home } from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { LoginCopy } from "./components/Login/LoginCopy";

export const App = () => {
  return (
    <AuthProvider isSignedIn={true}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<PageAdmin />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
          <Route path="/" element={<PageAdmin />}>
            <Route path="/public-videos" element={<Home />} />
            <Route path="/login" element={<LoginCopy />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
