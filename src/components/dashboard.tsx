import { ArrowUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { PT_Mono, Roboto_Mono } from "next/font/google";
import { AreaChart, CategoryBar, Tracker } from "@tremor/react";
import { Separator } from "@/components/ui/separator";

const pt_mono = PT_Mono({ weight: ["400"], subsets: ["latin"] });
const roboto = Roboto_Mono({ weight: ["400", "700"], subsets: ["latin"] });
const chartdata = [
  {
    date: "Jan",
    amount: 50,
  },
  {
    date: "Feb",
    amount: 120,
  },
  {
    date: "Mar",
    amount: 240,
  },
  { date: "Apr", amount: 200 },
  { date: "May", amount: 432 },
  { date: "Jun", amount: 636 },
  { date: "Jul", amount: 1122 },
  { date: "Aug", amount: 1839 },
  { date: "Sep", amount: 2777 },
  { date: "Oct", amount: 16884 },
  { date: "Nov", amount: 12200 },
  { date: "Dec", amount: 4309 },
];
const weeklydata = [
  { date: "Sun", amount: 1345 },
  { date: "Mon", amount: 2400 },
  { date: "Tue", amount: 1850 },
  { date: "Wed", amount: 2100 },
  { date: "Thu", amount: 1520 },
  { date: "Fri", amount: 3050 },
  { date: "Sat", amount: 2800 },
];
const monthlydata = [
  { date: 1, amount: 2330 },
  { date: 2, amount: 3287 },
  { date: 3, amount: 2367 },
  { date: 4, amount: 2541 },
  { date: 5, amount: 2202 },
  { date: 6, amount: 1383 },
  { date: 7, amount: 3395 },
  { date: 8, amount: 514 },
  { date: 9, amount: 2192 },
  { date: 10, amount: 3157 },
  { date: 11, amount: 1669 },
  { date: 12, amount: 787 },
  { date: 13, amount: 1952 },
  { date: 14, amount: 1914 },
  { date: 15, amount: 1932 },
  { date: 16, amount: 2260 },
  { date: 17, amount: 3188 },
  { date: 18, amount: 3890 },
  { date: 19, amount: 2948 },
  { date: 20, amount: 1485 },
  { date: 21, amount: 2262 },
  { date: 22, amount: 3336 },
  { date: 23, amount: 3000 },
  { date: 24, amount: 2398 },
  { date: 25, amount: 2068 },
  { date: 26, amount: 2310 },
  { date: 27, amount: 2596 },
  { date: 28, amount: 3449 },
  { date: 29, amount: 3704 },
  { date: 30, amount: 2269 },
  { date: 31, amount: 1484 },
];

export default function Dashboard() {
  const tabs = [
    {
      title: "Live",
      value: "live",
      content: (
        <div>
          <AreaChart
            colors={["green"]}
            data={chartdata}
            index="date"
            categories={["amount"]}
            curveType={"natural"}
            showAnimation={true}
            showGridLines={false}
            showLegend={false}
            showXAxis={true}
            startEndOnly={true}
          />
        </div>
      ),
    },
    {
      title: "1 week",
      value: "oneweek",
      content: (
        <div>
          <AreaChart
            colors={["green"]}
            data={weeklydata}
            index="date"
            categories={["amount"]}
            curveType={"natural"}
            showAnimation={true}
            showGridLines={false}
            showLegend={false}
            startEndOnly={false}
          />
        </div>
      ),
    },
    {
      title: "1 month",
      value: "onemonth",
      content: (
        <div>
          <AreaChart
            colors={["green"]}
            data={monthlydata}
            index="date"
            categories={["amount"]}
            curveType={"natural"}
            showAnimation={true}
            showGridLines={false}
            showLegend={false}
            startEndOnly={true}
          />
        </div>
      ),
    },
    {
      title: "1 year",
      value: "oneyear",
      content: (
        <div>
          <AreaChart
            colors={["green"]}
            data={chartdata}
            index="date"
            categories={["amount"]}
            curveType={"natural"}
            showAnimation={true}
            showGridLines={false}
            showLegend={false}
            startEndOnly={false}
          />
        </div>
      ),
    },
    {
      title: "All",
      value: "all",
      content: (
        <div>
          <AreaChart
            colors={["green"]}
            data={chartdata}
            index="date"
            categories={["amount"]}
            curveType={"natural"}
            showAnimation={true}
            showGridLines={false}
            showLegend={false}
            startEndOnly={false}
          />
        </div>
      ),
    },
  ];
  const data = [
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
  ];
  const diversificationdata = [
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald-800", tooltip: "Operational" },
    { color: "emerald-800", tooltip: "Operational" },
    { color: "emerald-800", tooltip: "Operational" },
  ];
  const percentiledata = [
    { color: "yellow-800", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
    { color: "yellow", tooltip: "Operational" },
  ];

  return (
    <section className={"p-16"}>
      {/* Dashboard header */}
      <header className={"flex justify-between"}>
        <h1 className={"text-2xl font-medium tracking-tight"}>Dashboard</h1>
        <Button variant={"outline"} className={"text-dashboard"}>
          <Plus className={"mr-1"} size={28} />{" "}
          <span className={"text-base"}>Add</span>
        </Button>
      </header>

      {/* Net worth and categories */}
      <section className={"bg-networth grid grid-cols-10 mt-7 rounded-xl"}>
        {/* Column 1 Net worth */}
        <div
          className={
            "border border-[rgb(45,45,45)] col-span-6 rounded-l-xl p-6"
          }
        >
          {/* Networth and percentage chage */}
          <div className={"flex items-start justify-between"}>
            {/* Number of money */}
            <div>
              <p className={"text-xl"}>Total Net Worth</p>
              <div className={"flex mt-2 gap-1"}>
                <p className={"text-greyish"}>$</p>
                <p className={`text-3xl ${pt_mono.className}`}>728,510</p>
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

          {/* Tabs and graph */}
          <div className={"mt-5"}>
            <Tabs tabs={tabs} />
          </div>
        </div>

        {/* Column 2 Categories */}
        <div
          className={
            "bg-[rgb(35,37,38)] border border-[rgb(45,45,45)] col-span-4 p-6 rounded-r-xl"
          }
        >
          <div className={"mb-4"}>
            <h3 className={"font-medium text-lg"}>Categories</h3>
            <Tracker data={data} className="mt-2 h-6" />
          </div>

          <Separator className="bg-zinc-700" />

          <div className={"mt-8"}>
            {/* Diversification score */}
            <div>
              <div className="flex justify-between">
                <h3 className={"font-medium text-lg"}>Diversification Score</h3>
                <h3 className={"font-medium text-lg text-emerald-500"}>78</h3>
              </div>
              <Tracker data={diversificationdata} className="mt-2 h-4" />
            </div>
            {/* Top networth in the US */}
            <div className="mt-6">
              <div className="flex justify-between">
                <h3 className={"font-medium text-lg"}>
                  Percentile net worth in the US
                </h3>
                <h3 className={"font-medium text-lg text-yellow-500"}>1</h3>
              </div>
              <Tracker data={percentiledata} className="mt-2 h-4" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
