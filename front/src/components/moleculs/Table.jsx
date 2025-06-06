import {
  DeleteButton,
  EditButton,
  ViewButton,
  RestockingButton,
} from "../atoms/button";

export const DataTable = ({
  items,
  loading,
  onDelete,
  onEdit,
  onView,
  onRestock,
}) => {
  if (loading) return <p>Chargement...</p>;
  return (
    <div className="overflow-x-auto rounded-lg shadow-md mt-4">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-blue-800 text-white uppercase text-xs">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Catégorie</th>
            <th className="px-6 py-3">Quantity</th>
            <th className="px-6 py-3">Unity</th>
            <th className="px-6 py-3">Expiration date</th>
            <th className="px-6 py-3">Status </th>
            <th className="px-6 py-3"></th>
            <th className="px-6 py-3">Action</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b hover:bg-gray-100`}
            >
              <td
                className="px-6 text-center py-4 font-medium"
                onClick={() => {
                  onView(item._id);
                }}
              >
                {item.productName}
              </td>
              <td
                className="px-6 py-4 text-center"
                onClick={() => {
                  onView(item._id);
                }}
              >
                {item.category}
              </td>
              <td
                className="px-6 py-4 text-center"
                onClick={() => {
                  onView(item._id);
                }}
              >
                {item.stockQuantity}
              </td>
              <td
                className="px-6 py-4 text-center"
                onClick={() => {
                  onView(item._id);
                }}
              >
                {item.unit}
              </td>
              <td
                className="px-6 py-4 text-center"
                onClick={() => {
                  onView(item._id);
                }}
              >
                {new Date(item.expirationDate).toLocaleDateString("fr-FR")}
              </td>
              <td className="px-6 py-4 text-center">{item.status}</td>
              <td className="px-6 py-4 ">
                <EditButton
                  onEdit={() => {
                    onEdit(item._id);
                  }}
                />
              </td>
              <td className="px-6 py-4">
                <RestockingButton
                  onRestock={() => {
                    onRestock(item._id);
                  }}
                />
              </td>
              <td className="px-6 py-4">
                <DeleteButton
                  onDelete={() => {
                    onDelete(item._id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
