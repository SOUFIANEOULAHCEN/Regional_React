import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesHome from "./routes/RoutesHome";
import HomePosts from "./components/PostsManager/HomePosts";
import PostsProvider from "./context/PostsContext";
import SyntheseHome from "./components/Synthese/Synthese3/SyntheseHome";
import Synthese4Home from "./components/Synthese/Synthese4/Synthese4Home";
import ListeStagaire from "./components/regionale/Fes_Meknes2023/ListeStagaire";
// import SupprimerStg from "./components/regionale/Fes_Meknes2023/SupprimerStg";
export default function App() {
  return (
    <>
      <PostsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RoutesHome />} />
            <Route path="/Posts" element={<HomePosts />} />
            <Route path="/Synthese3" element={<SyntheseHome />} />
            <Route path="/Synthese4" element={<Synthese4Home />} />
            <Route path="/Fes_Meknes" element={<ListeStagaire />}>
              {/* <Route path="SupprimerStg" element={<SupprimerStg />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </>
  );
}
