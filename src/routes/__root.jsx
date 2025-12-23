import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import Footer  from "../components/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
<React.Fragment>
  <div className="min-h-screen bg-notion bg-fixed flex flex-col text-gray-200">
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer className="mt-auto" />
  </div>
</React.Fragment>

  );
}
