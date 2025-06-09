import {
  TextInput,
  LongTextInput,
  SimpleNumberInput,
  UnitSelect,
  DateInput,
  NumberInput,
} from "../atoms/input";
import { SubmitButton, CancelButton } from "../atoms/button";
import { useEffect, useState } from "react";

export const InventoryForm = ({
  handleSubmit,
  handleFormclose,
  itemToUpdate,
  typeData,
}) => {
  const [Name, setName] = useState("");
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
      setName(itemToUpdate.Name || "");
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
      Name,
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
      setName("");
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
            value={Name}
            setName={(e) => setName(e.target.value)}
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

export const OrderForm = ({
  handleSubmit,
  handleFormclose,
  itemToUpdate,
  typeData,
}) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("En cours");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    const p = parseFloat(price);
    const q = parseFloat(quantity);
    if (!isNaN(p) && !isNaN(q)) {
      setTotal((p * q).toFixed(2));
    }
  }, [price, quantity]);

  useEffect(() => {
    if (itemToUpdate) {
      setProductName(itemToUpdate.product_name || "");
      setPrice(itemToUpdate.price || "");
      setQuantity(itemToUpdate.quantity || "");
      setStatus(itemToUpdate.status || "En cours");
      setDeliveryDate(itemToUpdate.delivery_date?.slice(0, 10) || "");
    }
  }, [itemToUpdate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !productName ||
      isNaN(price) ||
      isNaN(quantity) ||
      !deliveryDate ||
      !status
    ) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    const newItem = {
      product_name: productName,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      total: parseFloat(total),
      status,
      delivery_date: deliveryDate,
    };
    console.log(newItem);
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
        const data = await response.json();
        console.log("Réponse API :", data);
        handleSubmit();
      } else {
        console.error("Erreur lors de la soumission");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    } finally {
      setProductName("");
      setPrice("");
      setQuantity("");
      setStatus("En cours");
      setTotal("");
      setDeliveryDate("");
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full max-w-fit bg-white rounded-3xl shadow-2xl p-10 space-y-8 transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {itemToUpdate ? "Modifier la commande" : "Ajouter une commande"}
        </h2>
        <TextInput
          title={"Name"}
          value={productName}
          setName={(e) => {
            setProductName(e.target.value);
          }}
        />
        <SimpleNumberInput
          title={"quantité"}
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <SimpleNumberInput
          title={"prix"}
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <DateInput
          title={"date"}
          value={deliveryDate}
          onChange={(e) => {
            setDeliveryDate(e.target.value);
          }}
        />
        <div className="flex justify-center items-center gap-3 mt-4 md:mt-0 ">
          <CancelButton handleFormclose={handleFormclose} />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};
