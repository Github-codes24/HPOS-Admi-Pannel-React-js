// import React from "react";
import "./App.css";
// import AdminSignIn from "./admin-components/AdminSignIn";
// import AdminSignUp from "./admin-components/AdminSignUp";
// import Home from "./admin-components/admin-dashboard/Home";
// import UpdateScreeningData from "./admin-components/admin-dashboard/UpdateScreeningData";
import { CustomRoute } from "./routes/custom.routes";

const App = () => {
  return (
    <>
      <CustomRoute />
      {/* <AdminSignIn /> */}
      {/* <AdminSignUp /> */}
      {/* <Home /> */}
      {/* <UpdateScreeningData /> */}
    </>
  );
};

export default App;
