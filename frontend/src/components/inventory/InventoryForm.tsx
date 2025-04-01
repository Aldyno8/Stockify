
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface InventoryFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  type: "rawMaterial" | "production" | "finishedProduct";
  isEdit?: boolean;
  initialData?: any;
}

export function InventoryForm({
  isOpen,
  onClose,
  onSave,
  type,
  isEdit = false,
  initialData,
}: InventoryFormProps) {
  const [formData, setFormData] = useState(initialData || {
    name: "",
    quantity: "",
    unit: "kg",
    location: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const getTitleByType = () => {
    switch (type) {
      case "rawMaterial":
        return isEdit ? "Modifier une matière première" : "Ajouter une matière première";
      case "production":
        return isEdit ? "Modifier une production" : "Démarrer une production";
      case "finishedProduct":
        return isEdit ? "Modifier un produit fini" : "Ajouter un produit fini";
      default:
        return "Formulaire d'inventaire";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{getTitleByType()}</DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Modifiez les détails ci-dessous et cliquez sur Enregistrer pour confirmer les changements."
              : "Remplissez les informations ci-dessous et cliquez sur Ajouter pour confirmer."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="quantity">Quantité</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="unit">Unité</Label>
                <Select
                  value={formData.unit}
                  onValueChange={(value) => handleChange("unit", value)}
                >
                  <SelectTrigger id="unit">
                    <SelectValue placeholder="Sélectionner une unité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="kg">Kilogramme (kg)</SelectItem>
                      <SelectItem value="g">Gramme (g)</SelectItem>
                      <SelectItem value="l">Litre (l)</SelectItem>
                      <SelectItem value="ml">Millilitre (ml)</SelectItem>
                      <SelectItem value="unité">Unité</SelectItem>
                      <SelectItem value="pièce">Pièce</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="location">Emplacement</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="ex: Allée A, Étagère 3"
              />
            </div>
            
            {type === "production" && (
              <div className="grid gap-2">
                <Label htmlFor="rawMaterials">Matières premières requises</Label>
                <Select>
                  <SelectTrigger id="rawMaterials">
                    <SelectValue placeholder="Ajouter une matière première" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="matiere-a">Matière A</SelectItem>
                    <SelectItem value="matiere-b">Matière B</SelectItem>
                    <SelectItem value="matiere-c">Matière C</SelectItem>
                  </SelectContent>
                </Select>
                <div className="mt-2">
                  <Button type="button" variant="outline" size="sm" className="w-full">
                    + Ajouter une autre matière
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit">
              {isEdit ? "Enregistrer" : "Ajouter"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
