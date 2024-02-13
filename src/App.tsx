import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageAdmin } from "./pages/Admin";
import { Home } from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { LoginRoute } from "./components/LoginRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AlertProvider } from "./context/AlertContext";
import { SignupRoute } from "./components/SignupRoute";
import { VideoUploadPage } from "./pages/VideoUploadPage";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AlertProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/" element={<PageAdmin />}>
                  <Route index element={<Home />} />
                  <Route
                    path="/my-videos"
                    element={<Home isMyVideos={true} />}
                  />
                  <Route path="/upload-video" element={<VideoUploadPage />} />
                </Route>
              </Route>
              <Route path="/" element={<PageAdmin />}>
                <Route path="/public-videos" element={<Home />} />
                <Route path="/login" element={<LoginRoute />} />
                <Route path="/signup" element={<SignupRoute />} />
              </Route>
              <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
          </BrowserRouter>
        </AlertProvider>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
