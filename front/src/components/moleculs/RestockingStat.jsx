import { StatCard } from "../atoms/card";

export const Restockingstat = () => {
	return (
		<div className="flex flex-row gap-4 justify-around py-4 my-4">
			<StatCard title={"Commandes en cours"} quantity={"18"} unity={"P/ces"}/>
			<StatCard title={"Commandes en cours"}/>
			<StatCard title={"Commandes en cours"}/>
		</div>
	)
}