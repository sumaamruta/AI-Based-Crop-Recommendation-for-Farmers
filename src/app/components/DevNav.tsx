import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export function DevNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    { path: "/", label: "Login" },
    { path: "/welcome", label: "Welcome" },
    { path: "/language", label: "Language" },
    { path: "/input", label: "Input" },
    { path: "/recommendation", label: "Results" },
    { path: "/market", label: "Market" },
    { path: "/support", label: "Support" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-card/95 backdrop-blur-lg border border-border rounded-full shadow-lg p-2 flex gap-1">
      {routes.map((route) => (
        <Button
          key={route.path}
          onClick={() => navigate(route.path)}
          variant={location.pathname === route.path ? "default" : "ghost"}
          size="sm"
          className="rounded-full h-8 px-3 text-xs"
        >
          {route.label}
        </Button>
      ))}
    </div>
  );
}
