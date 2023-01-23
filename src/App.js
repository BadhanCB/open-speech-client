import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import WritePost from './pages/WritePost/WritePost';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UserSettings from './pages/UserSettings/UserSettings';
import SinglePost from './pages/SinglePost/SinglePost';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/write",
          element: <WritePost />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/settings",
          element: <UserSettings />,
        },
        {
          path: "/post/:postID",
          element: <SinglePost />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
