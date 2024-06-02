import styled from "styled-components";
import {PostHeader, PostContent} from "./write";
import { ButtonWrapper, PageWrapper } from "./posts";
import api from "./api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../error-page";

export default function PostDetail() {
  
  const {postid} = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  const getPosts = async () => {
    try {
      const res = await api.get(`/blog/${postid}/`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('access')}`
        }
      });
      console.log('응답완료');
      setPost(res.data);
      setLoading(false);
    } catch (err) {
      console.error('에러: ', err);
    }
  }

  useEffect(() => {
    getPosts();
  }, [postid]);

  if (loading) {
    return <PageWrapper>Loading...</PageWrapper>;
  }
  if (!post) {
    return <ErrorPage/>;
  }
  
  return (
    <>
    <PageWrapper>
    <PostboxWrapper>
        <PostBox key={post.id}>    
        <PostId>
        <h5>postid: {post.id}</h5>
        </PostId>    
        <PostHeader>
          <h2>제목: {post.title}</h2>
        </PostHeader>
        <PostHeader>
        <WriterId>
        <h5>by. {post.user}</h5>
        </WriterId>
        <ButtonWrapper>
            <button>edit</button>
            <button>delete</button>
          </ButtonWrapper>
        </PostHeader>
        <hr/>
        <PostContent>
          <p>{post.body}</p>
        </PostContent>
      </PostBox>
    </PostboxWrapper>
    </PageWrapper>
    </>
  );
}

const PostboxWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 30px;
margin: 30px 40px 0px;
`

const PostBox = styled.div`
display: flex;
flex-direction: column;
background-color: #FBFBFB;
border-radius: 15px;
padding: 20px;
width:80%;
height: 60vh;
box-shadow:0px 0px 5px #D9D9D9;
gap:5px;


hr {
  width:100%;
  background-color:#a7a7d7;
  border: none;
  height: 1.5px;
  margin: 0px;
};

h2 {
  margin: 10px 0px 0px 0px;
};

h6 {
  margin: 0px;
  color: #767676;
};
`

const WriterId = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0px 5px 0px;

  h5 {
    color: gray;
    font-size: 10px;
    margin:0px;
  };
`;

const PostId = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0px;

  h5 {
    color: gray;
    font-size: 10px;
    margin:0px;
  };
`