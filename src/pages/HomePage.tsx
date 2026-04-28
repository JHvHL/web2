import { Link } from 'react-router-dom'
import { Users, Grid3x3, Building2, MapPin, CalendarDays, ChevronRight, TrendingUp } from 'lucide-react'
import { categories, studios, plans, streetGroups } from '../data'

const statCards = [
  { label: '政协委员', value: '339', unit: '名', icon: Users, color: 'bg-primary-50 text-primary-700 border-primary-100', to: '/members' },
  { label: '界别分组', value: '16', unit: '个', icon: Grid3x3, color: 'bg-purple-50 text-purple-700 border-purple-100', to: '/categories' },
  { label: '委员工作室', value: '50', unit: '家', icon: Building2, color: 'bg-amber-50 text-amber-700 border-amber-100', to: '/studios' },
  { label: '街道委员小组', value: '14', unit: '个', icon: MapPin, color: 'bg-emerald-50 text-emerald-700 border-emerald-100', to: '/members' },
]

const quickLinks = [
  { to: '/members', label: '委员名单查询', desc: '按界别/街道/专委会查询委员信息', icon: Users, color: 'from-primary-700 to-primary-900' },
  { to: '/categories', label: '界别风采展示', desc: '16个界别活动动态与委员风采', icon: Grid3x3, color: 'from-purple-600 to-purple-800' },
  { to: '/studios', label: '委员工作室', desc: '50家工作室，服务基层群众', icon: Building2, color: 'from-amber-600 to-amber-800' },
  { to: '/practice-center', label: '协商民主实践', desc: '新时代协商民主实践中心活动展示', icon: MapPin, color: 'from-emerald-600 to-emerald-800' },
  { to: '/plans', label: '2026年履职计划', desc: '各界别全年活动安排一览', icon: CalendarDays, color: 'from-cyan-600 to-cyan-800' },
]

export default function HomePage() {
  // 按时间月份统计活动分布
  const monthCounts = plans.reduce((acc, p) => {
    const m = p.time
    acc[m] = (acc[m] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <div>
      {/* 英雄区域 */}
      <div className="bg-gradient-to-br from-primary-800 via-primary-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 text-sm">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
              杭州市上城区政协一届委员会 2026年度工作平台
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              政协委员通
            </h1>
            <p className="text-primary-200 text-lg md:text-xl mb-8 leading-relaxed">
              聚焦上城、建言献策、服务民生<br />
              汇聚339名委员，共绘上城高质量发展新篇
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/members" className="flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-gray-900 font-semibold px-6 py-3 rounded-xl transition-colors">
                <Users size={18} />
                查询委员信息
              </Link>
              <Link to="/plans" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors border border-white/20">
                <CalendarDays size={18} />
                2026履职计划
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* 统计卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8">
          {statCards.map(({ label, value, unit, icon: Icon, color, to }) => (
            <Link key={label} to={to} className={`card p-5 border flex flex-col gap-3 hover:shadow-md transition-shadow ${color}`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{label}</span>
                <Icon size={20} className="opacity-60" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{value}</span>
                <span className="text-sm opacity-70">{unit}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 快速入口 */}
        <section>
          <h2 className="section-title">功能入口</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map(({ to, label, desc, icon: Icon, color }) => (
              <Link
                key={to}
                to={to}
                className={`bg-gradient-to-br ${color} text-white rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/20 rounded-lg p-2.5">
                    <Icon size={22} />
                  </div>
                  <ChevronRight size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-lg mb-1">{label}</h3>
                <p className="text-white/70 text-sm">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 界别分布 */}
        <section>
          <h2 className="section-title">委员界别分布</h2>
          <div className="card p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {categories.map(cat => (
                <Link
                  key={cat.id}
                  to="/categories"
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">{cat.name.replace('界别', '')}</span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: cat.color }}>{cat.count}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
              <span>共 16 个界别</span>
              <Link to="/categories" className="text-primary-700 hover:text-primary-800 font-medium flex items-center gap-1">
                查看详情 <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* 街道分布 + 2026活动预览 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 街道委员小组 */}
          <section>
            <h2 className="section-title">街道委员小组</h2>
            <div className="card divide-y divide-gray-50">
              {streetGroups.map((g, i) => (
                <div key={g.name} className="flex items-center px-5 py-3 hover:bg-gray-50 transition-colors">
                  <span className="w-6 text-xs text-gray-400 font-mono">{i + 1}</span>
                  <span className="flex-1 text-sm font-medium text-gray-700">{g.name}街道委员小组</span>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 bg-primary-100 rounded-full w-20 overflow-hidden">
                      <div
                        className="h-full bg-primary-600 rounded-full"
                        style={{ width: `${(g.count / 25) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-primary-700 w-8 text-right">{g.count}人</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2026年活动月度分布 */}
          <section>
            <h2 className="section-title">2026年活动分布</h2>
            <div className="card p-6">
              <div className="space-y-3">
                {['1月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '12月'].map(month => {
                  const count = monthCounts[month] || 0
                  if (!count) return null
                  return (
                    <div key={month} className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 w-10 flex-shrink-0">{month}</span>
                      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all"
                          style={{ width: `${(count / 8) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-600 w-10 text-right">{count} 项</span>
                    </div>
                  )
                })}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <TrendingUp size={16} className="text-primary-600" />
                  全年共 {plans.length} 项履职活动计划
                </div>
                <Link to="/plans" className="text-primary-700 hover:text-primary-800 font-medium text-sm flex items-center gap-1">
                  查看全部 <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* 工作室精选 */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title mb-0">委员工作室精选</h2>
            <Link to="/studios" className="text-primary-700 hover:text-primary-800 text-sm font-medium flex items-center gap-1">
              查看全部50家 <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studios.filter(s => s.imageFile).slice(0, 6).map(studio => (
              <Link key={studio.id} to="/studios" className="card overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-video bg-gray-100 overflow-hidden relative">
                  <img
                    src={`/images/studios/${studio.imageFile}`}
                    alt={studio.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={e => { (e.target as HTMLImageElement).src = '/placeholder.jpg' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-semibold line-clamp-1">{studio.name}</p>
                  </div>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                      <Users size={12} className="text-primary-700" />
                    </div>
                    <span className="text-sm text-gray-600">领衔：{studio.leader}</span>
                  </div>
                  <ChevronRight size={14} className="text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
