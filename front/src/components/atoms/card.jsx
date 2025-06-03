import {ChartColumnBig, PackagePlus } from 'lucide-react';

export const StatCard = ({ title, quantity, unity }) => {
	return (
	  <div className="flex flex-col justify-center gap-2 px-6 py-4 bg-white shadow-md rounded-xl w-60 h-36 border-b-1 border-l-1 border-black hover:shadow-lg transition-all duration-300">
		<p className="flex flex-row items-center text-lg text-gray-600 font-medium">{title}</p>
		<p className="  text-3xl font-bold text-blue-900">{quantity} {unity}</p>
	  </div>
	);
  };
  
  export const GraphCard = ({title, description})=> {
	return (
		<div className="flex flex-col bg-white shadow-md h-110 w-110 gap-1 rounded-xl">
			<p className="flex flex-row items-center text-2xl text-[#0F1E44] mx-4 mt-4"><ChartColumnBig /> {title}</p>
			<p className=" text-gray-600 text-[12px] mx-4 my-1"> {description}</p>
		</div>
	)
  }