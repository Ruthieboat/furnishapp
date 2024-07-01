import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Landing from './pages/landing';
import About from './pages/about';
import Collection from './pages/collection';
import ContactUs from './pages/contact-us';
import RootLayout from './layouts/rootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "about-us",
          element: <About />,
        },
        {
          path: "collection",
          element: <Collection />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
