import { useState } from 'react'
import { centerPhotos } from '../data'
import { MapPin, ChevronLeft, ChevronRight, X, Info } from 'lucide-react'

const locations = ['全部', '彭埠', '紫阳', '湖滨', '清波', '小营', '望江', '南星']

const centerIntro = `杭州市政协新时代协商民主实践中心上城区分中心，坚持以习近平新时代中国特色社会主义思想为指导，充分发挥政协"专门协商机构"的职能作用，以"有事好商量"为理念，构建多层次、广覆盖的协商民主实践矩阵。

分中心依托上城区14个街道委员小组，建立彭埠、紫阳等协商民主实践点，广泛开展民生议事堂专题协商、街道委员小组联动协商等活动，积极推动协商民主实践向基层延伸，使政协协商更好服务上城经济社会高质量发展大局。`

const highlights = [
  { title: '矩阵化布局', desc: '依托14个街道构建协商民主实践矩阵，覆盖全区' },
  { title: '民生议事堂', desc: '打造居民家门口的协商平台，解决群众身边事' },
  { title: '三级联动', desc: '市区街三级政协联动，提升协商质效' },
  { title: '品牌化运作', desc: '形成"圆梦安居""助推商圈"等系列协商品牌' },
]

export default function PracticeCenter() {
  const [activeLocation, setActiveLocation] = useState('全部')
  const [photoIndex, setPhotoIndex] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = centerPhotos.filter(p =>
    activeLocation === '全部' || p.location === activeLocation
  )

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">协商民主实践</h1>
        <p className="text-gray-500">杭州市政协新时代协商民主实践中心上城区分中心</p>
      </div>

      {/* 分中心介绍 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900">上城区分中心简介</h2>
                <p className="text-sm text-gray-500">市政协新时代协商民主实践中心</p>
              </div>
            </div>
            {centerIntro.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3">{para}</p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {highlights.map(h => (
            <div key={h.title} className="card p-4 flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Info size={16} className="text-primary-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">{h.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 活动照片展示 */}
      <section>
        <h2 className="section-title">活动风采</h2>

        {/* 筛选标签 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {locations.map(loc => (
            <button
              key={loc}
              onClick={() => { setActiveLocation(loc); setPhotoIndex(0) }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeLocation === loc
                  ? 'bg-primary-700 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-700'
              }`}
            >
              {loc === '全部' ? `全部 (${centerPhotos.length})` : `${loc} (${centerPhotos.filter(p => p.location === loc).length})`}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((photo, i) => (
              <div
                key={photo.file}
                className="card overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                onClick={() => setLightbox(i)}
              >
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={`/images/center/${photo.file}`}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="bg-primary-700/90 text-white text-xs px-2 py-0.5 rounded-full">{photo.location}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center text-gray-400">
            <MapPin size={32} className="mx-auto mb-3 opacity-30" />
            <p>暂无该地区活动照片</p>
          </div>
        )}
      </section>

      {/* 灯箱 */}
      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>

          <button
            onClick={() => setLightbox(i => i !== null ? Math.max(0, i - 1) : null)}
            disabled={lightbox === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          <div className="max-w-4xl w-full text-center">
            <img
              src={`/images/center/${filtered[lightbox].file}`}
              alt={filtered[lightbox].title}
              className="max-w-full max-h-[75vh] rounded-lg shadow-2xl mx-auto"
            />
            <p className="text-white mt-4 text-sm">{filtered[lightbox].title}</p>
            <p className="text-white/50 text-xs mt-1">{lightbox + 1} / {filtered.length}</p>
          </div>

          <button
            onClick={() => setLightbox(i => i !== null ? Math.min(filtered.length - 1, i + 1) : null)}
            disabled={lightbox === filtered.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors disabled:opacity-30"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      )}
    </div>
  )
}
