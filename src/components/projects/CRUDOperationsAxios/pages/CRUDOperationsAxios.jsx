import { useEffect, useState } from "react";
import { getCall, deleteCall } from "../api_services_utils/AxiosAPIMethods";
import { LoadPosts } from "../components/UI/LoadPosts";
import { AddPost } from "../components/UI/AddPost";

export const CRUDOperationsAxios = () => {
  const initLstPosts = [];

  const apiAccessMethod = import.meta.env.VITE_API_ACCESS_METHOD;

  useEffect(() => {
    try {
      if (apiAccessMethod === "axios") {
        getData("/posts");
      }
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  }, []);

  const [lstPosts, setLstPosts] = useState(initLstPosts);

  const getData = async (URL) => {
    const res = await getCall(URL);
    setLstPosts(res.data);
    console.log("Post loaded successfully");
  };

  const handleDeletePost = (id) => {
    try {
      if (apiAccessMethod === "axios") {
        deleteData(`/posts/${id}`, id);
      }
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  };

  const deleteData = async (URL, id) => {
    const res = await deleteCall(URL);

    if (res.status === 200) {
      console.log("Post deleted successfully");
      setLstPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } else {
      console.error("Error Message ", res.error.message);
      console.error("Error Status ", res.error.status);
      console.error("Failed to delete post");
    }
  };

  return (
    <section className="main-section">
      <section className="section-form">
        <AddPost />
      </section>
      <section className="section-post">
        <LoadPosts lstData={lstPosts} handleDeletePost={handleDeletePost} />
      </section>
    </section>
  );
};
