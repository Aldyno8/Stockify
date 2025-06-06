import {
  TextInput,
  LongTextInput,
  SimpleNumberInput,
  UnitSelect,
  DateInput,
} from "../atoms/input";
import { SubmitButton, CancelButton } from "../atoms/button";
import { useEffect, useState } from "react";

export const Form = ({
  handleSubmit,
  handleFormclose,
  itemToUpdate,
  typeData,
}) => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [alertThreshold, setAlertThreshold] = useState("");
  const [unit, setUnit] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  useEffect(() => {
    if (itemToUpdate) {
      setProductName(itemToUpdate.productName || "");
      setDescription(itemToUpdate.description || "");
      setCategory(itemToUpdate.category || "");
      setSubCategory(itemToUpdate.subCategory || "");
      setPrice(itemToUpdate.price || "");
      setStockQuantity(itemToUpdate.stockQuantity || "");
      setAlertThreshold(itemToUpdate.alertThreshold || "");
      setUnit(itemToUpdate.unit || "");
      setExpirationDate(
        itemToUpdate.expirationDate
          ? itemToUpdate.expirationDate.slice(0, 10)
          : ""
      );
    }
  }, [itemToUpdate]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      productName,
      description,
      category,
      subCategory,
      price: parseFloat(price),
      stockQuantity: parseInt(stockQuantity),
      alertThreshold: parseInt(alertThreshold),
      unit,
      expirationDate,
    };

    try {
      const url = itemToUpdate
        ? `http://localhost:3000/api/${typeData}/update/${itemToUpdate._id}`
        : `http://localhost:3000/api/${typeData}/add/`;

      const method = itemToUpdate ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        await response.json();
        handleSubmit();
      } else {
        console.error("Erreur lors de la soumission");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    } finally {
      setProductName("");
      setDescription("");
      setCategory("");
      setSubCategory("");
      setPrice("");
      setStockQuantity("");
      setAlertThreshold("");
      setUnit("");
      setExpirationDate("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 space-y-8 transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {itemToUpdate ? "Modifier un produit" : "Ajouter un produit"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput
            title="Nom du produit"
            value={productName}
            setName={(e) => setProductName(e.target.value)}
          />

          <TextInput
            title="Catégorie"
            value={category}
            setName={(e) => setCategory(e.target.value)}
          />

          <TextInput
            title="Sous-catégorie"
            value={subCategory}
            setName={(e) => setSubCategory(e.target.value)}
          />

          <UnitSelect value={unit} onChange={(e) => setUnit(e.target.value)} />

          <SimpleNumberInput
            title="Prix (Ar)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <SimpleNumberInput
            title="Stock disponible"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
          />

          <SimpleNumberInput
            title="Seuil d'alerte"
            value={alertThreshold}
            onChange={(e) => setAlertThreshold(e.target.value)}
          />

          <DateInput
            title="Date d’expiration"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 pt-4">
          <div className="flex-1 w-full">
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Description
            </label>
            <LongTextInput
              title="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <CancelButton handleFormclose={handleFormclose} />
            <SubmitButton />
          </div>
        </div>
      </form>
    </div>
  );
};
