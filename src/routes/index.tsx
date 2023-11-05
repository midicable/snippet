import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import ProfilePage from '../pages/ProfilePage'
import NotificationsPage from '../pages/NotificationsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <MainPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/notifications',
    element: <NotificationsPage />,
  },
])

export default router
