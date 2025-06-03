

export const PageTitle = ({title, description})=> {
	return (
		<div className="flex flex-col justify-center w-full my-4">
			<p className="text-4xl  text-[#0F1E44]">{title}</p>
			<p className="text-1xl text-[#949D96]">{description}</p>
		</div>
	)
}