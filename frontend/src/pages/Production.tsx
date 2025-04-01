
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProductTable } from "@/components/inventory/ProductTable";
import { InventoryForm } from "@/components/inventory/InventoryForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Données d'exemple
const productionData = [
  {
    id: "prod1",
    name: "Production Lot #1234",
    quantity: 50,
    unit: "kg",
    location: "Ligne de production A",
    lastUpdated: "15/05/2024"
  },
  {
    id: "prod2",
    name: "Production Lot #1235",
    quantity: 75,
    unit: "kg",
    location: "Ligne de production B",
    lastUpdated: "14/05/2024"
  },
];

const activeProductionSteps = [
  { id: 1, name: "Lot #1234", step: "Mélange", progress: 75, startTime: "09:30", endTime: "12:30" },
  { id: 2, name: "Lot #1235", step: "Cuisson", progress: 30, startTime: "10:45", endTime: "14:45" },
];

export default function Production() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [productions, setProductions] = useState(productionData);
  const { toast } = useToast();

  const handleAddProduction = (data: any) => {
    const newProduction = {
      id: `prod${Date.now()}`,
      name: `Production Lot #${Math.floor(1000 + Math.random() * 9000)}`,
      quantity: parseFloat(data.quantity),
      unit: data.unit,
      location: data.location || "Ligne de production",
      lastUpdated: new Date().toLocaleDateString("fr-FR")
    };
    
    setProductions([...productions, newProduction]);
    setIsFormOpen(false);
    
    toast({
      title: "Production démarrée",
      description: `${newProduction.name} a été ajouté avec succès.`,
    });
  };
  
  const handleViewProduction = (id: string) => {
    console.log("Visualisation de la production:", id);
    // Implémentation à venir : ouvrir un modal de détails
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Production</h1>
        <p className="text-muted-foreground">
          Gérez les processus de production en cours
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Productions actives</CardTitle>
              <CardDescription>
                Suivi des étapes de production en temps réel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeProductionSteps.map((prod) => (
                  <div key={prod.id} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{prod.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {prod.startTime} - {prod.endTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Étape: {prod.step}</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-warehouse-600 rounded-full" 
                          style={{ width: `${prod.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{prod.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button variant="outline">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Marquer comme terminé
                </Button>
                <Button variant="outline">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Transférer en produits finis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Liste des productions</h2>
            <Button onClick={() => setIsFormOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Démarrer une production
            </Button>
          </div>
          
          <ProductTable
            products={productions}
            title="Productions"
            onAdd={() => setIsFormOpen(true)}
            onView={handleViewProduction}
          />
        </div>
      </div>
      
      <InventoryForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleAddProduction}
        type="production"
      />
    </div>
  );
}
