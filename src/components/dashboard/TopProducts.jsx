import { products } from '../../data/mockData';
import { Star } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

export default function TopProducts() {
  const top = [...products].sort((a, b) => b.sold - a.sold).slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Top Products</h3>
          <p className="text-sm text-gray-500">Best sellers this month</p>
        </div>
        <RouterLink
          to="/products"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          View all →
        </RouterLink>
      </div>
      <div className="divide-y divide-gray-50">
        {top.map((product, index) => (
          <div key={product.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 transition-colors">
            <span className="w-6 text-sm font-bold text-gray-400">#{index + 1}</span>
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
              <p className="text-xs text-gray-500">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">${product.price.toFixed(2)}</p>
              <div className="flex items-center gap-1 justify-end">
                <Star size={11} className="text-amber-400 fill-amber-400" />
                <span className="text-xs text-gray-500">{product.rating}</span>
              </div>
            </div>
            <div className="text-right min-w-[60px]">
              <p className="text-sm font-medium text-gray-700">{product.sold}</p>
              <p className="text-xs text-gray-400">sold</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
