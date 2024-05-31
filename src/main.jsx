import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import Home from './pages/page';
import Users from './pages/users/page';
import {Provider} from './contexts/users';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/users/:userid",
    element: <Users/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
