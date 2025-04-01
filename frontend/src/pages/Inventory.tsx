
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileDown } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip
} from "recharts";

// Données d'exemple
const inventoryData = [
  // Matières premières
  { id: "rm1", name: "Matière A", type: "matiere", quantity: 150, unit: "kg", location: "Allée A, Étagère 1" },
  { id: "rm2", name: "Matière B", type: "matiere", quantity: 75, unit: "kg", location: "Allée A, Étagère 2" },
  { id: "rm3", name: "Matière C", type: "matiere", quantity: 200, unit: "l", location: "Allée B, Étagère 1" },
  // Productions
  { id: "prod1", name: "Production Lot #1234", type: "production", quantity: 50, unit: "kg", location: "Ligne de production A" },
  { id: "prod2", name: "Production Lot #1235", type: "production", quantity: 75, unit: "kg", location: "Ligne de production B" },
  // Produits finis
  { id: "fp1", name: "Produit A", type: "produit", quantity: 120, unit: "unité", location: "Zone d'expédition A" },
  { id: "fp2", name: "Produit B", type: "produit", quantity: 85, unit: "unité", location: "Zone d'expédition B" },
  { id: "fp3", name: "Produit C", type: "produit", quantity: 210, unit: "unité", location: "Zone d'expédition A" },
];

const pieData = [
  { name: "Matières premières", value: 425, color: "#3b82f6" },
  { name: "En production", value: 125, color: "#10b981" },
  { name: "Produits finis", value: 415, color: "#8b5cf6" },
];

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredInventory = inventoryData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getTypeLabel = (type: string) => {
    switch (type) {
      case "matiere": return "Matière première";
      case "production": return "En production";
      case "produit": return "Produit fini";
      default: return type;
    }
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case "matiere": return "bg-blue-100 text-blue-800";
      case "production": return "bg-green-100 text-green-800";
      case "produit": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Inventaire global</h1>
        <p className="text-muted-foreground">
          Vue d'ensemble de tous les articles en stock
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Répartition des stocks</CardTitle>
            <CardDescription>Aperçu par type d'article</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Résumé</CardTitle>
            <CardDescription>Totaux par catégorie</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Articles en stock</span>
                <span className="text-sm font-bold">{inventoryData.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Matières premières</span>
                <span className="text-sm">{inventoryData.filter(i => i.type === "matiere").length} articles</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">En production</span>
                <span className="text-sm">{inventoryData.filter(i => i.type === "production").length} lots</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Produits finis</span>
                <span className="text-sm">{inventoryData.filter(i => i.type === "produit").length} articles</span>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="text-sm font-medium mb-2">Emplacements</div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">Allée A: 2 articles</div>
                <div className="text-xs text-muted-foreground">Allée B: 1 article</div>
                <div className="text-xs text-muted-foreground">Production: 2 lots</div>
                <div className="text-xs text-muted-foreground">Zone d'expédition: 3 articles</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <FileDown className="mr-2 h-4 w-4" />
              Exporter le rapport
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <Tabs defaultValue="all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="raw">Matières premières</TabsTrigger>
            <TabsTrigger value="production">Production</TabsTrigger>
            <TabsTrigger value="finished">Produits finis</TabsTrigger>
          </TabsList>
          
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tous les articles</CardTitle>
              <CardDescription>Vue complète de l'inventaire</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Quantité</TableHead>
                    <TableHead>Unité</TableHead>
                    <TableHead>Emplacement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInventory.length > 0 ? (
                    filteredInventory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                            {getTypeLabel(item.type)}
                          </span>
                        </TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.location}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="h-24 text-center">
                        Aucun résultat trouvé.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="raw" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Matières premières</CardTitle>
              <CardDescription>Inventaire des matières premières</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Quantité</TableHead>
                    <TableHead>Unité</TableHead>
                    <TableHead>Emplacement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInventory
                    .filter(item => item.type === "matiere")
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.location}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="production" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>En production</CardTitle>
              <CardDescription>Articles en cours de production</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Quantité</TableHead>
                    <TableHead>Unité</TableHead>
                    <TableHead>Emplacement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInventory
                    .filter(item => item.type === "production")
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.location}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="finished" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Produits finis</CardTitle>
              <CardDescription>Inventaire des produits finis</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Quantité</TableHead>
                    <TableHead>Unité</TableHead>
                    <TableHead>Emplacement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInventory
                    .filter(item => item.type === "produit")
                    .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.location}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
