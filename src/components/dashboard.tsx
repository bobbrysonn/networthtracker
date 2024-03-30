import { ArrowUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PT_Mono, Roboto_Mono } from "next/font/google";

const pt_mono = PT_Mono({ weight: ["400"], subsets: ["latin"] });
const roboto = Roboto_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default function Dashboard() {
  return (
    <section className={"p-10"}>
      {/* Dashboard header */}
      <header className={"flex  justify-between"}>
        <h1 className={"text-2xl font-medium tracking-tight"}>Dashboard</h1>
        <Button variant={"outline"} className={"text-dashboard"}>
          <Plus className={"mr-1"} size={28} />{" "}
          <span className={"text-base"}>Add</span>
        </Button>
      </header>

      {/* Net worth and categories */}
      <section className={"bg-networth mt-7 p-6 rounded-2xl"}>
        {/* Net worth */}
        <div>
          <div className={"flex items-start justify-between"}>
            {/* Number of money */}
            <div>
              <p className={"text-greyish"}>Total Net Worth</p>
              <div className={"flex mt-2 gap-1"}>
                <p className={"text-greyish"}>$</p>
                <p className={`text-4xl ${pt_mono.className}`}>728,510</p>
              </div>
            </div>

            {/* Percentage change */}
            <div
              className={
                "bg-greenish flex items-center px-3 py-2 rounded-md text-greentext text-sm"
              }
            >
              <ArrowUp size={20} className={"mr-1"} />
              <p className={`font-medium ${roboto.className}`}>
                +543.42 (0.18%)
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div></div>
      </section>
    </section>
  );
}
