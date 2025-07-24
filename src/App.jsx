import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Explore from "./Components/Explore";
import Notification from "./Components/Notification";
import Profile from "./Components/Profile";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Body />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/notification",
      element: <Notification />,
    },
    { path: "/profile", element: <Profile /> },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
