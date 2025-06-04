import { PageTitle } from "../../atoms/PageTitle";
import { MaterialTable } from "../../moleculs/Table";
import { MaterialAction } from "../../moleculs/MaterialsAction";
import { MaterialAddForm } from "../../moleculs/MaterialForm";
import { useEffect, useState } from "react";
import { useMaterials } from "../hooks/useMaterials";

export const RawMaterials = () => {
  const { materials, loading, fetchData } = useMaterials();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [materialToUpdate, setMaterialToUpdate] = useState(null);

  const handleFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = () => {
    fetchData();
    handleFormClose();
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/material/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("suppression reussite");
      }
      else {console.log("erreur lors de la suppression")}
    } catch (error) {
      console.error("Erreur lors de la suppression", error);
    }
  };

  const handleEdit = (id) => {
    console.log("edit", id);
    const items = materials.find(material => material._id === id)
    setMaterialToUpdate(items)
    setIsFormOpen(true);
  };

  return (
    <>
      <PageTitle
        title="Raw materials"
        description="Manage your raw material inventory"
      />
      <MaterialAction handleFormOpen={handleFormOpen} />
      <MaterialTable materials={materials} loading={loading} onDelete={handleDelete} onEdit={handleEdit}/>
      {isFormOpen && (
        <MaterialAddForm
          handleSubmit={handleSubmit}
          handleFormclose={handleFormClose}
          materialToUpdate = {materialToUpdate ? materialToUpdate : null}
        />
      )}
    </>
  );
};
