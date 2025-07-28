import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import SidebarLinks from "./SidebarLinks.json"

function Sidebar() {
  const { user } = useAuth();
  const role = user ? (user.Type === "Admin" ? "admin" : "user") : 'guest';

  return (
    <aside className="sidebar w-64 h-full bg-gray-900 text-white p-4 space-y-4 shadow-lg">
      <ul className="space-y-3">
 
        {SidebarLinks
          .filter(link => link.roles.includes(role))
          .map(({ label, path, icon }) => (
            <li key={path}>
              <Link
                to={path}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                {icon} {label}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
