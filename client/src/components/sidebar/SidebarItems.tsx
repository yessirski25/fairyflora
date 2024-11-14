import { Inventory, LocalLaundryService, People, PieChart, Store } from "@mui/icons-material"

export interface SidebarItem {
    label: string;
    icon: React.ReactNode;
    path: string;
    allowedRoles: Role[]; // Array of roles allowed to see this item
  }
  
  // Define sidebar items with role-based access
  export const sidebarItems: SidebarItem[] = [
    { label: 'Dashboard', icon: <PieChart />, path: 'admin-dashboard', allowedRoles: ['Admin'] },
    { label: 'Employees', icon: <People />, path: 'employee', allowedRoles: ['Admin'] },
    { label: 'Branch', icon: <Store />, path: 'branch', allowedRoles: ['Admin'] },
    { label: 'Services', icon: <LocalLaundryService />, path: 'services', allowedRoles: ['Admin'] },
    { label: 'Inventory', icon: <Inventory />, path: 'inventory', allowedRoles: ['Admin'] },
    { label: 'Dashboard', icon: <PieChart />, path: 'emp-dashboard', allowedRoles: ['Employee'] },
  ];