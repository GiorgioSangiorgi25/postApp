import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PageHome } from "./pages/PageHome";
import { PagePostDetail } from "./pages/PagePostDetail";

const App = () => {
  const [favorite, setFavorite] = useState<number[]>([]);
  const onAddFavorites = (id: number) => {
    setFavorite([...favorite, id]);
  };
  const favoriteLength = favorite.length;

  return (
    <Routes>
      <Route path="/" element={<PageHome favorites={favoriteLength} />} />
      <Route
        path="detail/:postId"
        element={<PagePostDetail onAddFavorites={onAddFavorites} />}
      />
    </Routes>
  );
};

export default App;
