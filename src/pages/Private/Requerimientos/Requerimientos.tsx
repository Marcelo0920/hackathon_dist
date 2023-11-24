import { lazy } from "react";

const RequerimientosPage = lazy(
  () => import("./components/RequerimientosPage.tsx")
);

function Requerimientos() {
  return (
    <div>
      <RequerimientosPage />
    </div>
  );
}

export default Requerimientos;
