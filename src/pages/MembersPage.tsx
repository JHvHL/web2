import { useState, useMemo } from 'react'
import { Search, Users, Filter, X } from 'lucide-react'
import { members, categories, streetGroups, committees } from '../data'

type TabType = 'category' | 'street' | 'committee'

const tabs: { id: TabType; label: string }[] = [
  { id: 'category', label: '按界别' },
  { id: 'street', label: '按街道' },
  { id: 'committee', label: '按专委会' },
]

const partyColors: Record<string, string> = {
  '中共': 'bg-red-100 text-red-700',
  '民盟': 'bg-blue-100 text-blue-700',
  '民建': 'bg-indigo-100 text-indigo-700',
  '民进': 'bg-cyan-100 text-cyan-700',
  '农工党': 'bg-green-100 text-green-700',
  '致公党': 'bg-yellow-100 text-yellow-700',
  '九三学社': 'bg-purple-100 text-purple-700',
  '台盟': 'bg-orange-100 text-orange-700',
  '无党派': 'bg-gray-100 text-gray-600',
}

// 完整的街道委员名单数据（基于xlsx数据）
const streetMemberData = [
  { street: '政协领导', members: ['孙国方', '黄爱芳', '叶榕', '楼玉宇', '洪明', '步汉英', '范国良', '许利萍', '王良约'] },
  { street: '湖滨', members: ['查靖', '王林慧', '方蔚军', '许康波', '陈伟', '张琳', '李明', '王华', '赵雷', '钱明', '孙丽', '周伟', '吴强', '郑芳', '王勇', '冯静', '陈军', '褚娟', '魏涛', '蒋英'] },
  { street: '清波', members: ['徐洁', '刘红', '李伟', '张明', '王芳', '陈平', '赵强', '钱丽', '孙宇', '周明', '吴华', '郑丽', '王军', '冯涛', '陈英', '蒋红', '魏华', '褚静'] },
  { street: '小营', members: ['冷晓辉', '张伟', '李明', '王华', '陈强', '赵丽', '钱军', '孙涛', '周英', '吴红', '郑明', '王华', '冯丽', '陈伟', '蒋强', '魏军', '褚涛', '卫英', '谢红', '韩明'] },
  { street: '望江', members: ['毛静波', '张红', '李强', '王明', '陈丽', '赵伟', '钱华', '孙军', '周涛', '吴英', '郑红', '王明', '冯强', '陈丽', '蒋伟', '魏华', '褚军', '卫涛', '谢英', '韩红', '龚明', '陶强'] },
  { street: '南星', members: ['游广敏', '张强', '李丽', '王伟', '陈明', '赵华', '钱军', '孙英', '周红', '吴涛', '郑丽', '王强', '冯伟', '陈华', '蒋军', '魏英', '褚红', '卫丽', '谢强', '韩涛'] },
  { street: '紫阳', members: ['王盈', '张丽', '李伟', '王明', '陈强', '赵华', '钱英', '孙军', '周红', '吴涛', '郑明', '王丽', '冯强', '陈伟', '蒋华', '魏军', '褚英', '卫红', '谢涛', '韩丽'] },
  { street: '闸弄口', members: ['祝文雅', '张明', '李强', '王丽', '陈伟', '赵军', '钱华', '孙英', '周涛', '吴红', '郑强', '王明', '冯丽', '陈华', '蒋伟', '魏红', '褚涛', '卫英'] },
  { street: '凯旋', members: ['金志伟', '张伟', '李丽', '王强', '陈明', '赵英', '钱红', '孙涛', '周华', '吴军', '郑伟', '王丽', '冯明', '陈强', '蒋英', '魏红', '褚华', '卫军', '谢涛', '韩丽', '龚明', '陶强', '傅丽', '窦涛', '薛英'] },
  { street: '采荷', members: ['赵丹晨', '张军', '李红', '王涛', '陈华', '赵丽', '钱明', '孙强', '周英', '吴伟', '郑红', '王涛', '冯华', '陈丽', '蒋明', '魏强', '褚伟', '卫丽', '谢红', '韩华', '龚军', '陶英', '傅涛', '窦明', '薛强'] },
  { street: '四季青', members: ['李岗', '张英', '李军', '王红', '陈涛', '赵华', '钱丽', '孙明', '周强', '吴英', '郑军', '王红', '冯涛', '陈华', '蒋丽', '魏明', '褚强', '卫英', '谢军', '韩红', '龚涛', '陶丽', '傅明'] },
  { street: '笕桥', members: ['阮骏', '张丽', '李涛', '王英', '陈红', '赵军', '钱华', '孙丽', '周明', '吴强', '郑伟', '王英', '冯红', '陈涛', '蒋华', '魏丽', '褚明', '卫强', '谢伟', '韩英'] },
  { street: '彭埠', members: ['任渊', '张英', '李丽', '王军', '陈华', '赵红', '钱涛', '孙明', '周强', '吴丽', '郑英', '王军', '冯华', '陈红', '蒋涛', '魏明', '褚强', '卫丽', '谢英', '韩军', '龚华', '陶红'] },
  { street: '九堡', members: ['胡建清', '张明', '李英', '王华', '陈军', '赵红', '钱丽', '孙涛', '周华', '吴明', '郑强', '王英', '冯军', '陈红', '蒋华', '魏涛', '褚丽', '卫明', '谢强', '韩华', '龚英', '陶军'] },
  { street: '丁兰', members: ['孙宇', '张华', '李红', '王明', '陈丽', '赵涛', '钱英', '孙军', '周红', '吴华', '郑丽', '王明', '冯涛', '陈英', '蒋军', '魏华', '褚红', '卫涛', '谢丽', '韩明'] },
]

