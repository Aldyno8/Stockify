
import { useState } from "react";
import { StatsCard } from "@/components/ui/stats-card";
import { 
  Box, 
  PackageCheck, 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  ArrowDownUp 
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts";

const activityData = [
  { date: "Jan", matieresPremieres: 4000, production: 2400, produitsFinis: 2400 },
  { date: "Fév", matieresPremieres: 3000, production: 1398, produitsFinis: 2210 },
  { date: "Mar", matieresPremieres: 2000, production: 9800, produitsFinis: 2290 },
  { date: "Avr", matieresPremieres: 2780, production: 3908, produitsFinis: 2000 },
  { date: "Mai", matieresPremieres: 1890, production: 4800, produitsFinis: 2181 },
  { date: "Juin", matieresPremieres: 2390, production: 3800, produitsFinis: 2500 },
  { date: "Juil", matieresPremieres: 3490, production: 4300, produitsFinis: 2100 },
];

const stockData = [
  { name: "Matière A", stock: 240 },
  { name: "Matière B", stock: 138 },
  { name: "Matière C", stock: 980 },
  { name: "Produit X", stock: 390 },
  { name: "Produit Y", stock: 480 },
];

export default function Dashboard() {
  const [alertsCount] = useState(2);
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        <p className="text-muted-foreground">
          Aperçu global de votre inventaire et de votre production
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Matières premières"
          value="358"
          description="8 types différents"
          icon={Box}
          trend="up"
          trendValue="12% ce mois"
        />
        
        <StatsCard
          title="En production"
          value="24"
          description="3 lots en cours"
          icon={Package}
          trend="neutral"
          trendValue="Stable"
        />
        
        <StatsCard
          title="Produits finis"
          value="127"
          description="4 types différents"
          icon={PackageCheck}
          trend="down"
          trendValue="5% ce mois"
        />
        
        <StatsCard
          title="Alertes"
          value={alertsCount}
          description="Stocks faibles"
          icon={AlertTriangle}
          className={alertsCount > 0 ? "border-red-200" : ""}
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>Vue des mouvements des 7 derniers mois</CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <defs>
                    <linearGradient id="colorMatieresPremieres" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorProduitsFinis" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#db2777" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#db2777" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="matieresPremieres" 
                    stroke="#2563eb" 
                    fillOpacity={1} 
                    fill="url(#colorMatieresPremieres)"
                    name="Matières premières"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="production" 
                    stroke="#16a34a" 
                    fillOpacity={1} 
                    fill="url(#colorProduction)"
                    name="Production"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="produitsFinis" 
                    stroke="#db2777" 
                    fillOpacity={1} 
                    fill="url(#colorProduitsFinis)"
                    name="Produits finis"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>État des stocks</CardTitle>
            <CardDescription>Volumes actuels par type</CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="stock" fill="#3b82f6" name="Quantité en stock" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-md">Activités récentes</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <p className="text-sm font-medium">Réception de matières premières</p>
                <p className="text-xs text-muted-foreground">Il y a 2 heures</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <p className="text-sm font-medium">Début de production - Lot #1234</p>
                <p className="text-xs text-muted-foreground">Il y a 5 heures</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-1">
                <p className="text-sm font-medium">Produits finis - Envoi client</p>
                <p className="text-xs text-muted-foreground">Hier, 14:30</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-md">Alertes de stock</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4 py-1">
                <p className="text-sm font-medium">Matière A</p>
                <p className="text-xs text-muted-foreground">Stock bas: 5 unités</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-1">
                <p className="text-sm font-medium">Matière C</p>
                <p className="text-xs text-muted-foreground">Stock en alerte: 10 unités</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-md">Mouvements importants</CardTitle>
              <ArrowDownUp className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-warehouse-600 pl-4 py-1">
                <p className="text-sm font-medium">Livraison prévue - Matière B</p>
                <p className="text-xs text-muted-foreground">Demain, 09:00</p>
              </div>
              <div className="border-l-4 border-warehouse-600 pl-4 py-1">
                <p className="text-sm font-medium">Expédition - Produit X</p>
                <p className="text-xs text-muted-foreground">Après-demain, 14:00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
