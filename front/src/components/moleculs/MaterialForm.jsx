import { TextInput, NumberInput } from "../atoms/input";
import { SubmitButton, CancelButton } from "../atoms/button";
import { useEffect, useState } from "react";

export const MaterialAddForm = ({
  handleSubmit,
  handleFormclose,
  materialToUpdate,
}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unity, setUnity] = useState("kg");

  if (materialToUpdate) {
    useEffect(() => {
      setName(materialToUpdate.name)
      setQuantity(materialToUpdate.quantity)
      setUnity(materialToUpdate.unity)
    }, [materialToUpdate]);
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const newMaterial = {
      name,
      quantity: parseInt(quantity),
      unity,
    };

    try {
      const url = materialToUpdate
        ? `http://localhost:3000/api/material/update/${materialToUpdate._id}`
        : "http://localhost:3000/api/material/add/";

        const method = materialToUpdate ? "PUT" : "POST" 
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMaterial),
      });

      if (response.ok) {
        const data = await response.json();
        handleSubmit();
      } else {
        console.error("Erreur lors de la soumision ");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <form
        className="w-full max-w-md bg-white border border-gray-300 shadow-xl rounded-xl p-8 space-y-6"
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          {materialToUpdate ? "Update material" : "Add a raw material"}
        </h2>

        <TextInput
          title="name"
          value={name}
          setName={(e) => {
            setName(e.target.value);
          }}
        />
        <NumberInput
          title="quantity"
          quantityValue={quantity}
          unityValue={unity}
          setQuantity={(e) => {
            setQuantity(e.target.value);
          }}
          setUnity={(e) => {
            setUnity(e.target.value);
          }}
        />

        <div className="flex justify-end space-x-4 pt-4">
          <CancelButton handleFormclose={handleFormclose} />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};
