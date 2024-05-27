import React, { useState } from "react";
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
      <WriteBox><h3>글쓰기</h3></WriteBox>
      <DetailBox>
        <PostHeader>
          <TitleInput
            placeholder="제목을 입력하세요"
            value={title}
            onChange={handleTitleChange}
          />
        </PostHeader>
        <PostContent>
          <ContentInput
            placeholder="내용을 입력하세요"
            value={content}
            onChange={handleContentChange}
          />
        </PostContent>
        <ButtonWrapper>
          <button>upload</button>
        </ButtonWrapper>
      </DetailBox>
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  button {
    background-color: #a7a7d7;
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

const WriteBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
  border-radius: 3px;
  padding: 20px;
  margin: 20px auto;
  width: 90%;
  height: 400px;
  box-shadow: 0px 0px 5px #d9d9d9;
  box-sizing: border-box;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostContent = styled.div`
  margin-top: 10px;
  line-height: 1.6;
  color: #333;
  border-top: solid #d9d9d9 2px;
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