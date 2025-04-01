
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProductTable } from "@/components/inventory/ProductTable";
import { InventoryForm } from "@/components/inventory/InventoryForm";
import { useToast } from "@/hooks/use-toast";

// Données d'exemple
const rawMaterialsData = [
  {
    id: "rm1",
    name: "Matière A",
    quantity: 150,
    unit: "kg",
    location: "Allée A, Étagère 1",
    lastUpdated: "14/05/2024"
  },
  {
    id: "rm2",
    name: "Matière B",
    quantity: 75,
    unit: "kg",
    location: "Allée A, Étagère 2",
    lastUpdated: "13/05/2024"
  },
  {
    id: "rm3",
    name: "Matière C",
    quantity: 200,
    unit: "l",
    location: "Allée B, Étagère 1",
    lastUpdated: "10/05/2024"
  },
];

export default function RawMaterials() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [rawMaterials, setRawMaterials] = useState(rawMaterialsData);
  const { toast } = useToast();

  const handleAddMaterial = (data: any) => {
    const newMaterial = {
      id: `rm${Date.now()}`,
      name: data.name,
      quantity: parseFloat(data.quantity),
      unit: data.unit,
      location: data.location,
      lastUpdated: new Date().toLocaleDateString("fr-FR")
    };
    
    setRawMaterials([...rawMaterials, newMaterial]);
    setIsFormOpen(false);
    
    toast({
      title: "Matière première ajoutée",
      description: `${data.name} a été ajouté avec succès.`,
    });
  };
  
  const handleViewMaterial = (id: string) => {
    console.log("Visualisation de la matière première:", id);
    // Implémentation à venir : ouvrir un modal de détails
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Matières premières</h1>
        <p className="text-muted-foreground">
          Gérez votre inventaire de matières premières
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Inventaire des matières premières</h2>
            <Button onClick={() => setIsFormOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter une matière première
            </Button>
          </div>
          
          <ProductTable
            products={rawMaterials}
            title="Matières premières"
            onAdd={() => setIsFormOpen(true)}
            onView={handleViewMaterial}
          />
        </div>
      </div>
      
      <InventoryForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleAddMaterial}
        type="rawMaterial"
      />
    </div>
  );
}
