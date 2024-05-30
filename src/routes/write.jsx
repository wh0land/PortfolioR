import { useState } from "react";
import { PageTitle } from "./posts";
import styled from "styled-components";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <PageTitle><h3>글쓰기</h3></PageTitle>
      <BoxWrapper>
        <PostHeader>
          <TitleInput
            placeholder="제목"
            value={title}
            onChange={handleTitleChange}
          />
        </PostHeader>
        <PostContent>
          <ContentInput
            placeholder="내용"
            value={content}
            onChange={handleContentChange}
          />
        </PostContent>
        <ButtonWrapper>
          <button>Upload</button>
        </ButtonWrapper>
      </BoxWrapper>
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  button {
    background-color: #a7a7d7;
    width: 100%;
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #8c8cc7;
    }
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
  border-radius: 15px;
  padding: 20px;
  margin: 20px auto;
  width: 90%;
  height: auto;
  box-shadow: 0px 0px 5px #d9d9d9;
  box-sizing: border-box;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #333;
  overflow-wrap: break-word;
  p {
    margin: 0 10 0 0;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-size: 16px;
  outline: none;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-size: 16px;
  outline: none;
  resize: none;
`;