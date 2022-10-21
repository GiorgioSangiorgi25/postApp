import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";

// #region ::: COMPONENTS
const Title = styled.h1({
  textAlign: "center",
  padding: "10px",
  fontSize: "50px",
});
const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  padding: "50px 150px",
});

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

const Text = styled.div({
  textAlign: "center",
  padding: "30px",
  fontSize: "16px",
});

const ReturnButton = styled.button({
  backgroundColor: "#cc3333",
  borderRadius: "28px",
  border: "1px solid #194aab",
  display: "inline-block",
  cursor: "pointer",
  color: "#ffffff",
  fontFamily: "Arial",
  fontSize: "17px",
  padding: "16px 31px",
  textDecoration: "none",
  textShadow: "0px 1px 0px #665e28",
  marginLeft: "10px",
});

const IconFavorite = styled.button({
  background: "url(star.png)",
});

const Button = styled.button({
  boxShadow: "0px 0px 0px 2px #747474",
  background: "linear-gradient(to bottom, #a59519 5%, #476e9e 100%)",
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

interface TComment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

interface Props {
  onAddFavorites: (id: number) => void;
}

export const PagePostDetail = ({ onAddFavorites }: Props) => {
  const [comments, setComments] = useState<TComment[]>([]);

  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, []);

  return (
    <>
      <Title style={{ textAlign: "center" }}>Comments</Title>
      <ReturnButton onClick={() => navigate(`/`)}>Return to home</ReturnButton>
      <Container>
        {comments.map((comment) => (
          <>
            <Wrapper>
              <Text key={comment.id}>{comment.body}</Text>
              <Button onClick={() => onAddFavorites(comment.id)}>
                favorites
              </Button>
            </Wrapper>
          </>
        ))}
      </Container>
    </>
  );
};
