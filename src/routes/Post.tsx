import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { InterfacePost, Posts } from "./Home";

export default function Post() {
  const { id } = useParams();

  console.log(id);

  //States

  const [post, setPost] = useState<InterfacePost>();

  const getPost = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    const data = response.data;

    setPost(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Container>
        {!post ? (
          <h1>Carregando</h1>
        ) : (
          <Posts isActive={true}>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
          </Posts>
        )}
      </Container>
    </>
  );
}

//Styles

const Container = styled.section`
  margin: 10vh 10vw;
  text-align: center;
`;
