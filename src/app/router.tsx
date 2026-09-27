import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import Layout from '@/layouts/Layout'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import Loading from '@/components/ui/Loading'
import {
  HomePage,
  AboutPage,
  ContactPage,
  DashboardPage,
  LoginPage,
  BlogsPage,
  BlogDetailPage,
  NotFoundPage,
} from '@/app/lazyPages'
import ROUTES from '@/config/constants'

const page = (node: React.ReactNode) => <Suspense fallback={<Loading />}>{node}</Suspense>

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: page(<HomePage />) },
      { path: ROUTES.ABOUT, element: page(<AboutPage />) },
      { path: ROUTES.CONTACT, element: page(<ContactPage />) },
      { path: ROUTES.BLOGS, element: page(<BlogsPage />) },
      { path: ROUTES.BLOG_DETAIL, element: page(<BlogDetailPage />) },
      {
        path: ROUTES.DASHBOARD,
        element: page(
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>,
        ),
      },
      { path: ROUTES.LOGIN, element: page(<LoginPage />) },
      { path: ROUTES.NOT_FOUND, element: page(<NotFoundPage />) },
    ],
  },
])

export default router
