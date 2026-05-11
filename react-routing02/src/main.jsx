import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Github from './components/Github.jsx';
import { Route } from 'react-router-dom';


// old way or one of the way to do routing in react

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     //  -- header and footer will be common for all the pages and outlet will be replaced by the content of the page.
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//       {
//         path: "/github",
//         element: <Github />
//       }
//     ]
//   }
// ]
// )

// 2nd way to do routing in react

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="github" element={<Github />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


// SPA - Single Page Application
// how to make an api call using third party library - axios 
// third party library - react-router-dom -- for routing in react
// createBrowserRouter - it is used to create a router for the application.
// RouterProvider - it is used to provide the router to the application.
// Layout - it is a component which will be common for all the pages and it will contain the header and footer of the application.
// Outlet - it is a component which will be replaced by the content of the page.
// NavLink - it is a component which is used to create a link to the page and it will add active class to the link which is currently active.