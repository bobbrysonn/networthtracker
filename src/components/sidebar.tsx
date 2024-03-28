import {
  LayoutDashboard,
  HandCoins,
  Lightbulb,
  ScrollText,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";

export default function SideBar() {
  return (
    <aside className={"bg-sidebar min-h-screen px-6 py-5 text-white"}>
      <Link className={"flex items-center mb-2 gap-4 px-4 py-4"} href="/">
        <HandCoins />
        <p className={"font-medium text-2xl tracking-tighter"}>Satoshi</p>
      </Link>
      <nav className={"flex flex-col gap-2"}>
        <Link
          className={"bg-[#0f1010] flex gap-4 items-center px-4 py-4 rounded"}
          href="/"
        >
          <LayoutDashboard size={25} />
          <p className={"font-medium"}>Dashboard</p>
        </Link>
        <Link className={"flex gap-4 items-center px-4 py-4"} href="/">
          <Lightbulb size={25} />
          <p className={"font-medium"}>Insights</p>
        </Link>
        <Link className={"flex gap-4 items-center px-4 py-4"} href="/">
          <ScrollText size={25} />
          <p className={"font-medium"}>Reports</p>
        </Link>
        <Link className={"flex gap-4 items-center px-4 py-4"} href="/">
          <SettingsIcon size={25} />
          <p className={"font-medium"}>Settings</p>
        </Link>
      </nav>
    </aside>
  );
}
