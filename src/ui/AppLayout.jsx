import { Outlet } from "react-router-dom";
import Header from "./header/Header";

function AppLayout() {
  return (
    <div className="box-border ">
      <Header />
      <div className=" ">
        <main className=" h-screen bg-red-200 m-3 p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
