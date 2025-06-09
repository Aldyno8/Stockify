import {
  DeleteButton,
  EditButton,
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


export const RestockingTab = ({ items }) => {
  console.log(items)
  const formatDate = (dateStr) => {
    console.log(dateStr)
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status) => {
    const base = "text-xs font-semibold px-2 py-1 rounded-full";
    switch (status?.toLowerCase()) {
      case "reçu":
        return `${base} bg-green-100 text-green-700`;
      case "en cours":
        return `${base} bg-yellow-100 text-yellow-700`;
      case "annulé":
        return `${base} bg-red-100 text-red-700`;
      default:
        return `${base} bg-gray-100 text-gray-600`;
    }
  };

  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg mt-6 p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Liste des commandes
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
          >
            <div className="mb-2 md:mb-0">
              <span className="text-lg font-medium text-gray-900">
                {item.product_name}
              </span>
              <p className="text-sm text-gray-500">
                Code : {item.code_produit || "N/A"}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Quantité</span>
                <span>{item.quantity || "-"}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Prix unitaire</span>
                <span>
                  {item.price ? `${item.price} Ar` : "-"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Total</span>
                <span className="text-green-600 font-semibold">
                  {item.total ? `${item.total} Ar` : "-"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Statut</span>
                <span className={getStatusBadge(item.status)}>
                  {item.status || "Inconnu"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Date de livraison</span>
                <span>{formatDate(item.delivery_date )}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
