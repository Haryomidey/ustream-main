import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from '../pages/Home';
import Register from '../pages/Register';
import ScrollToTop from '../components/ScrollToTop';
import Login from '../pages/Login';
import VerifyOtp from '../pages/verify-otp';
import Category from '../pages/category';
import Dashboard from '../pages/dashboard';
import Convert from '../pages/convert';
import CinemaNight from '../pages/cinema_night';
import VotingPoll from '../pages/voting_poll';
import DAOCommunity from '../pages/dao_community';
import Pricing from '../pages/pricing';
import Profile from '../pages/profile';
import Movie from '../pages/movie';
import PrivateRoute from '../components/PrivateRoute';

function MainLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: '/register',
    element: (
      <MainLayout>
        <Register />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        <Login />
      </MainLayout>
    ),
  },
  {
    path: "/verify-otp",
    element: (
      <MainLayout>
        <VerifyOtp />
      </MainLayout>
    ),
  },
  {
    path: "/category",
    element: (
      <MainLayout>
        <PrivateRoute element={<Category />} />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <MainLayout>
        <PrivateRoute element={<Dashboard />} />
      </MainLayout>
    ),
  },
  {
    path: "/convert",
    element: (
      <MainLayout>
        <PrivateRoute element={<Convert />} />
      </MainLayout>
    ),
  },
  {
    path: "/cinema_night",
    element: (
      <MainLayout>
        <PrivateRoute element={<CinemaNight />} />
      </MainLayout>
    ),
  },
  {
    path: '/voting_poll',
    element: (
      <MainLayout>
        <PrivateRoute element={<VotingPoll />} />
      </MainLayout>
    ),
  },
  {
    path: '/community',
    element: (
      <MainLayout>
        <PrivateRoute element={<DAOCommunity />} />
      </MainLayout>
    ),
  },
  {
    path: '/pricing',
    element: (
      <MainLayout>
        <PrivateRoute element={<Pricing />} />
      </MainLayout>
    ),
  },
  {
    path: '/profile',
    element: (
      <MainLayout>
        <PrivateRoute element={<Profile />} />
      </MainLayout>
    ),
  },
  {
    path: '/movie',
    element: (
      <MainLayout>
        <PrivateRoute element={<Movie />} />
      </MainLayout>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
