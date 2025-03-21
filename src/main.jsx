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
import PrivateRoute from '../PrivateRoute';
import BookingItemSingle from './components/items/BookingItemSingle';

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
        loader: ({params}) => fetch(`https://stock-room.vercel.app/rooms/${params.id}`)
      },
      {
        path: "/room-bookings/:id",
        element: <BookingItemSingle></BookingItemSingle>,
        loader: ({params}) => fetch(`https://stock-room.vercel.app/room-bookings/${params.id}`)
      },
      {
        path: "/my-bookings",
        element: <PrivateRoute> <MyBookings></MyBookings> </PrivateRoute>
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
