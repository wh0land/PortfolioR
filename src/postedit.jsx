import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "./routes/api";
import { BoxWrapper, PostHeader, PostContent, TitleInput, ContentInput, SubmitButtonWrapper } from "./routes/write";
import { PageTitle, PageWrapper } from "./routes/posts";

export default function PostEdit() {
  const { postid } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await api.get(`/blog/${postid}/`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access")}`,
          },
        });
        setPost(res.data);
        setPostData({
          title: res.data.title,
          body: res.data.body,
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching post:", err);
        setLoading(false);
      }
    };

    getPost();
  }, [postid]);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/blog/${postid}/`, postData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access")}`,
        },
      });
      console.log("Post updated successfully:", res.data);
      navigate(`/posts/${postid}`);
    } catch (err) {
      console.error("Error updating post:", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper>
      <PageTitle>
        <h2>글 수정</h2>
      </PageTitle>
      <BoxWrapper>
        <PostHeader>
          <TitleInput
            placeholder="제목"
            name="title"
            value={postData.title}
            onChange={handleChange}
          />
        </PostHeader>
        <PostContent>
          <ContentInput
            placeholder="내용"
            name="body"
            value={postData.body}
            onChange={handleChange}
          />
        </PostContent>
        <SubmitButtonWrapper>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </SubmitButtonWrapper>
      </BoxWrapper>
    </PageWrapper>
  );
}