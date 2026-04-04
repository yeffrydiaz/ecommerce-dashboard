import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { categoryData } from '../../data/mockData';

const COLORS = ['#6366f1', '#14b8a6', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function CategoryChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Sales by Category</h3>
        <p className="text-sm text-gray-500">Distribution of product categories</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            dataKey="value"
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value}%`, 'Share']}
            contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
