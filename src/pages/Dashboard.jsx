import Header from '../components/layout/Header';
import StatsCard from '../components/dashboard/StatsCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import CategoryChart from '../components/dashboard/CategoryChart';
import RecentOrders from '../components/dashboard/RecentOrders';
import TopProducts from '../components/dashboard/TopProducts';
import { statsData } from '../data/mockData';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';

const statCards = [
  {
    title: 'Total Revenue',
    value: statsData.totalRevenue.value,
    change: statsData.totalRevenue.change,
    icon: DollarSign,
    color: 'bg-indigo-500',
    prefix: '$',
  },
  {
    title: 'Total Orders',
    value: statsData.totalOrders.value,
    change: statsData.totalOrders.change,
    icon: ShoppingCart,
    color: 'bg-teal-500',
  },
  {
    title: 'Total Customers',
    value: statsData.totalCustomers.value,
    change: statsData.totalCustomers.change,
    icon: Users,
    color: 'bg-violet-500',
  },
  {
    title: 'Avg. Order Value',
    value: statsData.avgOrderValue.value,
    change: statsData.avgOrderValue.change,
    icon: TrendingUp,
    color: 'bg-amber-500',
    prefix: '$',
  },
];

export default function Dashboard() {
  return (
    <>
      <Header
        title="Dashboard"
        subtitle="Welcome back, Admin! Here's what's happening today."
      />
      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {statCards.map((card) => (
            <StatsCard key={card.title} {...card} />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <CategoryChart />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <RecentOrders />
          </div>
          <div>
            <TopProducts />
          </div>
        </div>
      </main>
    </>
  );
}
