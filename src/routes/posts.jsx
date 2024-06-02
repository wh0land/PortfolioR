import styled from "styled-components";
import { useState, useEffect } from "react";
import api from "./api";
import { Link } from "react-router-dom";

export default function Posts() {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await api.get('/blog/');
      console.log('응답완료');
      setPosts(response.data);
    } catch (error) {
      console.error('에러: ', error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
    <PlistPageWrapper>
    <PageTitle><h2>게시글</h2></PageTitle>
    <PostboxWrapper>
    {posts.map((post) => (
        <PostBox key={post.id}>          
          <PostMeta>
            <h6>post id:  {post.id}</h6>
            <h6>user id: {post.user}</h6>
          </PostMeta>
          <hr/>
          <h3>제목: {post.title}</h3>
          <PostListContent>
          <p>{post.body}</p>
          </PostListContent>
          <ButtonWrapper>
            <Link to={`/posts/${post.id}`}><button><span>상세보기</span></button></Link>
          </ButtonWrapper>
        </PostBox>
          ))}
      </PostboxWrapper>
    </PlistPageWrapper>
    </>
  )
}

export const PageWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh; 
`
const PlistPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; 
  margin-bottom: 30px;
`

export const PageTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`

export const PostboxWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
gap: 30px;
margin: 30px 40px 0px;
`

export const PostBox = styled.div`
display: flex;
flex-direction: column;
background-color: #FBFBFB;
border-radius: 15px;
padding: 20px;
width: calc(33.333% - 20px); 
box-shadow:0px 0px 5px #D9D9D9;
gap:5px;


hr {
  width:100%;
  background-color:#a7a7d7;
  border: none;
  height: 1.5px;
  margin: 0px;
};

h3 {
  margin: 20px 0px 0px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
};

h6 {
  margin: 0px;
  color: #767676;
};
`

export const PostMeta = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: baseline;
  margin-right: 20px;
`

const PostListContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  p {
    margin: 0 10 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ButtonWrapper = styled.div`
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

    span {
      font-size: 10px;
    }

    &:hover {
      background-color: #8c8cc7;
    }
  }
`;
