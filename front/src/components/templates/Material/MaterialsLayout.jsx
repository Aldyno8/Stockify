import { PageTitle } from "../../atoms/PageTitle";
import { MaterialTable } from "../../moleculs/Table";
import { MaterialAction } from "../../moleculs/MaterialsAction";
import { MaterialForm } from "../../moleculs/MaterialForm";
import { useState } from "react";
import { useMaterials } from "../hooks/useMaterials";

export const RawMaterials = () => {
  const { materials, loading, fetchData } = useMaterials();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    console.log("j'ouvre le formulaire");
    setIsFormOpen(!isFormOpen);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = () => {
    fetchData();
    handleFormClose();
  };

  return (
    <>
      <PageTitle
        title="Raw materials"
        description="Manage your raw material inventory"
      />
      <MaterialAction handleFormOpen={handleFormOpen} />
      <MaterialTable materials={materials} loading={loading} />
      {isFormOpen && (
        <MaterialForm
          handleSubmit={handleSubmit}
          handleFormclose={handleFormClose}
        />
      )}
    </>
  );
};
