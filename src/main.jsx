import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './pages/MainLayout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Rooms from './pages/Rooms';
import MyBookings from './pages/MyBookings';
import AuthProvider from './assets/context/AuthProvider';
import RoomDetails from './pages/RoomDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/rooms",
        element: <Rooms></Rooms>
      },
      {
        path: "/rooms/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ({params}) => fetch(`https://jnoyon-ph-a11-server.vercel.app/rooms/${params.id}`)
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
