import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// #region ::: COMPONENTS

const Title = styled.h1({
  textAlign: "center",
  padding: "10px",
  fontSize: "50px",
});
const TextFavorites = styled.div({
  textAlign: "center",
  fontSize: "18px",
});

const Container = styled.div({
  display: "flex",
  flexDirection: "column",

  padding: "50px 200px",
});

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Text = styled.div({
  textAlign: "center",
  padding: "20px",
  fontSize: "18px",
});

const Button = styled.button({
  boxShadow: "0px 0px 0px 2px #9fb4f2",
  background: "linear-gradient(to bottom, #7892c2 5%, #476e9e 100%)",
  backgroundColor: "#7892c2",
  borderRadius: "10px",
  border: "1px solid #4e6096",
  display: "inlineBlock",
  cursor: "pointer",
  color: "#ffffff",
  fontFamily: "Arial",
  fontSize: "16px",
  padding: "0px 20px",
  textDecoration: "none",
});

//#endregion

interface TPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface Props {
  favorites: number;
}

export const PageHome = ({ favorites }: Props) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);

  return (
    <>
      <Title style={{ textAlign: "center" }}>PostAPP</Title>
      <TextFavorites>{`The number of favorites is: ${favorites}!`}</TextFavorites>
      <Container>
        {posts.map((post) => (
          <>
            <Wrapper>
              <Text key={post.id}>{post.title}</Text>
              <Button onClick={() => navigate(`/detail/${post.id}`)}>
                Detail
              </Button>
            </Wrapper>
          </>
        ))}
      </Container>
    </>
  );
};
