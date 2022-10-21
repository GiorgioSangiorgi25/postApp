import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PageHome } from "./pages/PageHome";
import { PagePostDetail } from "./pages/PagePostDetail";

const App = () => {
  const [favoriteList, setFavoriteList] = useState<number[]>([]);
  const onAddFavorites = (id: number) => {
    setFavoriteList([...favoriteList, id]);
  };
  const removeFavorites = (id: number) => {
    const filteredFavoriiteList = favoriteList.filter(
      (favorite) => favorite !== id
    );
    setFavoriteList(filteredFavoriiteList);
  };

  const favoriteLength = favoriteList.length;

  return (
    <Routes>
      <Route path="/" element={<PageHome favorites={favoriteLength} />} />
      <Route
        path="detail/:postId"
        element={
          <PagePostDetail
            onAddFavorites={onAddFavorites}
            removeFavorites={removeFavorites}
          />
        }
      />
    </Routes>
  );
};

export default App;
