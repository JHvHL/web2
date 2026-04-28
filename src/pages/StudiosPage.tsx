import { useState } from 'react'
import { studios } from '../data'
import { Search, MapPin, Users, Building2, X } from 'lucide-react'

export default function StudiosPage() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<typeof studios[0] | null>(null)

  const filtered = studios.filter(s =>
    !search || s.name.includes(search) || s.leader.includes(search) || s.address.includes(search)
  )

  const withPhotos = filtered.filter(s => s.imageFile)
  const withoutPhotos = filtered.filter(s => !s.imageFile)

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">委员工作室</h1>
        <p className="text-gray-500">2026年上城区政协委员工作室名单，共 50 家工作室服务基层群众</p>
      </div>

      {/* 搜索 */}
      <div className="card p-4 mb-6">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="搜索工作室名称、领衔委员、地址..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* 统计 */}
      <div className="flex gap-4 mb-6 text-sm text-gray-600">
        <span className="flex items-center gap-1.5"><Building2 size={14} className="text-primary-600" /> 共 {filtered.length} 家工作室</span>
        <span className="flex items-center gap-1.5"><Users size={14} className="text-amber-600" /> {filtered.filter(s => s.imageFile).length} 家有活动图片</span>
      </div>

      {/* 有图片的工作室 */}
      {withPhotos.length > 0 && (
        <section className="mb-10">
          <h2 className="section-title">工作室活动风采</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {withPhotos.map(studio => (
              <div
                key={studio.id}
                className="card overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                onClick={() => setSelected(studio)}
              >
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={`/images/studios/${studio.imageFile}`}
                    alt={studio.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-2 left-2 bg-primary-700/90 text-white text-xs px-2 py-0.5 rounded-full">
                    #{studio.id}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{studio.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                    <Users size={12} className="text-primary-500" />
                    <span>领衔委员：{studio.leader}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-gray-500">
                    <MapPin size={12} className="text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{studio.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 全部工作室列表 */}
      <section>
        <h2 className="section-title">全部工作室名录</h2>
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase w-12">序号</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">工作室名称</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase hidden sm:table-cell">领衔委员</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase hidden md:table-cell">地址</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(studio => (
                <tr
                  key={studio.id}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setSelected(studio)}
                >
                  <td className="px-4 py-3 text-sm text-gray-400">{studio.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {studio.imageFile ? (
                        <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0 bg-gray-100">
                          <img
                            src={`/images/studios/${studio.imageFile}`}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded bg-primary-50 flex items-center justify-center flex-shrink-0">
                          <Building2 size={14} className="text-primary-400" />
                        </div>
                      )}
                      <span className="text-sm font-medium text-gray-800">{studio.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary-700">{studio.leader[0]}</span>
                      </div>
                      <span className="text-sm text-gray-600">{studio.leader}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-sm text-gray-500 max-w-xs">
                    <div className="flex items-start gap-1.5">
                      <MapPin size={12} className="text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{studio.address}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="py-12 text-center text-gray-400">
              <Building2 size={32} className="mx-auto mb-3 opacity-30" />
              <p>未找到匹配的工作室</p>
            </div>
          )}
        </div>
      </section>

      {/* 详情弹窗 */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {selected.imageFile && (
              <div className="aspect-video bg-gray-100 overflow-hidden rounded-t-2xl">
                <img
                  src={`/images/studios/${selected.imageFile}`}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="tag bg-primary-50 text-primary-700">#{selected.id}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{selected.name}</h2>
                </div>
                <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 flex-shrink-0 ml-3">
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-700">{selected.leader[0]}</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">领衔委员</p>
                    <p className="font-semibold text-gray-800">{selected.leader}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400">工作室地址</p>
                    <p className="text-sm text-gray-800">{selected.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
