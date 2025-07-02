import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
/*
Notes:-

1. AppLayout is concept of common Header and Footer content common to all pages.
2. <Outlet> special component is in-built React Router component that nest appropriate router children mention in createBrowserRouter
   along with path define.


*/
export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
