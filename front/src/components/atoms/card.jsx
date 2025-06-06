import {
  ChartColumnBig,
  CalendarDays,
  Package,
  AlertCircle,
} from "lucide-react";
import { CloseButton } from "./button";

export const StatCard = ({ title, quantity, unity }) => {
  return (
    <div className="flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md w-64 h-40 border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
        {title}
      </p>
      <p className="text-4xl font-extrabold text-blue-800">
        {quantity}
        <span className="ml-1 text-xl font-medium text-gray-600">{unity}</span>
      </p>
    </div>
  );
};

export const GraphCard = ({ title, description }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-96 h-64 p-6">
      <div className="flex items-center gap-2 text-2xl font-semibold text-[#0F1E44]">
        <ChartColumnBig className="w-6 h-6" />
        <span>{title}</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      {/* Tu peux ajouter un graphique ici plus tard */}
    </div>
  );
};

export const ProductCard = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto border border-gray-200">
        <CloseButton onClose={onClose} />
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          {product.productName}
        </h2>

        <p className="text-gray-700 text-sm mb-4 italic">
          {product.description || "Aucune description disponible."}
        </p>

        <div className="grid grid-cols-2 gap-4 text-gray-800 text-base">
          <div>
            <span className="font-semibold">Catégorie :</span>{" "}
            {product.category || "Non défini"}
          </div>
          <div>
            <span className="font-semibold">Sous-catégorie :</span>{" "}
            {product.subCategory || "Non défini"}
          </div>
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-blue-700" />
            <span>
              <strong>Stock :</strong> {product.stockQuantity} {product.unit}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <span>
              <strong>Seuil d'alerte :</strong> {product.alertThreshold}{" "}
              {product.unit}
            </span>
          </div>
          <div>
            <span className="font-semibold">Prix unitaire :</span>{" "}
            {product.price} Ar
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-red-500" />
            <span>
              <strong>Expiration :</strong>{" "}
              {product.expirationDate
                ? new Date(product.expirationDate).toLocaleDateString("fr-FR")
                : "Non définie"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
