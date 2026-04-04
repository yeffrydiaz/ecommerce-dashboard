import { useState } from 'react';
import Header from '../components/layout/Header';
import { products } from '../data/mockData';
import { Search, Plus, Star, Edit, Trash2 } from 'lucide-react';

const allCategories = ['All', 'Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books'];

const stockStatus = (stock) => {
  if (stock === 0) return { label: 'Out of Stock', cls: 'bg-red-100 text-red-700' };
  if (stock <= 20) return { label: 'Low Stock', cls: 'bg-amber-100 text-amber-700' };
  return { label: 'In Stock', cls: 'bg-emerald-100 text-emerald-700' };
};

export default function Products() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === 'All' || p.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <Header title="Products" subtitle="Manage your product inventory" />
      <main className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 py-4 border-b border-gray-100">
            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {allCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    category === c
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {c}
                </button>
              ))}
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Plus size={14} />
                Add Product
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Category
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Stock
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Sold
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Rating
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="px-5 py-12 text-center text-gray-400 text-sm">
                      No products found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((product) => {
                    const stock = stockStatus(product.stock);
                    return (
                      <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                            />
                            <span className="text-sm font-medium text-gray-900">{product.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3.5 hidden sm:table-cell">
                          <span className="text-sm text-gray-600">{product.category}</span>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className="text-sm font-semibold text-gray-900">
                            ${product.price.toFixed(2)}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 hidden md:table-cell">
                          <span className="text-sm text-gray-700">{product.stock}</span>
                        </td>
                        <td className="px-5 py-3.5 hidden lg:table-cell">
                          <span className="text-sm text-gray-700">{product.sold.toLocaleString()}</span>
                        </td>
                        <td className="px-5 py-3.5 hidden md:table-cell">
                          <div className="flex items-center gap-1">
                            <Star size={13} className="text-amber-400 fill-amber-400" />
                            <span className="text-sm text-gray-700">{product.rating}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3.5">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${stock.cls}`}
                          >
                            {stock.label}
                          </span>
                        </td>
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                              <Edit size={15} />
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing {filtered.length} of {products.length} products
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
