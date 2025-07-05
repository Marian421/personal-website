import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import HomePage from './Pages/HomePage/HomePage';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
};

export default App
