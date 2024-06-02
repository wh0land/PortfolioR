import { useState } from "react";
import { PageTitle, PageWrapper } from "./posts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "./api";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();


  const writePost = async () => {
    const data = {
      title: title,
      body: content,
    };
    
    try {
      const response = await api.post('/blog/', data, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('access')}`
        }
      });
      console.log('응답완료', response);
      setPosts([...content, response.data]);
      setTitle('');
      setContent('');
      //포스트 성공시
      navigate('/posts');
    } catch (error) {
      console.log('에러: ', error);
    }
  };

  return (
    <>
    <PageWrapper>
    <PageTitle><h2>글쓰기</h2></PageTitle>
    {posts.map((post) => (
      <div key={post.id}>
          <h2>제목: {post.title}</h2>
          <p>{post.body}</p>
      </div>
    ))}
      <BoxWrapper>
        <PostHeader>
          <TitleInput
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </PostHeader>
        <PostContent>
          <ContentInput
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </PostContent>
        <SubmitButtonWrapper>
          <button onClick={writePost}>Upload</button>
        </SubmitButtonWrapper>
      </BoxWrapper>
    </PageWrapper>
    </>
  );
}

export const SubmitButtonWrapper = styled.div`
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
  white-space: nowrap;

  p {
    margin: 0 10 0 0;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: keep-all;   

  }
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-size: 16px;
  outline: none;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-size: 16px;
  outline: none;
  resize: none;
`;