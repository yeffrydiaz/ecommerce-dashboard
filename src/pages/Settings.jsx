import Header from '../components/layout/Header';
import { Bell, Lock, CreditCard, Globe, User, ShieldCheck } from 'lucide-react';

const settingsSections = [
  {
    icon: User,
    title: 'Profile Settings',
    description: 'Update your name, email, and profile photo',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Configure email and push notification preferences',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Manage passwords and two-factor authentication',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: CreditCard,
    title: 'Billing & Plans',
    description: 'View invoices and manage your subscription',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Globe,
    title: 'Store Settings',
    description: 'Configure store name, currency, and timezone',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy & Compliance',
    description: 'Manage GDPR settings and data retention policies',
    color: 'bg-violet-100 text-violet-600',
  },
];

export default function Settings() {
  return (
    <>
      <Header title="Settings" subtitle="Manage your store and account preferences" />
      <main className="flex-1 p-6">
        <div className="max-w-3xl space-y-4">
          {settingsSections.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{description}</p>
                </div>
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
