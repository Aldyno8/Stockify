import { StatCard } from "../atoms/card";

export const DashboardState = () => {
  return (
    <div className="flex flex-row gap-4 justify-around py-4 my-4" >
        <StatCard title="Product in stock" quantity="250" unity={"P/ces"}/>
        <StatCard title="Order in progress" quantity="50" unity={"P/ces"} />
        <StatCard title="Finacial Statement" quantity="10" unity={"Ar"}/>
        <StatCard title="Active alert" quantity="250" unity={"P/ces"} />
    </div>
  );
};
