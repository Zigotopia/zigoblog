import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export interface InterfacePost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<InterfacePost[]>([]);

  async function getPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const data = response.data;

    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Section>
      <h1>New Posts</h1>

      {posts.map((post) =>
        !post ? (
          <h1>Carregando</h1>
        ) : (
          <Posts key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Button onClick={() => navigate(`/post/${post.id}`)}>
             Read about
            </Button>
          </Posts>
        )
      )}
    </Section>
  );
}

//styles
const Section = styled.section`
  margin: 10vh 10vw;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const Posts = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  gap: 1rem;
  max-width: 1000px;
  width: 100%;
  margin: 2rem auto;
  border-bottom: ${(props) => (props.isActive ? "none" : "1px solid grey")};
  text-align: left;

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    color: grey;
  }
`;

const Button = styled.h4`
  background-color: white;
  color: black;
  opacity: 1;
  padding: 0.5rem 1rem;
  border-radius: 1rem;

  width: fit-content;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    background-color: #303030;
    color: white;
    border: 1px solid white;
  }
`;
