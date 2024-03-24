import Layout from "@components/layout";
import BoardDetail from "@pages/board/BoardDetail";
import BoardList from "@pages/board/BoardList";
import BoardNew from "@pages/board/BoardNew";
import BoardResult from "@pages/board/BoardResult";
import ReplyList from "@pages/board/ReplyList";
import Login from "@pages/user/Login";
import Signup from "@pages/user/Signup";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <BoardList /> },
      { path: "/boards", element: <BoardList /> },
      {
        path: "/boards/:_id",
        element: <BoardDetail />,
        children: [{ index: true, element: <ReplyList /> }],
      },
      { path: "/boards/new", element: <BoardNew /> },
      { path: "/boards/:_id/result", element: <BoardResult /> },
      { path: "/user/login", element: <Login /> },
      { path: "/user/signup", element: <Signup /> },
    ],
  },
]);

export default router;
