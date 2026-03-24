import { NavLink } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, Package, ShoppingCart } from 'lucide-react';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/sales', icon: TrendingUp, label: 'Sales' },
  { to: '/inventory', icon: Package, label: 'Inventory' },
  { to: '/orders', icon: ShoppingCart, label: 'Orders' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-indigo-900 min-h-screen flex flex-col">
      <div className="px-6 py-6 border-b border-indigo-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-400 rounded-lg flex items-center justify-center">
            <ShoppingCart size={18} className="text-white" />
          </div>
          <span className="text-white font-bold text-xl">ShopAdmin</span>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
              }`
            }
          >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="px-6 py-4 border-t border-indigo-700">
        <p className="text-indigo-400 text-xs">© 2024 ShopAdmin</p>
      </div>
    </aside>
  );
}
