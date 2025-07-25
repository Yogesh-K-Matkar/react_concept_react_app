import { useEffect, useState } from "react";
import {
  getCall,
  postCall,
  putCall,
  deleteCall,
} from "../api_services_utils/AxiosAPIMethods";
import { LoadPosts } from "../components/UI/LoadPosts";
import { AddPost } from "../components/UI/AddPost";

export const CRUDOperationsAxios = () => {
  const apiAccessMethod = import.meta.env.VITE_API_ACCESS_METHOD;

  const initPost = { title: "", body: "" };
  const initLstPosts = [initPost];

  //get
  const [lstPosts, setLstPosts] = useState(initLstPosts);

  useEffect(() => {
    console.log("Load");
    try {
      if (apiAccessMethod === "axios") {
        getPostsData("/posts");
      }
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  }, []);

  const getPostsData = async (URL) => {
    const res = await getCall(URL);
    setLstPosts(res.data);
    console.log(lstPosts);
    console.log("Post loaded successfully");
  };

  //post
  const addPostData = async (URL, payload) => {
    const res = await postCall(URL, payload);

    if (res.status === 201) {
      console.log("Post added successfully");
      res.data.userId = 1;
      res.data.id = lstPosts.length + 1;
      setLstPosts([...lstPosts, res.data]);
    } else {
      console.error("Error Message ", res.error.message);
      console.error("Error Status ", res.error.status);
      console.error("Failed to add post");
    }
  };

  //delete
  const deletePostData = async (URL, id) => {
    const res = await deleteCall(URL);

    if (res.status === 200) {
      console.log("Post deleted successfully");
      setLstPosts(lstPosts.filter((post) => post.id !== id));
    } else {
      console.error("Error Message ", res.error.message);
      console.error("Error Status ", res.error.status);
      console.error("Failed to delete post");
    }
  };

  //edit then update
  const [getEditPost, setGetEditPost] = useState(initPost);

  const getEditPostData = (editPost) => {
    setGetEditPost(editPost);
  };

  // put
  const putPostData = async (URL, payload) => {
    const res = await putCall(URL, payload);

    if (res.status === 200) {
      console.log("Post updated successfully");
      setLstPosts((prevState) => {
        return prevState.map((post) => {
          return post.id === res.data.id
            ? { ...post, title: res.data.title, body: res.data.body }
            : post;
        });
      });
      setGetEditPost(initPost);
    } else {
      console.error("Error Message ", res.error.message);
      console.error("Error Status ", res.error.status);
      console.error("Failed to delete post");
    }
  };

  return (
    <section className="main-section">
      <section className="section-form">
        <AddPost
          addPostData={addPostData}
          getEditPostData={getEditPost}
          putPostData={putPostData}
        />
      </section>
      <section className="section-post">
        <LoadPosts
          lstData={lstPosts}
          getEditPostData={getEditPostData}
          deletePostData={deletePostData}
        />
      </section>
    </section>
  );
};
