import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import ProfilePage from '../pages/ProfilePage'
import BookmarksPage from '../pages/BookmarksPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/bookmarks',
    element: <BookmarksPage />,
  },
])

export default router
