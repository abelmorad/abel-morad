import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
