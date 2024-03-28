import Dashboard from "@/components/dashboard";
import SideBar from "@/components/sidebar";

export default function Home() {
  const classnames = `grid grid-cols-[20rem_auto]`;
  return (
    <section className={classnames}>
      <SideBar />
      <Dashboard />
    </section>
  );
}
