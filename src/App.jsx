import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import MainDisplay from "./featueres/mainDisplay";
import CreateFolder from "./featueres/forms/CreateFolder";
import CreateSet from "./featueres/forms/CreateSet";
import BackOfCard from "./featueres/back&front Card/BackOfCard";
import FrontOfCard from "./featueres/back&front Card/FrontOfCard";
import ListOfSong from "./featueres/display list/ListOfSong";
import ListOfWord from "./featueres/display list/ListOfWord";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <MainDisplay /> },
      { path: "/createFolder", element: <CreateFolder /> },
      { path: "/createSet", element: <CreateSet /> },
      { path: "/frontCard", element: <FrontOfCard /> },
      { path: "/backCard", element: <BackOfCard /> },
      { path: "/set/:setId", element: <ListOfSong /> },
      { path: "/set/:setId/:songName", element: <ListOfWord /> },

      // { path: "/question", element: <Question />, action: createQuestionForm },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
