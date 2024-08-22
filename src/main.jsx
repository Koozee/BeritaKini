import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import HomePage from './pages/Home/HomePage.jsx'
import HiburanNews from './pages/NewsPage/HiburanNews.jsx'
import GayaHidupNews from './pages/NewsPage/GayaHidupNews.jsx'
import OlahragaNews from './pages/NewsPage/OlahragaNews.jsx'
import EkonomiNews from './pages/NewsPage/EkonomiNews.jsx'
import TeknologiNews from './pages/NewsPage/TeknologiNews.jsx'
import NasionalNews from './pages/NewsPage/NasionalNews.jsx'
import InternasionalNews from './pages/NewsPage/InternasionalNews.jsx'
import NewsPage from './pages/NewsPage/NewsPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/hiburan-categories",
    element: <HiburanNews />
  },
  {
    path: "/gayahidup-categories",
    element: <GayaHidupNews />
  },
  {
    path: "/olahraga-categories",
    element: <OlahragaNews />
  },
  {
    path: "/ekonomi-categories",
    element: <EkonomiNews />
  },
  {
    path: "/teknologi-categories",
    element: <TeknologiNews />
  },
  {
    path: "/nasional-categories",
    element: <NasionalNews />
  },
  {
    path: "/internasional-categories",
    element: <InternasionalNews />
  },
  {
    path: "/detailsnews",
    element: <NewsPage />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
