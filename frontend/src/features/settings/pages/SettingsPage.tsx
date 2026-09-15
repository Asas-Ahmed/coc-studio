import { useState, useEffect } from "react";
import { settingsService } from "../services/settingsService";
import {
  Sun,
  Moon,
  Monitor,
  CheckCircle2,
  Shield,
  Sliders,
  Sparkles,
  Layers,
  Check
} from "lucide-react";
import "./SettingsPage.css";

export function SettingsPage() {
  const [theme, setTheme] = useState("system");
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [healthStatus, setHealthStatus] = useState<{ ok?: boolean; time?: string } | null>(null);

  const [animations, setAnimations] = useState(() => localStorage.getItem("pref_animations") !== "false");
  const [compactNav, setCompactNav] = useState(() => localStorage.getItem("pref_compact_nav") === "true");
  const [analytics, setAnalytics] = useState(() => localStorage.getItem("pref_analytics") !== "false");

  useEffect(() => {
    Promise.all([
      settingsService.getSettings(),
      settingsService.getHealth()
    ]).then(([s, h]) => {
      if (s && s.theme) {
        setTheme(s.theme);
        applyThemeClass(s.theme);
      }
      if (h) {
        setHealthStatus(h);
      }
      setLoading(false);
    });
  }, []);

  const applyThemeClass = (selectedTheme: string) => {
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark", "theme-system");
    root.classList.add(`theme-${selectedTheme}`);
  };

  const handleThemeChange = async (newTheme: string) => {
    setTheme(newTheme);
    applyThemeClass(newTheme);
    localStorage.setItem("theme", newTheme);
    await settingsService.setTheme(newTheme);
    showSavedToast();
  };

  const toggleAnimation = (val: boolean) => {
    setAnimations(val);
    localStorage.setItem("pref_animations", String(val));
    showSavedToast();
  };

  const toggleCompactNav = (val: boolean) => {
    setCompactNav(val);
    localStorage.setItem("pref_compact_nav", String(val));
    window.dispatchEvent(new Event("storage"));
    showSavedToast();
  };

  const toggleAnalytics = (val: boolean) => {
    setAnalytics(val);
    localStorage.setItem("pref_analytics", String(val));
    showSavedToast();
  };

  const showSavedToast = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  if (loading) {
    return (
      <div className="card fade-in" style={{ padding: "40px", textAlign: "center" }}>
        <p className="muted">Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="fade-in settings-container">
      <div className="page-head">
        <div>
          <div className="eyebrow">
            <Sparkles size={13} /> PREFERENCES
          </div>
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Configure app appearance, interface behaviors, and runtime parameters.</p>
        </div>
        {saved && (
          <div className="save-toast">
            <CheckCircle2 size={16} /> Preferences updated
          </div>
        )}
      </div>

      <div className="card">
        <div className="settings-section-header">
          <div className="section-icon-badge">
            <Sliders size={20} />
          </div>
          <div>
            <h3>Appearance & Interface Theme</h3>
            <p>Select your visual presentation or synchronize with your operating system.</p>
          </div>
        </div>

        <div className="theme-grid">
          <div
            className={`theme-card ${theme === "system" ? "active" : ""}`}
            onClick={() => handleThemeChange("system")}
            role="button"
            tabIndex={0}
          >
            <div className="theme-preview-box preview-system">
              <div className="preview-sidebar">
                <div className="preview-line accent" />
                <div className="preview-line short" />
                <div className="preview-line" />
              </div>
              <div className="preview-content">
                <div className="preview-card" />
              </div>
            </div>
            <div className="theme-info-row">
              <div className="theme-icon-wrap">
                <Monitor size={18} />
              </div>
              <div className="theme-radio-indicator">
                {theme === "system" && <Check size={12} strokeWidth={3} />}
              </div>
            </div>
            <div className="theme-text">
              <strong>System Sync</strong>
              <span>Follows operating system</span>
            </div>
          </div>

          <div
            className={`theme-card ${theme === "dark" ? "active" : ""}`}
            onClick={() => handleThemeChange("dark")}
            role="button"
            tabIndex={0}
          >
            <div className="theme-preview-box preview-dark">
              <div className="preview-sidebar">
                <div className="preview-line accent" />
                <div className="preview-line short" />
                <div className="preview-line" />
              </div>
              <div className="preview-content">
                <div className="preview-card" />
              </div>
            </div>
            <div className="theme-info-row">
              <div className="theme-icon-wrap">
                <Moon size={18} />
              </div>
              <div className="theme-radio-indicator">
                {theme === "dark" && <Check size={12} strokeWidth={3} />}
              </div>
            </div>
            <div className="theme-text">
              <strong>Dark Obsidian</strong>
              <span>Deep contrast for focus</span>
            </div>
          </div>

          <div
            className={`theme-card ${theme === "light" ? "active" : ""}`}
            onClick={() => handleThemeChange("light")}
            role="button"
            tabIndex={0}
          >
            <div className="theme-preview-box preview-light">
              <div className="preview-sidebar">
                <div className="preview-line accent" />
                <div className="preview-line short" />
                <div className="preview-line" />
              </div>
              <div className="preview-content">
                <div className="preview-card" />
              </div>
            </div>
            <div className="theme-info-row">
              <div className="theme-icon-wrap">
                <Sun size={18} />
              </div>
              <div className="theme-radio-indicator">
                {theme === "light" && <Check size={12} strokeWidth={3} />}
              </div>
            </div>
            <div className="theme-text">
              <strong>Clean Light</strong>
              <span>Crisp high-clarity view</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interface & Preferences Section */}
      <div className="card">
        <div className="settings-section-header">
          <div className="section-icon-badge">
            <Layers size={20} />
          </div>
          <div>
            <h3>Interface & Experience</h3>
            <p>Customize interactions, animations, and sidebar density.</p>
          </div>
        </div>

        <div className="settings-list">
          <div className="setting-item">
            <div className="setting-info">
              <strong>Hardware Animations</strong>
              <span>Enable smooth transitions and micro-interactions.</span>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={animations}
                onChange={(e) => toggleAnimation(e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <strong>Compact Navigation Bar</strong>
              <span>Reduce navigation padding for larger workspace view.</span>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={compactNav}
                onChange={(e) => toggleCompactNav(e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <strong>Telemetry & Diagnostics</strong>
              <span>Local diagnostic reporting for runtime stability.</span>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => toggleAnalytics(e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>

      {/* System & Architecture Information */}
      <div className="card">
        <div className="settings-section-header">
          <div className="section-icon-badge">
            <Shield size={20} />
          </div>
          <div>
            <h3>System & Architecture Information</h3>
            <p>CoC Studio desktop runtime specifications and core service status.</p>
          </div>
        </div>

        <div className="meta-grid">
          <div className="meta-item">
            <span className="meta-label">Application</span>
            <span className="meta-value">CoC Studio v1.0.0</span>
          </div>

          <div className="meta-item">
            <span className="meta-label">Backend Core Engine</span>
            <span className="meta-value">
              <span className="dot"></span>
              {healthStatus?.ok ? "Go Runtime (Healthy)" : "Go Runtime Active"}
            </span>
          </div>

          <div className="meta-item">
            <span className="meta-label">UI Architecture</span>
            <span className="meta-value">React 19 + Vite + Wails v2</span>
          </div>

          <div className="meta-item">
            <span className="meta-label">Channel</span>
            <span className="meta-value">ASAS Labs Stable</span>
          </div>
        </div>
      </div>
    </div>
  );
}

