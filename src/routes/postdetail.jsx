import styled from "styled-components";
import {PostHeader, PostContent} from "./write";
import { ButtonWrapper, PageWrapper } from "./posts";
import api from "./api";
import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import ErrorPage from "../error-page";
import Delpost from "../delpost";

export default function PostDetail() {
  
  const {postid} = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState('');
  const [error, setError] = useState('');
  const [showDelModal, setshowDelModal] = useState(false);
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

  //삭제 버튼 클릭 -> 모달표시 
  const handleDeleteClick = async () => {
    setshowDelModal(true);
  };

  const confirmDeletePost = () => {
    deletePost(post.id);
    setshowDelModal(false);
  };

  const cancelDeletePost = () => {
      setshowDelModal(false);
  };
  
  // 수정
  const handleEditClick = () => {
    navigate(`/edit/${postid}`); // 수정 페이지로 이동
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
            <button onClick={handleEditClick}>edit</button>
            <button onClick={handleDeleteClick}>delete</button>
        </ButtonWrapper>
        </PostHeader>
        <hr/>
        <PostContent>
          <p>{post.body}</p>
        </PostContent>
      </PostBox>
    </PostboxWrapper>
    {showDelModal && (//modal 표시조건
      <Modal>
      <Delpost
        onConfirm={confirmDeletePost} 
        onCancel={cancelDeletePost}
      />
    </Modal>
    )}

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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  ;
`

