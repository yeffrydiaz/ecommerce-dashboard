import { recentOrders } from '../../data/mockData';
import { Link } from 'react-router-dom';

const statusColors = {
  Delivered: 'bg-emerald-100 text-emerald-700',
  Processing: 'bg-blue-100 text-blue-700',
  Shipped: 'bg-indigo-100 text-indigo-700',
  Pending: 'bg-amber-100 text-amber-700',
  Cancelled: 'bg-red-100 text-red-700',
};

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Recent Orders</h3>
          <p className="text-sm text-gray-500">Latest customer purchases</p>
        </div>
        <Link
          to="/orders"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          View all →
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                Product
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {recentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5">
                  <span className="text-sm font-medium text-gray-900">{order.id}</span>
                  <p className="text-xs text-gray-400">{order.date}</p>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-sm text-gray-700">{order.customer}</span>
                  <p className="text-xs text-gray-400 hidden sm:block">{order.email}</p>
                </td>
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <span className="text-sm text-gray-700">{order.product}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-sm font-semibold text-gray-900">
                    ${order.amount.toFixed(2)}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      statusColors[order.status] || 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
