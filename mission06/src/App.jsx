import router from "@/routes";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};

export default App;
