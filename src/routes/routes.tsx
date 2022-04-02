import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Hello from "../pages/hello";

const routes = [
  {
    path: "/Hello",
    element: <Hello />,
    name: "Hello",
  },
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
];

const BasicRoute = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((e) => (
        <Route key={e.name} path={e.path} element={e.element}></Route>
      ))}
    </Routes>
  </BrowserRouter>
);
export default BasicRoute;
