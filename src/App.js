import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>NOT WORKING</h1>,
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <h1>NOT WORKING</h1>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
