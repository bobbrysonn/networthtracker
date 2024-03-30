"use client";

import {
  LayoutDashboard,
  HandCoins,
  Lightbulb,
  ScrollText,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { id: 1, name: "Dashboard", path: "/", icon: <LayoutDashboard /> },
  { id: 2, name: "Insights", path: "/insights", icon: <Lightbulb /> },
  { id: 3, name: "Reports", path: "/reports", icon: <ScrollText /> },
  { id: 4, name: "Settings", path: "/settings", icon: <SettingsIcon /> },
];

export default function SideBar() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <aside className={"bg-sidebar min-h-screen px-6 py-5 text-greyish"}>
      {/* Brand name or link */}
      <Link
        className={"flex items-center mb-3 gap-4 px-4 py-4 text-white"}
        href="/"
      >
        <HandCoins />
        <p className={"font-medium text-3xl tracking-tighter"}>Satoshi</p>
      </Link>

      {/* Navigation links */}
      <nav className={"flex flex-col gap-2"}>
        {navlinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.path}
              className={`${isActive(link.path) && "bg-[#0f1010] text-white"} hover:bg-[#111212] hover:text-white flex gap-4 items-center p-4 rounded-md transtion-colors duration-500`}
            >
              {link.icon}
              <p className={"font-medium"}>{link.name}</p>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
