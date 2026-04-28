import { useState } from 'react'
import { categories, categoryPhotos } from '../data'
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react'

const categoryDescriptions: Record<string, string> = {
  '中共': '中共界别委员积极发挥示范带头作用，围绕党和国家中心工作以及区委区政府重大决策部署，开展调研视察、参政议政，在推动上城高质量发展中彰显政协智慧。',
  '无党派': '无党派界别汇聚各领域专家学者，以专业视角建言献策，聚焦法治、医疗、教育、经济等领域深入调研，在参政议政中展现无党派人士的独特价值。',
  '共青团、青联': '共青团、青联界别代表上城青年力量，积极推动青年创新创业，关注青少年成长发展，在基层协商、公益服务中展现新时代青年担当。',
  '工会': '工会界别紧紧围绕职工权益保障、和谐劳动关系构建等主题开展履职活动，举办丰富多彩的职工文化活动，助力职工群体高质量发展。',
  '妇联': '妇联界别关注女性发展与家庭建设，积极弘扬优秀传统文化，推动巾帼共富，在社会治理和民生改善中发挥重要作用。',
  '工商联': '工商联界别汇聚上城优秀民营企业家，聚焦营商环境优化、民营经济高质量发展，积极为上城经济社会发展贡献智慧与力量。',
  '科技科协': '科技、科协界别充分发挥科技人才优势，围绕科技创新、成果转化、人才培育等主题开展调研，助力上城打造创新驱动发展新引擎。',
  '侨、台': '侨、台界别积极促进两岸交流、增进海外华侨华人与祖国的联系，在文化传承、招商引资、民心相通方面发挥独特桥梁纽带作用。',
  '新闻文体': '新闻文体界别围绕文化繁荣发展积极建言，关注媒体融合、文艺创作、体育健身等议题，在传播上城好声音中彰显担当。',
  '经济': '经济界别委员深耕产业经济研究，围绕数字经济、平台经济、实体经济高质量发展开展专题调研，为上城经济转型升级贡献智慧。',
  '环境资源和农业': '环境资源和农业界别聚焦生态保护与乡村振兴，深入调研上城区环保、农业农村工作，在绿色发展中彰显使命担当。',
  '教育': '教育界别委员关注教育公平、优质均衡发展，积极推动教育改革创新，在课程改革、家校共育、教师发展等方面深度参与，助力上城打造教育品质高地。',
  '医卫': '医卫界别汇聚医疗卫生领域专家，围绕健康上城建设积极履职，推动医疗服务均等化，在义诊服务、健康知识普及中服务基层群众。',
  '社会福利保障': '社会福利和保障界别关注老龄化、残障人士、困难群体等民生议题，积极推动社会保障体系完善，在公益服务中彰显政协温度。',
  '民族宗教': '民族宗教界别促进民族团结进步，维护社会和谐稳定，在民族文化传承、宗教事务管理等方面积极发挥作用。',
  '特邀': '特邀界别汇聚社会各界优秀人士，以独特视角和资源优势参与政协工作，在调研视察、参政议政中彰显特邀委员的广泛代表性。',
}

