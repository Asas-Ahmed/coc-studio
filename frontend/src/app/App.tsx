import { Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "./shell/AppShell";
import { APP_ROUTES, type AppRouteConfig } from "../config/routes";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background text-foreground">
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          {APP_ROUTES.map(({ path, element }: AppRouteConfig) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AppShell>
    </div>
  );
}