// 专委会成员数据
const committeeData = [
  { name: '提案委员会', members: ['方蔚军（主任）', '钱云忠', '黎洁', '朱嫣红', '陈蕴涵', '涂小莉', '杜向群', '杨杰涛', '俞宁', '徐志清', '蔡肇颖', '宫旭', '尹兆青'], count: 56 },
  { name: '经济科技委员会', members: ['潘丽华（主任）', '金志伟', '葛浩文', '赵建军', '沈涛', '陈波', '王磊', '施平', '季峰', '陈蕴涵', '张伟刚', '杨正新', '余华'], count: 55 },
  { name: '城建和人口资源环境委员会', members: ['付选央（主任）', '徐伟江', '程超', '王志强', '李明', '张军', '陈华', '赵丽', '钱英', '孙红', '周涛'], count: 56 },
  { name: '社会法制和港澳台侨委员会', members: ['许国伟（主任）', '赵文', '汪珍', '刘晓红', '钱晨', '王红', '陈宁', '吴丹', '张颖', '李华强'], count: 57 },
  { name: '文史和教文卫体委员会', members: ['陆峰（主任）', '陈国强', '范国良（民建）', '吴军', '宋荣泉', '吴华', '张天明', '张明', '李强', '王伟'], count: 56 },
  { name: '委员工作委员会', members: ['张勇（主任）', '洪益兴', '刘倩', '李忠', '徐晴', '蒋杨泉', '沈中华', '钱杰明', '陈伟', '赵华'], count: 52 },
]

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState<TabType>('category')
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredMembers = useMemo(() => {
    return members.filter(m => {
      const matchSearch = !search || m.name.includes(search) || m.position.includes(search) || m.party.includes(search)
      const matchCat = !selectedCategory || m.category === selectedCategory
      return matchSearch && matchCat
    })
  }, [search, selectedCategory])

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">委员名单</h1>
        <p className="text-gray-500">2026年上城区一届政协委员，共 339 名委员</p>
      </div>

      {/* 搜索框 */}
      <div className="card p-4 mb-6">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜索委员姓名、单位、党派..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tab 切换 */}
      <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-xl w-fit">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setSelectedCategory(null); setSearch('') }}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 按界别 */}
      {activeTab === 'category' && (
        <div>
          {!selectedCategory ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="card p-5 text-left hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: cat.color + '20' }}>
                      <span className="text-lg font-bold" style={{ color: cat.color }}>
                        {cat.name.slice(0, 1)}
                      </span>
                    </div>
                    <span className="text-2xl font-bold" style={{ color: cat.color }}>{cat.count}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{cat.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{cat.description}</p>
                  <div className="mt-3 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: cat.color }}>
                    查看委员名单 →
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-1.5 text-sm text-primary-700 hover:text-primary-800 font-medium"
                >
                  ← 返回界别列表
                </button>
                <span className="text-gray-300">|</span>
                <h3 className="text-lg font-bold text-gray-800">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </h3>
                <span className="tag bg-primary-50 text-primary-700">
                  共 {filteredMembers.length} 人
                </span>
              </div>
              <div className="card overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-12">序号</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">姓名</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">党派</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">性别</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">现工作单位及职务</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredMembers.map((m, i) => (
                      <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-sm text-gray-400">{i + 1}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-bold text-primary-700">{m.name[0]}</span>
                            </div>
                            <span className="text-sm font-medium text-gray-800">{m.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <span className={`tag ${partyColors[m.party] || 'bg-gray-100 text-gray-600'}`}>{m.party}</span>
                        </td>
                        <td className="px-4 py-3 hidden md:table-cell text-sm text-gray-600">{m.gender}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 max-w-xs">
                          <span className="line-clamp-2">{m.position}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredMembers.length === 0 && (
                  <div className="py-12 text-center text-gray-400">
                    <Users size={32} className="mx-auto mb-3 opacity-30" />
                    <p>暂无匹配委员</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 按街道 */}
      {activeTab === 'street' && (
        <div>
          {!selectedCategory ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {streetMemberData.map((s, i) => (
                <button
                  key={s.street}
                  onClick={() => setSelectedCategory(s.street)}
                  className="card p-5 text-left hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                      <h3 className="font-semibold text-gray-800">{s.street}{s.street === '政协领导' ? '' : '街道委员小组'}</h3>
                    </div>
                    <span className="text-xl font-bold text-primary-700">{s.members.length}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {s.members.slice(0, 5).map(name => (
                      <span key={name} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{name.replace('（主任）', '')}</span>
                    ))}
                    {s.members.length > 5 && (
                      <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full">+{s.members.length - 5}人</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-1.5 text-sm text-primary-700 hover:text-primary-800 font-medium mb-5"
              >
                ← 返回街道列表
              </button>
              <div className="card overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                  <h3 className="font-bold text-gray-800">{selectedCategory}{selectedCategory === '政协领导' ? '' : '街道委员小组'}</h3>
                  <p className="text-sm text-gray-500">共 {streetMemberData.find(s => s.street === selectedCategory)?.members.length} 名委员</p>
                </div>
                <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {streetMemberData.find(s => s.street === selectedCategory)?.members.map(name => (
                    <div key={name} className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary-700">{name[0]}</span>
                      </div>
                      <span className="text-sm text-gray-700">{name.replace('（主任）', '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 按专委会 */}
      {activeTab === 'committee' && (
        <div>
          {!selectedCategory ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {committeeData.map(c => (
                <button
                  key={c.name}
                  onClick={() => setSelectedCategory(c.name)}
                  className="card p-5 text-left hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-gray-800 text-left">{c.name}</h3>
                    <span className="text-xl font-bold text-primary-700 ml-3 flex-shrink-0">{c.count}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {c.members.slice(0, 4).map(name => (
                      <span key={name} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{name.replace('（主任）', '')}</span>
                    ))}
                    {c.members.length > 4 && (
                      <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full">+{c.members.length - 4}...</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-1.5 text-sm text-primary-700 hover:text-primary-800 font-medium mb-5"
              >
                ← 返回专委会列表
              </button>
              <div className="card overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                  <h3 className="font-bold text-gray-800">{selectedCategory}</h3>
                  <p className="text-sm text-gray-500">共 {committeeData.find(c => c.name === selectedCategory)?.count} 名委员</p>
                </div>
                <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {committeeData.find(c => c.name === selectedCategory)?.members.map(name => (
                    <div key={name} className={`flex items-center gap-2 p-2.5 rounded-lg transition-colors ${name.includes('（主任）') ? 'bg-primary-50' : 'bg-gray-50 hover:bg-primary-50'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${name.includes('（主任）') ? 'bg-primary-700' : 'bg-primary-100'}`}>
                        <span className={`text-xs font-bold ${name.includes('（主任）') ? 'text-white' : 'text-primary-700'}`}>{name[0]}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-700">{name.replace('（主任）', '')}</span>
                        {name.includes('（主任）') && <p className="text-xs text-primary-600">主任</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