export default function CategoriesPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [lightbox, setLightbox] = useState<{ file: string; title: string } | null>(null)

  const handleCategoryClick = (catId: string) => {
    setSelected(catId)
    setPhotoIndex(0)
  }

  const selectedCat = categories.find(c => c.id === selected)
  const photos = selected ? (categoryPhotos[selected] || []) : []

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">界别风采</h1>
        <p className="text-gray-500">16个界别委员群体活动展示，共 339 名委员履职风采</p>
      </div>

      {!selected ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(cat => {
            const photos = categoryPhotos[cat.id] || []
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="card overflow-hidden text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* 图片区域 */}
                <div className="relative h-36 overflow-hidden bg-gray-100">
                  {photos.length > 0 ? (
                    <img
                      src={`/images/categories/${photos[0]}`}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={e => {
                        const target = e.target as HTMLImageElement
                        target.parentElement!.style.background = cat.color + '20'
                        target.style.display = 'none'
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: cat.color + '15' }}>
                      <Camera size={32} style={{ color: cat.color }} className="opacity-40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition-all" />
                  {/* 委员人数徽章 */}
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-bold" style={{ color: cat.color }}>
                    {cat.count} 人
                  </div>
                  {photos.length > 0 && (
                    <div className="absolute bottom-2 right-2 bg-black/40 rounded-full px-1.5 py-0.5 text-xs text-white flex items-center gap-1">
                      <Camera size={10} /> {photos.length}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
                    <h3 className="font-bold text-gray-900 text-sm">{cat.name}</h3>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2">{cat.description}</p>
                </div>
              </button>
            )
          })}
        </div>
      ) : (
        <div>
          {/* 返回按钮 */}
          <button
            onClick={() => setSelected(null)}
            className="flex items-center gap-1.5 text-sm text-primary-700 hover:text-primary-800 font-medium mb-6"
          >
            ← 返回界别列表
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左侧 - 界别信息 */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white" style={{ backgroundColor: selectedCat?.color }}>
                    {selectedCat?.name.slice(0, 1)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{selectedCat?.name}</h2>
                    <p className="text-sm text-gray-500">{selectedCat?.count} 名委员</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {categoryDescriptions[selected] || selectedCat?.description}
                </p>

                <div className="mt-5 pt-5 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">活动照片</span>
                    <span className="font-semibold" style={{ color: selectedCat?.color }}>{photos.length} 张</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-500">界别委员</span>
                    <span className="font-semibold" style={{ color: selectedCat?.color }}>{selectedCat?.count} 名</span>
                  </div>
                </div>

                {/* 切换到其他界别 */}
                <div className="mt-5">
                  <p className="text-xs text-gray-400 mb-2">其他界别</p>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.filter(c => c.id !== selected).map(c => (
                      <button
                        key={c.id}
                        onClick={() => handleCategoryClick(c.id)}
                        className="text-xs px-2 py-1 rounded-full border transition-colors hover:border-current"
                        style={{ borderColor: c.color + '60', color: c.color }}
                      >
                        {c.name.replace('界别', '')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧 - 图片展示 */}
            <div className="lg:col-span-2">
              {photos.length > 0 ? (
                <>
                  {/* 主图 */}
                  <div
                    className="card overflow-hidden mb-4 cursor-pointer group"
                    onClick={() => setLightbox({ file: photos[photoIndex], title: photos[photoIndex].replace('.webp', '') })}
                  >
                    <div className="relative aspect-video bg-gray-100">
                      <img
                        src={`/images/categories/${photos[photoIndex]}`}
                        alt="活动照片"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      {/* 导航按钮 */}
                      {photos.length > 1 && (
                        <>
                          <button
                            onClick={e => { e.stopPropagation(); setPhotoIndex(i => Math.max(0, i - 1)) }}
                            disabled={photoIndex === 0}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all disabled:opacity-30"
                          >
                            <ChevronLeft size={18} className="text-gray-700" />
                          </button>
                          <button
                            onClick={e => { e.stopPropagation(); setPhotoIndex(i => Math.min(photos.length - 1, i + 1)) }}
                            disabled={photoIndex === photos.length - 1}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all disabled:opacity-30"
                          >
                            <ChevronRight size={18} className="text-gray-700" />
                          </button>
                        </>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-white text-sm line-clamp-2">
                          {photos[photoIndex].replace('.webp', '').replace(/^cat-\d+$/, '活动照片')}
                        </p>
                        <p className="text-white/60 text-xs mt-1">{photoIndex + 1} / {photos.length}</p>
                      </div>
                    </div>
                  </div>

                  {/* 缩略图 */}
                  {photos.length > 1 && (
                    <div className="grid grid-cols-4 gap-2">
                      {photos.map((photo, i) => (
                        <button
                          key={photo}
                          onClick={() => setPhotoIndex(i)}
                          className={`aspect-video rounded-lg overflow-hidden transition-all ${
                            i === photoIndex ? 'ring-2 ring-primary-600 scale-95' : 'opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={`/images/categories/${photo}`}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="card p-12 text-center">
                  <Camera size={48} className="mx-auto mb-4 text-gray-300" />
                  <p className="text-gray-400">暂无活动照片</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 灯箱 */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white/70 hover:text-white">
            <X size={28} />
          </button>
          <img
            src={`/images/categories/${lightbox.file}`}
            alt={lightbox.title}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
