import styled from "styled-components";
import {PostHeader, PostContent} from "./write";
import { ButtonWrapper, PageWrapper } from "./posts";
import api from "./api";
import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import ErrorPage from "../error-page";

export default function PostDetail() {
  
  const {postid} = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, [postid]);
  
  // 삭제 클릭 핸들러
  const deletePost = async (postid) => {
    try {
        const res = await api.delete(`/blog/${postid}/`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('access')}`
          }
        });
        console.log('삭제 완료', res);
        if (res && res.status === 204) {
          navigate('/posts');
        } else {
          console.error('삭제실패', res);
        }
      } catch (err) {
        console.error('에러: ', err);
      }
  };

  const handleDeleteClick = async () => {
    try {
      deletePost(post.id);
      console.log("삭제완료!")
      navigate('/post');
    } catch (err) {
      console.error('에러: ', err);
      setError(err);
    }
  };
      

  if (loading) {
    return <PageWrapper>Loading...</PageWrapper>;
  }

  if (error) {
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
          <h2>{post.title}</h2>
        </PostHeader>
        <PostHeader>
        <WriterId>
        <h5>by. {post.user}</h5>
        </WriterId>
        <ButtonWrapper>
            <button>edit</button>
            <button onClick={handleDeleteClick}>delete</button>
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