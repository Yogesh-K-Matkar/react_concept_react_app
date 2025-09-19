import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/projects/ReactQuery/components/Layout/MainLayout";

import Home from "./components/projects/ReactQuery/pages/Home";
import TraditionalFetch from "./components/projects/ReactQuery/pages/TraditionalFetch";
import ReactQueryFetch from "./components/projects/ReactQuery/pages/ReactQueryFetch";
import ReactQueryFetchDetails from "./components/projects/ReactQuery/components/UI/ReactQueryFetchDetails";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const routingURLs = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fetch/traditional",
        element: <TraditionalFetch />,
      },
      {
        path: "/fetch/reactquery",
        element: <ReactQueryFetch />,
      },
      {
        path: "/fetch/reactquery/:id",
        element: <ReactQueryFetchDetails />,
      },
    ],
  },
]);

const ReactQueryApp = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routingURLs} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default ReactQueryApp;
