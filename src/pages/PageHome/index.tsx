import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// #region ::: COMPONENTS

const Title = styled.h1({
  textAlign: "center",
  fontFamily: "Georgia, serif",
  fontSize: "70px",
  letterSpacing: "-0.4px",
  wordSpacing: "1.8px",
  color: "#000000",
  fontWeight: "700",
  textDecoration: "none solid rgb(68, 68, 68)",
  fontStyle: "italic",
  fontVariant: "small-caps",
  textTransform: "none",
});
const TextFavorites = styled.div({
  textAlign: "center",
  fontFamily: "Georgia, serif",
  fontSize: "30px",
  letterSpacing: "-0.4px",
  wordSpacing: "1.8px",
  color: "#000000",
  fontWeight: "700",
  textDecoration: "underline solid rgb(68, 68, 68)",
  fontStyle: "italic",
  fontVariant: "small-caps",
  textTransform: "capitalize",
});

const Container = styled.div({
  paddingBottom: "40px",
  padding: "50px 200px",
});

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const TextWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});

const TextTitle = styled.div({
  textAlign: "center",
  padding: "20px",
  fontSize: "24px",
  fontWeight: "700px",
});

const Text = styled.div({
  textAlign: "center",
  padding: "20px",
  fontSize: "20px",
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
      <Title style={{ textAlign: "center" }}>postApp!</Title>
      <TextFavorites>{`The number of favorites is: ${favorites}!`}</TextFavorites>
      <div style={{ backgroundImage: "" }}></div>
      <Container>
        {posts.map((post) => (
          <>
            <Wrapper key={post.id}>
              <TextWrapper>
                <TextTitle>{post.title}</TextTitle>
                <Text>{post.body}</Text>
              </TextWrapper>

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
