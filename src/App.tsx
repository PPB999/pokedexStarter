import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/home";
import DetailPage from "./pages/details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/details/:name",
      element: <DetailPage />,
    },
  ]);

  return (
    <div className="bg-[url(/images/list_bg.jpg)] min-h-lvh">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
