import { DashboardState } from "../../moleculs/DashboardStat"
import { PageTitle } from "../../atoms/PageTitle"
import { DasboardGraph } from "../../moleculs/DashboardGraph"

export const Dashboard = () => {
	return (
		<>
			<PageTitle title={"Dashboard"} description={"Overall overview of your inventory and production"}/>
			<DashboardState />
			<DasboardGraph />
		</>
	)
}