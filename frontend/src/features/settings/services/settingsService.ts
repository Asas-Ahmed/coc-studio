import { GetSettings, SetTheme, Health } from "../../../../wailsjs/go/app/App";
import { settings } from "../../../../wailsjs/go/models";

export const settingsService = {
  getSettings: async (): Promise<settings.Settings | null> => {
    try {
      return await GetSettings();
    } catch (err) {
      console.error("Failed to load settings:", err);
      return null;
    }
  },

  setTheme: async (theme: string): Promise<void> => {
    try {
      await SetTheme(theme);
    } catch (err) {
      console.error("Failed to persist theme in backend:", err);
    }
  },

  getHealth: async (): Promise<{ ok?: boolean; time?: string } | null> => {
    try {
      return await Health();
    } catch (err) {
      console.error("Failed to get health status:", err);
      return null;
    }
  },
};

