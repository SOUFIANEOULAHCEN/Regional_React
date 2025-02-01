import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesHome from "./routes/RoutesHome";
import HomePosts from "./components/PostsManager/HomePosts";
import PostsProvider from "./context/PostsContext";
export default function App() {
  return (
    <>
      <PostsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RoutesHome />} />
            <Route path="/Posts" element={<HomePosts />} />
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </>
  );
}
