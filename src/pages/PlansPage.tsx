import { useState, useMemo } from 'react'
import { plans } from '../data'
import { CalendarDays, Filter, ChevronDown } from 'lucide-react'

const typeColors: Record<string, string> = {
  '主题活动': 'bg-blue-100 text-blue-700',
  '专题协商': 'bg-red-100 text-red-700',
  '主题沙龙': 'bg-purple-100 text-purple-700',
  '公益咨询服务': 'bg-green-100 text-green-700',
  '惠民服务': 'bg-teal-100 text-teal-700',
  '互动体验': 'bg-amber-100 text-amber-700',
  '专题调研': 'bg-indigo-100 text-indigo-700',
  '参观交流': 'bg-cyan-100 text-cyan-700',
  '名中医讲座、适宜技术应用、义诊': 'bg-emerald-100 text-emerald-700',
  '志愿服务': 'bg-pink-100 text-pink-700',
  '爱心义卖': 'bg-rose-100 text-rose-700',
}

const months = ['全部', '1月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '12月']
const activityTypes = ['全部', ...Array.from(new Set(plans.map(p => p.type)))]

const categoryColors = [
  '#dc2626', '#9333ea', '#2563eb', '#0891b2', '#db2777', '#d97706',
  '#16a34a', '#0d9488', '#7c3aed', '#b45309', '#15803d', '#1d4ed8',
  '#047857', '#be185d', '#92400e', '#374151'
]

export default function PlansPage() {
  const [viewMode, setViewMode] = useState<'timeline' | 'category' | 'table'>('timeline')
  const [selectedMonth, setSelectedMonth] = useState('全部')
  const [selectedType, setSelectedType] = useState('全部')
  const [expandedMonths, setExpandedMonths] = useState<Set<string>>(new Set(['1月', '3月', '4月']))

  const filtered = useMemo(() => plans.filter(p =>
    (selectedMonth === '全部' || p.time === selectedMonth) &&
    (selectedType === '全部' || p.type === selectedType)
  ), [selectedMonth, selectedType])

  const byMonth = useMemo(() => {
    const map: Record<string, typeof plans> = {}
    filtered.forEach(p => {
      if (!map[p.time]) map[p.time] = []
      map[p.time].push(p)
    })
    return map
  }, [filtered])

  const byCategory = useMemo(() => {
    const map: Record<string, typeof plans> = {}
    filtered.forEach(p => {
      if (!map[p.category]) map[p.category] = []
      map[p.category].push(p)
    })
    return map
  }, [filtered])

  const toggleMonth = (month: string) => {
    setExpandedMonths(prev => {
      const next = new Set(prev)
      if (next.has(month)) next.delete(month)
      else next.add(month)
      return next
    })
  }

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">2026年履职计划</h1>
        <p className="text-gray-500">政协杭州市上城区委员会2026年度各界别履职计划，共 {plans.length} 项活动</p>
      </div>

      {/* 筛选区 */}
      <div className="card p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          {/* 月份筛选 */}
          <div className="flex flex-wrap gap-1.5">
            <span className="text-sm text-gray-500 self-center mr-1 flex items-center gap-1">
              <Filter size={13} /> 月份：
            </span>
            {months.map(m => (
              <button
                key={m}
                onClick={() => setSelectedMonth(m)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedMonth === m ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          <span className="text-sm text-gray-500 self-center mr-1">类型：</span>
          {activityTypes.map(t => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedType === t ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t === '全部' ? `全部 (${plans.length})` : t}
            </button>
          ))}
        </div>
      </div>

      {/* 视图切换 */}
      <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-xl w-fit">
        {[
          { id: 'timeline', label: '时间轴视图' },
          { id: 'category', label: '按界别视图' },
          { id: 'table', label: '表格视图' },
        ].map(v => (
          <button
            key={v.id}
            onClick={() => setViewMode(v.id as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              viewMode === v.id ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* 时间轴视图 */}
      {viewMode === 'timeline' && (
        <div className="space-y-4">
          {Object.entries(byMonth).sort((a, b) => {
            const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            return months.indexOf(a[0]) - months.indexOf(b[0])
          }).map(([month, items]) => (
            <div key={month} className="card overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleMonth(month)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-700 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{month.replace('月', '')}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">2026年{month}</div>
                    <div className="text-sm text-gray-500">{items.length} 项活动</div>
                  </div>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 transition-transform ${expandedMonths.has(month) ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedMonths.has(month) && (
                <div className="divide-y divide-gray-50">
                  {items.map((plan, i) => (
                    <div key={i} className="flex items-start gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2" />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-gray-800">{plan.activity}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className={`tag text-xs ${typeColors[plan.type] || 'bg-gray-100 text-gray-600'}`}>{plan.type}</span>
                          <span className="text-xs text-gray-400">{plan.category}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 按界别视图 */}
      {viewMode === 'category' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(byCategory).map(([category, items], idx) => (
            <div key={category} className="card overflow-hidden">
              <div className="px-5 py-4" style={{ borderLeft: `4px solid ${categoryColors[idx % categoryColors.length]}` }}>
                <h3 className="font-bold text-gray-800 mb-1">{category}</h3>
                <p className="text-sm text-gray-500">{items.length} 项活动</p>
              </div>
              <div className="divide-y divide-gray-50">
                {items.map((plan, i) => (
                  <div key={i} className="px-5 py-3">
                    <p className="text-sm text-gray-700 mb-1.5">{plan.activity}</p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className={`tag text-xs ${typeColors[plan.type] || 'bg-gray-100 text-gray-600'}`}>{plan.type}</span>
                      <span className="tag bg-gray-100 text-gray-500 text-xs">
                        <CalendarDays size={10} className="mr-1" />
                        {plan.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 表格视图 */}
      {viewMode === 'table' && (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase w-12">#</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">界别</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">活动名称</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">活动类型</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">时间</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((plan, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-medium text-gray-700">{plan.category}</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800 max-w-sm">
                      <span className="line-clamp-2">{plan.activity}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`tag ${typeColors[plan.type] || 'bg-gray-100 text-gray-600'}`}>{plan.type}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays size={13} className="text-primary-500" />
                        <span className="text-sm font-medium text-gray-700">{plan.time}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="py-12 text-center text-gray-400">
                <CalendarDays size={32} className="mx-auto mb-3 opacity-30" />
                <p>暂无匹配活动</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 摘要统计 */}
      <div className="mt-10 card p-6">
        <h3 className="font-bold text-gray-800 mb-4">活动类型统计</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {activityTypes.filter(t => t !== '全部').map(type => {
            const count = plans.filter(p => p.type === type).length
            return (
              <div key={type} className="p-3 rounded-lg bg-gray-50">
                <span className={`tag ${typeColors[type] || 'bg-gray-100 text-gray-600'} mb-2 block w-fit`}>{type}</span>
                <span className="text-lg font-bold text-gray-800">{count}</span>
                <span className="text-xs text-gray-500 ml-1">项</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
