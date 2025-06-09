import {
  ViewButton,
  EditButton,
  DeleteButton,
  RestockingButton,
} from "../atoms/button";

export const RestockingTab = ({ items }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "Date inconnue";
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
                {item.nom_du_produit}
              </span>
              <p className="text-sm text-gray-500">
                Code : {item.code_produit || "N/A"}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-700">
              <div className="flex flex-col">
                <span className="font-medium">Quantité</span>
                <span>{item.quantite || "-"}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Prix unitaire</span>
                <span>
                  {item.prix_unitaire ? `${item.prix_unitaire} Ar` : "-"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Total</span>
                <span className="text-green-600 font-semibold">
                  {item.prix_total ? `${item.prix_total} Ar` : "-"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Statut</span>
                <span className={getStatusBadge(item.statut)}>
                  {item.statut || "Inconnu"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Modifié le</span>
                <span>{formatDate(item.date_de_livraison )}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
