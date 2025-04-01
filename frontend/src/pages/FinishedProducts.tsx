
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, TrendingDown } from "lucide-react";
import { ProductTable } from "@/components/inventory/ProductTable";
import { InventoryForm } from "@/components/inventory/InventoryForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Données d'exemple
const finishedProductsData = [
  {
    id: "fp1",
    name: "Produit A",
    quantity: 120,
    unit: "unité",
    location: "Zone d'expédition A",
    lastUpdated: "15/05/2024"
  },
  {
    id: "fp2",
    name: "Produit B",
    quantity: 85,
    unit: "unité",
    location: "Zone d'expédition B",
    lastUpdated: "14/05/2024"
  },
  {
    id: "fp3",
    name: "Produit C",
    quantity: 210,
    unit: "unité",
    location: "Zone d'expédition A",
    lastUpdated: "13/05/2024"
  },
];

const shipmentsData = [
  { id: 1, date: "16/05/2024", client: "Client X", product: "Produit A", quantity: 15, status: "Prévue" },
  { id: 2, date: "15/05/2024", client: "Client Y", product: "Produit B", quantity: 25, status: "Expédiée" },
  { id: 3, date: "14/05/2024", client: "Client Z", product: "Produit A", quantity: 10, status: "Livrée" },
];

export default function FinishedProducts() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [finishedProducts, setFinishedProducts] = useState(finishedProductsData);
  const { toast } = useToast();

  const handleAddProduct = (data: any) => {
    const newProduct = {
      id: `fp${Date.now()}`,
      name: data.name,
      quantity: parseFloat(data.quantity),
      unit: data.unit,
      location: data.location,
      lastUpdated: new Date().toLocaleDateString("fr-FR")
    };
    
    setFinishedProducts([...finishedProducts, newProduct]);
    setIsFormOpen(false);
    
    toast({
      title: "Produit fini ajouté",
      description: `${data.name} a été ajouté avec succès.`,
    });
  };
  
  const handleViewProduct = (id: string) => {
    console.log("Visualisation du produit fini:", id);
    // Implémentation à venir : ouvrir un modal de détails
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Produits finis</h1>
        <p className="text-muted-foreground">
          Gérez vos produits finis et les expéditions
        </p>
      </div>
      
      <Tabs defaultValue="inventory">
        <TabsList>
          <TabsTrigger value="inventory">Inventaire</TabsTrigger>
          <TabsTrigger value="shipments">Expéditions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="inventory" className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Stock de produits finis</h2>
              <Button onClick={() => setIsFormOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un produit fini
              </Button>
            </div>
            
            <ProductTable
              products={finishedProducts}
              title="Produits finis"
              onAdd={() => setIsFormOpen(true)}
              onView={handleViewProduct}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="shipments" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Expéditions</CardTitle>
              <CardDescription>
                Historique et planification des expéditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Nouvelle expédition
                  </Button>
                </div>
                
                <div className="rounded-md border">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold bg-muted/50">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold bg-muted/50">Client</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold bg-muted/50">Produit</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold bg-muted/50">Quantité</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold bg-muted/50">Statut</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold bg-muted/50">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {shipmentsData.map((shipment) => (
                        <tr key={shipment.id}>
                          <td className="px-4 py-3 text-sm">{shipment.date}</td>
                          <td className="px-4 py-3 text-sm font-medium">{shipment.client}</td>
                          <td className="px-4 py-3 text-sm">{shipment.product}</td>
                          <td className="px-4 py-3 text-sm">{shipment.quantity}</td>
                          <td className="px-4 py-3 text-sm">
                            <span 
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                ${shipment.status === 'Prévue' ? 'bg-blue-100 text-blue-800' : 
                                  shipment.status === 'Expédiée' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-green-100 text-green-800'}`}
                            >
                              {shipment.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <Button variant="ghost" size="sm">Détails</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <InventoryForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleAddProduct}
        type="finishedProduct"
      />
    </div>
  );
}
