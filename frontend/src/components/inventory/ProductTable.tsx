
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Plus, FileDown, FileUp } from "lucide-react";

interface Product {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  location: string;
  lastUpdated: string;
}

interface ProductTableProps {
  products: Product[];
  title: string;
  onAdd?: () => void;
  onView?: (id: string) => void;
  allowImportExport?: boolean;
}

export function ProductTable({ 
  products, 
  title, 
  onAdd, 
  onView,
  allowImportExport = true 
}: ProductTableProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-2">
          {allowImportExport && (
            <>
              <Button variant="outline" size="sm">
                <FileDown className="mr-2 h-4 w-4" />
                Exporter
              </Button>
              <Button variant="outline" size="sm">
                <FileUp className="mr-2 h-4 w-4" />
                Importer
              </Button>
            </>
          )}
          {onAdd && (
            <Button size="sm" onClick={onAdd}>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter
            </Button>
          )}
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Quantité</TableHead>
              <TableHead>Unité</TableHead>
              <TableHead>Emplacement</TableHead>
              <TableHead>Dernière mise à jour</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length > 0 ? (
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.unit}</TableCell>
                  <TableCell>{product.location}</TableCell>
                  <TableCell>{product.lastUpdated}</TableCell>
                  <TableCell>
                    {onView && (
                      <Button variant="ghost" size="icon" onClick={() => onView(product.id)}>
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">Voir les détails</span>
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  Aucun élément trouvé.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
