import { GraphCard } from "../atoms/card";

export const DasboardGraph = () => {
  return (
    <div className="flex flex-row justify-around w-full">
      <GraphCard
        title={"Production"}
        description={
          "View of the variation in production over the last 12 months"
        }
      />
      <GraphCard
        title={"Sale"}
        description={"View of sales variation over the last 12 months"}
      />
    </div>
  );
};
