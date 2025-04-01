
import { LucideIcon, Package, PackageCheck, Boxes, Box, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface SidebarItemType {
  name: string;
  to: string;
  icon: LucideIcon;
}

const mainNavigation: SidebarItemType[] = [
  {
    name: "Tableau de bord",
    to: "/",
    icon: Home,
  },
  {
    name: "Matières premières",
    to: "/matieres-premieres",
    icon: Box,
  },
  {
    name: "Production",
    to: "/production",
    icon: Package,
  },
  {
    name: "Produits finis",
    to: "/produits-finis",
    icon: PackageCheck,
  },
  {
    name: "Inventaire global",
    to: "/inventaire",
    icon: Boxes,
  },
];

export function AppSidebar() {
  const location = useLocation();
  
  return (
    <Sidebar>
      <SidebarHeader className="pb-2">
        <div className="flex items-center gap-2 px-4 py-2">
          <Boxes className="h-6 w-6 text-warehouse-500" />
          <span className="text-lg font-semibold">Stockify</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavigation.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.to}
                      className={cn(
                        location.pathname === item.to && "bg-sidebar-accent text-primary"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-3 py-2">
          <p className="text-xs text-muted-foreground">
            Gestion d'entrepôt v1.0
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
