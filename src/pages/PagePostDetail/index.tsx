import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";

import iconFavorite from "../../../src/assets/icon/icon.png";
import deleteIcon from "../../../src/assets/icon/remove.png";

// #region ::: COMPONENTS
const Title = styled.h1({
  textAlign: "center",
  padding: "10px",
  fontSize: "50px",
});
const Container = styled.div({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  padding: "50px 150px",
  width: "950px",
});

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Text = styled.div({
  textAlign: "center",
  padding: "30px",
  fontSize: "18px",
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
  backgroundSize: "cover",
  width: "70px",
  height: "50px",
  backgroundImage: `url(${iconFavorite})`,
  border: "none",
  paddingLeft: "10px",
});

const IconRemove = styled.button({
  backgroundSize: "cover",
  width: "70px",
  height: "50px",
  backgroundImage: `url(${deleteIcon})`,
  border: "none",
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
  removeFavorites: (id: number) => void;
}

export const PagePostDetail = ({ onAddFavorites, removeFavorites }: Props) => {
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
      <>
        <Container>
          {comments.map((comment) => (
            <>
              <Wrapper>
                <Text key={comment.id}>{comment.body}</Text>
                <IconFavorite
                  onClick={() => onAddFavorites(comment.id)}
                ></IconFavorite>
                <IconRemove
                  onClick={() => removeFavorites(comment.id)}
                ></IconRemove>
              </Wrapper>
            </>
          ))}
        </Container>
      </>
    </>
  );
};
