import React from 'react';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import { privateRoutes } from './private.routes';
import { publicRoutes } from './public.routes';

const getPrivateRoute = (privateRouteList) => {
  if (privateRouteList && privateRouteList.length > 0) {
    return privateRouteList.map((item) => ({
      ...item,
      loader: () => {
        const authToken = localStorage.getItem('token');
        if (!authToken) return redirect('/adminsignin'); // Redirect to adminsignin if no token
        return null;
      }
    }));
  }
  return [];
};

const getPublicRoute = (publicRouteList) => {
  if (publicRouteList && publicRouteList.length > 0) {
    return publicRouteList.map((item) => ({
      ...item,
      loader: () => {
        const authToken = localStorage.getItem('token');
        if (authToken) return redirect('/'); // Redirect to dashboard if token is present
        return null;
      }
    }));
  }
  return [];
};

const getRoutes = () => {
  let routes = [];
  if (privateRoutes || publicRoutes) {
    if (privateRoutes) {
      routes = [...routes, ...getPrivateRoute(privateRoutes)];
    }
    if (publicRoutes) {
      routes = [...routes, ...getPublicRoute(publicRoutes)];
    }
  }
  return routes;
};

export const CustomRoute = () => {
  const router = createBrowserRouter(getRoutes());
  return <RouterProvider router={router} />;
};
