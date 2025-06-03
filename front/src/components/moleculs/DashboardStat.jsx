import { StatCard } from "../atoms/card";

export const DashboardState = () => {
  return (
    <div className="flex flex-row gap-4 justify-around py-4 my-4" >
        <StatCard title="Raw materials" quantity="250" unity={"P/ces"}/>
        <StatCard title="Product finished" quantity="50" unity={"P/ces"} />
        <StatCard title="Product in prod" quantity="250" unity={"P/ces"} />
        <StatCard title="Finacial Statement" quantity="10" unity={"Ar"}/>
    </div>
  );
};
