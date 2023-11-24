import { lazy } from "react";

const RoleList = lazy(() => import("./components/RoleList"));

function Roles() {
  return (
    <div>
      <RoleList />
    </div>
  );
}

export default Roles;
