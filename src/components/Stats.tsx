import React from 'react';
import { Activity, Users, TrendingUp, Zap } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-2xl font-bold mb-2">{value}</p>
      <p className="text-sm text-green-400">{change}</p>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <StatCard
        title="Total Revenue"
        value="$45,231.89"
        change="+20.1% from last month"
        icon={<Activity className="w-6 h-6" />}
      />
      <StatCard
        title="Active Users"
        value="2,350"
        change="+180.1% from last month"
        icon={<Users className="w-6 h-6" />}
      />
      <StatCard
        title="Active Now"
        value="573"
        change="+201 since last hour"
        icon={<Zap className="w-6 h-6" />}
      />
      <StatCard
        title="Growth Rate"
        value="12.5%"
        change="+2.1% from last month"
        icon={<TrendingUp className="w-6 h-6" />}
      />
    </div>
  );
}