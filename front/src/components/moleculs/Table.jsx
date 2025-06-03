import { DeleteButton, EditButton } from "../atoms/button";

export const MaterialTable = ({materials, loading}) => {

	const handleDelete = async (id) => {
		try {
		  const response = await fetch(
			`http://localhost:3000/api/material/delete/${id}`,
			{
			  method:"DELETE",
			}
		  );
		  if (response.ok) {
			console.log("suppression reussite")
		  }
		} catch (error) {
		  console.error("Erreur lors de la suppression", error);
		}
	  };
	
	  const handleEdit = (e) => {
		console.log("edit")
	  }

	if (loading) return <p>Chargement...</p>;
	return (
	  <div className="overflow-x-auto rounded-lg shadow-md mt-4">
		<table className="min-w-full text-sm text-left text-gray-700">
		  <thead className="bg-blue-800 text-white uppercase text-xs">
			<tr>
			  <th className="px-6 py-3">Name</th>
			  <th className="px-6 py-3">Quantity</th>
			  <th className="px-6 py-3">Unity</th>
			  <th className="px-6 py-3">Date added</th>
			  <th className="px-6 py-3">Action</th>
			  <th className="px-6 py-3">Action</th>
			</tr>
		  </thead>
		  <tbody>
			{materials.map((item, index) => (
			  <tr
				key={index}
				className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b hover:bg-gray-100`}
			  >
				<td className="px-6 py-4 font-medium">{item.name}</td>
				<td className="px-6 py-4">{item.quantity}</td>
				<td className="px-6 py-4">{item.unity}</td>
				<td className="px-6 py-4">{item.update_date}</td>
				<td className="px-6 py-4"><EditButton onEdit={() =>{handleEdit(item._id)}} /></td>
				<td className="px-6 py-4"><DeleteButton onDelete={()=>{handleDelete(item._id)}} /></td>
			  </tr> 
			))}
		  </tbody>
		</table>
	  </div>
	);
  };
  