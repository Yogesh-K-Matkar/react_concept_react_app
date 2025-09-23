//import { useMemo } from "react";
import {
  useQuery,
  keepPreviousData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchPosts, addPost, updatePost, deletePosts } from "../api/api.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ReactQueryFetch = () => {
  const [pageno, setPageNo] = useState(1);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageno], //Like useState
    queryFn: async () => await fetchPosts(pageno), //Like useEffect
    gcTime: 2 * 1000, //Garbage Collection Time Till 2sec
    staleTime: 5 * 1000, //Keep Data Fresh Time Till 5sec
    // refetchInterval: 6 * 1000, //Refetch Data Every 6sec automatically call api without taking any action
    // refetchIntervalInBackground: true, //Refetch Data Every automatically call api without taking any action when Page/Tab is not active
    placeholderData: keepPreviousData,
  });

  console.log("API Data:", data);

  //useMutation --> useQueryClient

  const hookQueryClient = useQueryClient();

  //Insert/Add
  const handlePostAdd = () => postAdd.mutate();

  const postAdd = useMutation({
    mutationFn: async () => {
      const newPost = {
        title: "I have added a new post",
        body: "Added",
      };

      return await addPost(newPost);
    },
    onSuccess: async (apiResponse) => {
      console.log(apiResponse);

      const { data, status } = apiResponse;

      if (status === 201) {
        const { id, title, body } = data;

        return await hookQueryClient.setQueryData(
          ["posts", pageno],
          (cachedPostsData) => {
            return [...cachedPostsData, { userId: id, id, title, body }];
          }
        );
      }

      console.log(status === 201 && "Post added successfully");
    },
    onError: (error) => console.error(error),
    onSettled: (response, error) => console.log(response, error),
  });

  //Update
  const handlePostUpdate = (id) => postUpdate.mutate(id);

  const postUpdate = useMutation({
    mutationFn: async (id) => {
      const updatedPost = {
        title: "I have updated the post",
        body: "Updated",
      };

      return await updatePost(id, updatedPost);
    },
    onSuccess: async (apiResponse, id) => {
      console.log(apiResponse, id);

      const { data, status } = apiResponse;

      if (status === 200) {
        const { title, body } = data;

        return await hookQueryClient.setQueryData(
          ["posts", pageno],
          (cachedPostsData) => {
            return cachedPostsData?.map((post) => {
              return post.id === id
                ? { ...post, title: title, body: body }
                : post;
            });
          }
        );
      }

      console.log(status === 200 && "Post updated successfully");
    },
    onError: (error) => console.error(error),
    onSettled: (response, error) => console.log(response, error),
  });

  //Delete
  const handlePostDelete = (id) => postDelete.mutate(id);

  const postDelete = useMutation({
    mutationFn: async (id) => await deletePosts(id),
    onSuccess: async (apiResponse, id) => {
      console.log(apiResponse, id);

      const { status } = apiResponse;

      if (status === 200) {
        return await hookQueryClient.setQueryData(
          ["posts", pageno],
          (cachedPostsData) => {
            return cachedPostsData?.filter((post) => post.id !== id);
          }
        );
      }

      console.log(status === 200 && "Post deleted successfully");
    },
    onError: (error) => console.error(error),
    onSettled: (response, error) => console.log(response, error),
  });

  // const preStyle = useMemo(
  //   () => ({
  //     backgroundColor: "#f0f0f0",
  //     padding: "10px",
  //     borderRadius: "5px",
  //     whiteSpace: "pre-wrap",
  //     wordWrap: "break-word",
  //   }),
  //   []
  // );

  if (isPending) return <div className="loader">Loading...</div>;
  if (isError)
    return <div>{console.error(error.message || "Error fetching data!")}</div>;

  return (
    <>
      <h1>ReactQuery Fetch Data</h1>
      <div className="section-accordion">
        <ol>
          {data?.map((post) => {
            let { id, title, body } = post;

            return (
              <li key={id}>
                {id}. <NavLink to={`/fetch/reactquery/${id}`}>{title}</NavLink>
                <br />
                <br />
                {body}
                <br />
                <br />
                <button onClick={() => handlePostUpdate(id, post)}>
                  Update
                </button>
                <button onClick={() => handlePostDelete(id)}>Delete</button>
                <br />
              </li>
            );
          })}
        </ol>
        {/* <pre style={preStyle}>{JSON.stringify(apiData, null, 2)}</pre> */}
        <button onClick={() => handlePostAdd()}>Add New Post</button>
        <br />
      </div>
      <div className="pagination-section container">
        <button
          onClick={() =>
            setPageNo((prev) => {
              return prev - 1;
            })
          }
          disabled={pageno === 1}
        >
          Prev
        </button>
        <h2>{pageno}</h2>
        <button
          onClick={() =>
            setPageNo((prev) => {
              return prev + 1;
            })
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ReactQueryFetch;
