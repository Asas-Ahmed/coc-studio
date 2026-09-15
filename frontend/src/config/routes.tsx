import { Home, Settings, type LucideIcon } from "lucide-react";
import { DashboardPage } from "../features/dashboard/pages/DashboardPage";
import { SettingsPage } from "../features/settings/pages/SettingsPage";

export interface AppRouteConfig {
  path: string;
  label: string;
  icon: LucideIcon;
  category: string;
  element: React.ReactNode;
  showInNav?: boolean;
}

export const APP_ROUTES: AppRouteConfig[] = [
  {
    path: "/dashboard",
    label: "Home",
    icon: Home,
    category: "General",
    element: <DashboardPage />,
    showInNav: true,
  },
  {
    path: "/settings",
    label: "Settings",
    icon: Settings,
    category: "Preferences",
    element: <SettingsPage />,
    showInNav: true,
  },
];
