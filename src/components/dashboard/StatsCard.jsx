import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatsCard({ title, value, change, icon: Icon, color, prefix = '' }) {
  const isPositive = change >= 0;
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
          <Icon size={20} className="text-white" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold text-gray-900">
          {prefix}
          {typeof value === 'number' && value >= 1000
            ? value >= 1000000
              ? `${(value / 1000000).toFixed(1)}M`
              : `${(value / 1000).toFixed(1)}K`
            : value}
        </p>
        <div
          className={`flex items-center gap-1 text-sm font-medium ${
            isPositive ? 'text-emerald-600' : 'text-red-500'
          }`}
        >
          {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {Math.abs(change)}%
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-1">Compared to last month</p>
    </div>
  );
}
