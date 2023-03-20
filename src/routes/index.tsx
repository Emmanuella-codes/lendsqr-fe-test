import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./links";
import { Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

const Login = React.lazy(() => import("../pages/index"));
const UserDashboard = React.lazy(() => import("../pages/Dashboard/index"));

const RouteCmp = () => {
  return (
    <Suspense
      fallback={
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          m="auto"
        />
      }
    >
      <Routes>
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.dashboard} element={<UserDashboard />} />
      </Routes>
    </Suspense>
  );
};

export default RouteCmp
