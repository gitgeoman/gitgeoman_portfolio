import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Err_404 from "./Components/err_404/Err_404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Err_404/>,
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <h1>NOT WORKING</h1>,
  },
  {
    basename: "/gitgeoman.github.io"
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
