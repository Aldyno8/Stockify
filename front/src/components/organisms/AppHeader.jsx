
export const AppHeader = ({username})=> {
	const now = new Date()
	const greeting = now.getHours() < 12 ? "Bonjour" : "Bonsoir"
		return (
			<header className="fixed top-0 left-60 right-0 bg-white border-b border-gray-300 p-4 z-0 flex items-center">
				<p>{greeting} {username} </p>
			</header>
		)
}