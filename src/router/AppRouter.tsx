import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pagesConfig, withProtection } from "./pages.config.tsx";
import type { LayoutGroup, RouteItem } from "./pages.config.tsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {pagesConfig.groups.map((group: LayoutGroup, idx: number) => (
          <Route key={idx} element={group.layout}>
            {group.routes.map((r: RouteItem) => (
              <Route
                key={r.path}
                path={r.path}
                element={withProtection(r.element, r.protected)}
              />
            ))}
          </Route>
        ))}
        <Route
          path={pagesConfig.fallback.path}
          element={pagesConfig.fallback.element}
        />
      </Routes>
    </BrowserRouter>
  );
}
