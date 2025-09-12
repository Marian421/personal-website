import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path:"/about",
    element: <AboutPage />
  },
  {
    path:"/projects",
    element: <ProjectsPage />
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
};

export default App
