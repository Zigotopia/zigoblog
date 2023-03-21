import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NewPost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function handlePost(e: any) {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await axios.post("https://jsonplaceholder.typicode.com/posts", {
      body: post,
    });

    navigate("/")
  }

  return (
    <Container>
      <Titulo>Add New Post</Titulo>
      <Form onSubmit={handlePost}>
        <label htmlFor="titulo">Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="titulo"
          id="titulo"
          placeholder="Type any title..."
        />

        <label htmlFor="conteudo">Content:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name="conteudo"
          id="conteudo"
          placeholder="Type any content..."
        ></textarea>

        <button>Create Post</button>
      </Form>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
`;

const Form = styled.form`
  max-width: 40vw;
  width: 35vw;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 700;
  }

  input {
    margin-bottom: 0.5rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: none;
    padding-inline: 1rem;
  }

  textarea {
    height: 1rem;
    border-radius: 0.5rem;
    border: none;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  button {
    width: fit-content;
    border: none;
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: grey;
    transition: .3s;

    :hover {
      cursor: pointer;
      background-color: black;
      color: white;
      border: 1px solid white;
  
    }
  }
`;

const Titulo = styled.h1`
  font-size: 3rem;
  color: white;
  font-weight: 700;
  margin-bottom: 2rem;
`;
