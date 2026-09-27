import { lazy } from 'react'

// Pages are lazy-loaded so the bundler emits one chunk per route (code splitting).
// Only the chunk for the route being visited is fetched; the Suspense boundary
// that renders these lives in the router's page() helper.
export const HomePage = lazy(() => import('@/pages/HomePage'))
export const AboutPage = lazy(() => import('@/pages/AboutPage'))
export const ContactPage = lazy(() => import('@/pages/ContactPage'))
export const DashboardPage = lazy(() => import('@/pages/DashboardPage'))
export const LoginPage = lazy(() => import('@/pages/auth/LoginPage'))
export const BlogsPage = lazy(() => import('@/pages/blog/BlogsPage'))
export const BlogDetailPage = lazy(() => import('@/pages/blog/BlogDetailPage'))
export const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
