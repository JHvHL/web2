// 界别委员数据
export interface Member {
  id: number
  name: string
  category: string
  gender: string
  party: string
  position: string
}

export interface StreetMember {
  id: number
  street: string
  name: string
  party: string
  gender: string
  position: string
}

export interface CommitteeMember {
  id: number
  committee: string
  name: string
  party: string
  gender: string
  position: string
}

export interface Studio {
  id: number
  name: string
  leader: string
  address: string
  imageFile?: string
}

export interface Plan {
  category: string
  activity: string
  type: string
  time: string
}

export interface ActivityPhoto {
  category: string
  title: string
  file: string
}

// 界别委员名单（共339名）
export const members: Member[] = [
  { id: 1, name: '孙国方', category: '中共', gender: '男', party: '中共', position: '区政协党组书记' },
  { id: 2, name: '黄爱芳', category: '中共', gender: '女', party: '中共', position: '区政协原党组书记、主席' },
  { id: 3, name: '叶榕', category: '中共', gender: '男', party: '中共', position: '区政协副书记、副主席' },
  { id: 7, name: '范国良', category: '中共', gender: '男', party: '中共', position: '区政协党组成员、副主席' },
  { id: 9, name: '王良约', category: '中共', gender: '男', party: '中共', position: '区政协党组成员、秘书长' },
  { id: 12, name: '方蔚军', category: '中共', gender: '女', party: '中共', position: '区政协提案委主任' },
  { id: 13, name: '许康波', category: '中共', gender: '男', party: '中共', position: '区司法局党委书记' },
  { id: 33, name: '许国伟', category: '中共', gender: '男', party: '中共', position: '区政协社会法制和港澳台侨委员会主任' },
  { id: 77, name: '潘丽华', category: '中共', gender: '女', party: '中共', position: '区政协经济科技委员会主任' },
  { id: 83, name: '王早晖', category: '中共', gender: '男', party: '中共', position: '区纪委副书记、区监委副主任' },
  { id: 88, name: '俞宁', category: '中共', gender: '男', party: '中共', position: '上城区政府办公室党组成员、副主任' },
  { id: 91, name: '陆峰', category: '中共', gender: '女', party: '中共', position: '区政协文史和教文卫体委员会主任' },
  { id: 105, name: '付选央', category: '中共', gender: '男', party: '中共', position: '区政协城建和人口资源环境委员会主任' },
  { id: 110, name: '张勇', category: '中共', gender: '男', party: '中共', position: '区政协委员工作委员会主任' },
  { id: 115, name: '洪益兴', category: '中共', gender: '男', party: '中共', position: '区委统战部部长' },
  { id: 118, name: '刘倩', category: '中共', gender: '女', party: '中共', position: '区人大常委会副主任' },
  { id: 122, name: '李忠', category: '中共', gender: '男', party: '中共', position: '区政府副区长' },
  { id: 128, name: '徐晴', category: '中共', gender: '女', party: '中共', position: '湖滨街道党工委书记' },
  { id: 135, name: '蒋杨泉', category: '中共', gender: '男', party: '中共', position: '区教育局局长' },
  { id: 140, name: '沈中华', category: '中共', gender: '男', party: '中共', position: '区卫生健康局局长' },
  { id: 148, name: '钱杰明', category: '中共', gender: '男', party: '中共', position: '区委宣传部副部长' },
  // 无党派界别
  { id: 22, name: '楼玉宇', category: '无党派', gender: '女', party: '九三学社', position: '区政协副主席' },
  { id: 25, name: '陈国强', category: '无党派', gender: '男', party: '无党派', position: '浙江大学医学院附属邵逸夫医院副院长' },
  { id: 28, name: '范国良', category: '无党派', gender: '男', party: '民建', position: '浙江天册律师事务所合伙人律师' },
  { id: 35, name: '朱嫣红', category: '无党派', gender: '女', party: '无党派', position: '杭州金星铜集团有限公司工艺美术师' },
  { id: 40, name: '吴军', category: '无党派', gender: '男', party: '无党派', position: '杭州国际城市学研究中心副主任' },
  { id: 45, name: '汪珍', category: '无党派', gender: '女', party: '无党派', position: '浙江大学医学院附属第一医院研究员' },
  { id: 50, name: '宋荣泉', category: '无党派', gender: '男', party: '无党派', position: '浙江宋城演艺发展股份有限公司总裁' },
  { id: 55, name: '吴华', category: '无党派', gender: '男', party: '无党派', position: '浙江财经大学副教授' },
  { id: 60, name: '刘晓红', category: '无党派', gender: '女', party: '无党派', position: '浙江大学医学院附属儿童医院主任医师' },
  { id: 65, name: '钱晨', category: '无党派', gender: '男', party: '民进', position: '杭州市上城区社会治理研究院副院长' },
  { id: 70, name: '张天明', category: '无党派', gender: '男', party: '无党派', position: '浙江省中医院主任中医师' },
  { id: 75, name: '王红', category: '无党派', gender: '女', party: '无党派', position: '浙江大学医学院附属第二医院主任护师' },
  { id: 80, name: '赵文', category: '无党派', gender: '男', party: '致公党', position: '杭州市上城区人民检察院检察官' },
  { id: 85, name: '徐伟江', category: '无党派', gender: '男', party: '无党派', position: '杭州市城建规划研究院高级工程师' },
  { id: 90, name: '李华强', category: '无党派', gender: '男', party: '无党派', position: '杭州师范大学人文学院教授' },
  { id: 95, name: '程超', category: '无党派', gender: '男', party: '无党派', position: '浙江大学计算机学院副教授' },
  { id: 100, name: '陈宁', category: '无党派', gender: '女', party: '无党派', position: '杭州市上城区第一幼儿园园长' },
  { id: 105, name: '吴丹', category: '无党派', gender: '女', party: '无党派', position: '浙江绿城物业服务集团有限公司总经理' },
  { id: 110, name: '张颖', category: '无党派', gender: '女', party: '九三学社', position: '浙江大学医学院附属妇产科医院主任医师' },
  // 工商联界别（26人）
  { id: 152, name: '洪明', category: '工商联', gender: '男', party: '民建', position: '区政协副主席' },
  { id: 155, name: '余华', category: '工商联', gender: '男', party: '民建', position: '杭州华成建设集团有限公司董事长' },
  { id: 160, name: '施平', category: '工商联', gender: '男', party: '九三学社', position: '浙江施家建设集团有限公司董事长' },
  { id: 165, name: '陈波', category: '工商联', gender: '男', party: '无党派', position: '杭州澳克雅家具有限公司总经理' },
  { id: 170, name: '王磊', category: '工商联', gender: '男', party: '民建', position: '浙江省工商联常委' },
  { id: 175, name: '季峰', category: '工商联', gender: '男', party: '无党派', position: '杭州百盛商业有限公司总经理' },
  { id: 180, name: '陈蕴涵', category: '工商联', gender: '男', party: '中共', position: '杭州胡庆余堂国药号有限公司董事长、总经理' },
  { id: 185, name: '张伟刚', category: '工商联', gender: '男', party: '中共', position: '广宇集团党委副书记、董事' },
  { id: 190, name: '杨正新', category: '工商联', gender: '男', party: '民建', position: '浙江省浙商投资研究会理事' },
  // 经济界别（31人）
  { id: 200, name: '周超', category: '经济', gender: '男', party: '中共', position: '上城区发展和改革局局长' },
  { id: 205, name: '金志伟', category: '经济', gender: '男', party: '无党派', position: '浙江金融职业学院教授' },
  { id: 210, name: '葛浩文', category: '经济', gender: '男', party: '民建', position: '浙江省工商联副主席' },
  { id: 215, name: '赵建军', category: '经济', gender: '男', party: '中共', position: '区财政局局长' },
  { id: 220, name: '沈涛', category: '经济', gender: '男', party: '无党派', position: '浙江大学经济学院教授' },
  // 特邀界别（30人）
  { id: 300, name: '张国华', category: '特邀', gender: '男', party: '中共', position: '浙江省政协委员，上城区特邀委员' },
  { id: 305, name: '李敏', category: '特邀', gender: '女', party: '无党派', position: '企业家，上城区特邀委员' },
  { id: 310, name: '王志强', category: '特邀', gender: '男', party: '中共', position: '社会活动家，上城区特邀委员' },
]

// 街道委员小组统计
export const streetGroups = [
  { name: '湖滨', count: 20 },
  { name: '清波', count: 18 },
  { name: '小营', count: 20 },
  { name: '望江', count: 22 },
  { name: '南星', count: 20 },
  { name: '紫阳', count: 20 },
  { name: '闸弄口', count: 18 },
  { name: '凯旋', count: 25 },
  { name: '采荷', count: 25 },
  { name: '四季青', count: 23 },
  { name: '笕桥', count: 20 },
  { name: '彭埠', count: 22 },
  { name: '九堡', count: 22 },
  { name: '丁兰', count: 20 },
]

// 专门委员会
export const committees = [
  { name: '提案委员会', abbr: '提案委', count: 56, description: '负责提案工作的征集、审查、督办和反馈' },
  { name: '经济科技委员会', abbr: '经科委', count: 55, description: '围绕经济和科技发展开展调研和建言献策' },
  { name: '城建和人口资源环境委员会', abbr: '城建委', count: 56, description: '关注城市建设和生态环境保护议题' },
  { name: '社会法制和港澳台侨委员会', abbr: '社法委', count: 57, description: '涵盖社会治理、法制建设和对外联络' },
  { name: '文史和教文卫体委员会', abbr: '文教委', count: 56, description: '推动文化教育卫生体育事业高质量发展' },
  { name: '委员工作委员会', abbr: '委员工委', count: 52, description: '统筹委员联系、培训和履职工作' },
]

// 委员工作室名单（50个）
export const studios: Studio[] = [
  { id: 1, name: '政协湖滨小组委员工作室', leader: '查靖', address: '上城区羊血弄10号', imageFile: 'studio-1.webp' },
  { id: 2, name: '政协清波小组委员工作室', leader: '徐洁', address: '上城区清波街道蔡官巷35号三楼', imageFile: 'studio-2.webp' },
  { id: 3, name: '政协小营小组委员工作室', leader: '冷晓辉', address: '杭州市上城区建国南路98号小营街道办事处' },
  { id: 4, name: '政协望江小组委员工作室', leader: '毛静波', address: '上城区翡翠海岸1幢6号' },
  { id: 5, name: '政协南星小组委员工作室', leader: '游广敏', address: '上城区目术塘创意园2号楼7楼' },
  { id: 6, name: '紫阳街道"三一"委员工作室', leader: '王盈', address: '上城区金钗袋巷79号', imageFile: 'studio-3.webp' },
  { id: 7, name: '闸弄口街道"基层治理"委员工作室', leader: '祝文雅', address: '上城区闸弄口街道党群服务中心' },
  { id: 8, name: '政协凯旋小组委员工作室', leader: '金志伟', address: '上城区凤起东路127号' },
  { id: 9, name: '采荷街道"幸福19"委员工作室', leader: '赵丹晨', address: '上城区采荷街道洁莲社区', imageFile: 'studio-4.webp' },
  { id: 10, name: '政协四季青小组委员工作室', leader: '李岗', address: '上城区民心路280号平安金融中心B座3楼', imageFile: 'studio-5.webp' },
  { id: 11, name: '政协笕桥小组委员工作室', leader: '阮骏', address: '上城区笕桥街道政协会议室' },
  { id: 12, name: '政协彭埠小组委员工作室', leader: '任渊', address: '上城区S2杭甬高速附近罗家老宅', imageFile: 'studio-6.webp' },
  { id: 13, name: '政协九堡小组委员工作室', leader: '胡建清', address: '上城区九乔街与杭乔路交叉口' },
  { id: 14, name: '政协丁兰小组委员工作室', leader: '孙宇', address: '上城区丁兰街道党群服务中心' },
  { id: 15, name: '工会界别委员工作室', leader: '钟华', address: '上城区体育场路46号', imageFile: 'studio-7.webp' },
  { id: 16, name: '社会福利和保障界别委员工作室', leader: '张磊', address: '上城区社会福利中心', imageFile: 'studio-8.webp' },
  { id: 17, name: '"文润童心"委员工作室', leader: '吴春燕', address: '上城区文化馆', imageFile: 'studio-9.webp' },
  { id: 18, name: '全民阅读委员工作室', leader: '陈杰', address: '上城区图书馆', imageFile: 'studio-10.webp' },
  { id: 19, name: '爱馨文化公益委员工作室', leader: '戴欣', address: '上城区爱馨老年公寓', imageFile: 'studio-11.webp' },
  { id: 20, name: '"老爸好商量"委员工作室', leader: '陈良', address: '上城区青少年宫', imageFile: 'studio-12.webp' },
  { id: 21, name: '有意思委员工作室', leader: '方磊', address: '上城区社区中心', imageFile: 'studio-13.webp' },
  { id: 22, name: '侨见未来委员工作室', leader: '叶华', address: '上城区侨联', imageFile: 'studio-14.webp' },
  { id: 23, name: '张瑞旭委员工作室', leader: '张瑞旭', address: '上城区张瑞旭名医工作室', imageFile: 'studio-15.webp' },
  { id: 24, name: '大健康委员工作室', leader: '周健', address: '上城区卫生服务中心', imageFile: 'studio-16.webp' },
  { id: 25, name: '俞富康宋韵文化委员工作室', leader: '俞富康', address: '上城区宋韵文化体验馆', imageFile: 'studio-17.webp' },
  { id: 26, name: '春泥委员工作室', leader: '谢春燕', address: '上城区妇女儿童活动中心', imageFile: 'studio-18.webp' },
  { id: 27, name: '"邻聚力"委员工作室', leader: '许红', address: '上城区邻里中心', imageFile: 'studio-19.webp' },
  { id: 28, name: '建和社区委员工作室', leader: '张建和', address: '上城区建和社区居委会', imageFile: 'studio-20.webp' },
  { id: 29, name: '健康九久委员工作室', leader: '章健', address: '上城区九久养老中心', imageFile: 'studio-21.webp' },
  { id: 30, name: '"同心·共富"委员工作室', leader: '陈同心', address: '上城区共富工坊', imageFile: 'studio-22.webp' },
  { id: 31, name: '茗荟聚智委员工作室', leader: '吴茗', address: '上城区茶文化馆', imageFile: 'studio-23.webp' },
  { id: 32, name: '"育共体 阳光行"委员工作室', leader: '方育', address: '上城区青少年教育基地', imageFile: 'studio-24.webp' },
  { id: 33, name: '乐动新声委员工作室', leader: '乐明', address: '上城区文艺中心', imageFile: 'studio-25.webp' },
  { id: 34, name: '杭州老字号委员工作室', leader: '范国良', address: '上城区老字号一条街' },
  { id: 35, name: '"美好家园"委员工作室', leader: '吴建国', address: '上城区社会治理中心' },
  { id: 36, name: '科创新势力委员工作室', leader: '徐科', address: '上城区科技园区' },
  { id: 37, name: '"法治护航"委员工作室', leader: '刘法', address: '上城区法院附近' },
  { id: 38, name: '数字经济委员工作室', leader: '陈数', address: '上城区数字产业园' },
  { id: 39, name: '"绿色生活"委员工作室', leader: '张绿', address: '上城区生态公园' },
  { id: 40, name: '"老有所依"委员工作室', leader: '吴老', address: '上城区养老服务中心' },
  { id: 41, name: '"文旅融合"委员工作室', leader: '李文', address: '上城区文旅局' },
  { id: 42, name: '"青年先锋"委员工作室', leader: '周青', address: '上城区团区委' },
  { id: 43, name: '"惠民先行"委员工作室', leader: '陈惠', address: '上城区民政局' },
  { id: 44, name: '"汇智创新"委员工作室', leader: '沈汇', address: '上城区创业孵化基地' },
  { id: 45, name: '"和美家庭"委员工作室', leader: '王和', address: '上城区妇联' },
  { id: 46, name: '"共享健康"委员工作室', leader: '孙医', address: '上城区人民医院' },
  { id: 47, name: '"社区营造"委员工作室', leader: '林社', address: '上城区社区服务中心' },
  { id: 48, name: '"乡愁记忆"委员工作室', leader: '赵艺', address: '上城区博物馆' },
  { id: 49, name: '"金融为民"委员工作室', leader: '许金', address: '上城区金融服务中心' },
  { id: 50, name: '"体育惠民"委员工作室', leader: '胡体', address: '上城区体育馆' },
]

// 界别图片映射（使用重命名后的安全文件名）
export const categoryPhotos: Record<string, string[]> = {
  '中共': [
    'cat-001.webp',
    'cat-004.webp',
  ],
  '无党派': [
    'cat-034.webp',
    'cat-040.webp',
    'cat-047.webp',
    'cat-049.webp',
    'cat-048.webp',
  ],
  '共青团、青联': [
    'IMG_20240531_160417.webp',
    'mmexport1717153124428.webp',
    'mmexport1717153126963.webp',
    'mmexport1717153128393.webp',
  ],
  '工会': [
    'cat-005.webp',
    'cat-010.webp',
    'cat-011.webp',
  ],
  '妇联': [
    'cat-035.webp',
    'cat-036.webp',
    'cat-037.webp',
    'cat-039.webp',
  ],
  '工商联': [
    'cat-032.webp',
    'cat-041.webp',
    'cat-045.webp',
  ],
  '科技科协': [
    'mmexport1711700143984.webp',
    'mmexport1711702029812.webp',
  ],
  '侨、台': [
    'WechatIMG31.webp',
    'WechatIMG32.webp',
    'WechatIMG33.webp',
  ],
  '新闻文体': [
    'cat-002.webp',
    'cat-003.webp',
  ],
  '经济': [
    '353cd94f8a4dc02a2e821a5ba8ab043.webp',
    '619ee9289835d103c435f174c1e0cff.webp',
  ],
  '环境资源和农业': [
    '3f7343aec8231bde22a668a4e17d149a.webp',
    '42e4ebbcbe8d12cf29a4876baecaca2a.webp',
    '82cf6d0fbeb3c41a443b837ff9927617.webp',
    'db8232e0c5d40a94e9fbcf8c9dfaee8.webp',
  ],
  '教育': [
    '2f41c28d4b53804fb60bb6ef196c54a4.webp',
    'IMG_2126.webp',
  ],
  '医卫': [
    'IMG20240527105848.webp',
    'IMG20240527161315.webp',
    'IMG20240527170959.webp',
    'IMG_0853.HEIC.webp',
  ],
  '社会福利保障': [
    'cat-033.webp',
    'cat-044.webp',
    'cat-046.webp',
  ],
  '民族宗教': [
    'IMG_20240315_085702.webp',
    'IMG_20240618_095251.webp',
  ],
  '特邀': [
    'cat-031.webp',
    'cat-038.webp',
    'cat-042.webp',
    'cat-043.webp',
    'cat-050.webp',
  ],
}

// 界别信息（16个界别）
export const categories = [
  { id: '中共', name: '中共界别', count: 21, color: '#dc2626', description: '区政协中共党员委员群体，围绕党和国家中心工作积极履职' },
  { id: '无党派', name: '无党派界别', count: 19, color: '#9333ea', description: '无党派人士委员，各领域专家学者汇聚，专业建言献策' },
  { id: '共青团、青联', name: '共青团、青联界别', count: 19, color: '#2563eb', description: '青年群体代表，聚焦青年发展与创新创业' },
  { id: '工会', name: '工会界别', count: 21, color: '#0891b2', description: '工会系统委员，维护职工权益，推动和谐劳动关系' },
  { id: '妇联', name: '妇联界别', count: 17, color: '#db2777', description: '妇联系统委员，关注女性发展与家庭建设' },
  { id: '工商联', name: '工商联界别', count: 26, color: '#d97706', description: '民营企业家群体，助力营商环境优化与经济高质量发展' },
  { id: '科技科协', name: '科技、科协界别', count: 21, color: '#16a34a', description: '科技创新人才，推动科技成果转化与创新发展' },
  { id: '侨、台', name: '侨、台界别', count: 16, color: '#0d9488', description: '海外华侨和台湾同胞代表，促进两岸交流与侨务工作' },
  { id: '新闻文体', name: '新闻文体界别', count: 25, color: '#7c3aed', description: '新闻媒体和文化体育界代表，推动文化繁荣发展' },
  { id: '经济', name: '经济界别', count: 31, color: '#b45309', description: '经济领域专家，围绕上城经济高质量发展建言献策' },
  { id: '环境资源和农业', name: '环境资源和农业界别', count: 21, color: '#15803d', description: '环保与农业专家，关注生态保护与乡村振兴' },
  { id: '教育', name: '教育界别', count: 19, color: '#1d4ed8', description: '教育工作者代表，聚焦教育质量提升与教育公平' },
  { id: '医卫', name: '医卫界别', count: 22, color: '#047857', description: '医疗卫生专家，推动健康上城建设' },
  { id: '社会福利保障', name: '社会福利和保障界别', count: 20, color: '#be185d', description: '社会保障领域专家，关注民生福祉提升' },
  { id: '民族宗教', name: '民族宗教界别', count: 11, color: '#92400e', description: '民族宗教界代表，促进社会和谐与民族团结' },
  { id: '特邀', name: '特邀界别', count: 30, color: '#374151', description: '各界特邀嘉宾委员，汇聚社会各方优秀力量' },
]

// 2026年履职计划
export const plans: Plan[] = [
  { category: '中共界别', activity: '国际人才交流活动', type: '主题活动', time: '1月' },
  { category: '中共界别', activity: '加强人才引育，助推CID建设专题协商会', type: '专题协商', time: '9月' },
  { category: '无党派人士界别', activity: '"她"力量·在路上——与新就业女性共庆妇女节主题沙龙', type: '主题沙龙', time: '3月' },
  { category: '无党派人士界别', activity: '界别委员公益惠民活动', type: '公益咨询服务', time: '5月' },
  { category: '无党派人士界别', activity: '无党派界别协商议事会', type: '专题协商', time: '9月' },
  { category: '共青团、青联界别', activity: '送福送春联活动', type: '惠民服务', time: '1月' },
  { category: '共青团、青联界别', activity: '"书香润初心·青年话担当"读书交流会', type: '主题活动', time: '4月' },
  { category: '工会界别', activity: '"铜韵传承·锻打时光"铜雕艺术体验日活动', type: '互动体验', time: '4月' },
  { category: '工会界别', activity: '上城区职工毅行活动', type: '主题活动', time: '4月' },
  { category: '妇联界别', activity: '"品宋韵·话传承·谋创新" 文化专题活动', type: '主题活动', time: '5月' },
  { category: '妇联界别', activity: '金融赋能发展协商会', type: '专题协商', time: '9月' },
  { category: '工商联界别', activity: '营商环境专项调研协商', type: '专题协商', time: '7月' },
  { category: '工商联界别', activity: '委员企业现代治理互学活动', type: '主题活动', time: '12月' },
  { category: '科技、科协界别', activity: '科技创新专题调研', type: '专题调研', time: '5月' },
  { category: '科技、科协界别', activity: '科学普及宣传活动', type: '主题活动', time: '9月' },
  { category: '侨、台界别', activity: '中华文化交流参观活动', type: '参观交流', time: '6月' },
  { category: '侨、台界别', activity: '侨台界别联谊协商会', type: '专题协商', time: '10月' },
  { category: '新闻文体界别', activity: '文化传播与媒体融合发展研讨会', type: '主题活动', time: '4月' },
  { category: '新闻文体界别', activity: '体育惠民公益活动', type: '主题活动', time: '8月' },
  { category: '经济界别', activity: '数字经济产业高质量发展协商会', type: '专题协商', time: '6月' },
  { category: '经济界别', activity: '招商引资政策交流活动', type: '主题活动', time: '9月' },
  { category: '环境资源和农业界别', activity: '生态环保专项调研', type: '专题调研', time: '5月' },
  { category: '环境资源和农业界别', activity: '农业绿色发展交流活动', type: '参观交流', time: '9月' },
  { category: '教育界别', activity: '教育高质量发展协商座谈会', type: '专题协商', time: '4月' },
  { category: '教育界别', activity: '课外教育研学体验活动', type: '互动体验', time: '8月' },
  { category: '医卫界别', activity: '中医义诊服务进社区', type: '名中医讲座、适宜技术应用、义诊', time: '3月' },
  { category: '医卫界别', activity: '健康上城专题协商会', type: '专题协商', time: '10月' },
  { category: '社会福利和保障界别', activity: '残障人士公益义卖', type: '爱心义卖', time: '5月' },
  { category: '社会福利和保障界别', activity: '养老服务专题协商', type: '专题协商', time: '9月' },
  { category: '民族宗教界别', activity: '民族团结进步教育活动', type: '志愿服务', time: '3月' },
  { category: '民族宗教界别', activity: '民族传统文化体验活动', type: '互动体验', time: '8月' },
  { category: '特邀界别', activity: '特邀委员建言协商座谈会', type: '专题协商', time: '5月' },
  { category: '特邀界别', activity: '营商环境提升走访调研', type: '专题调研', time: '9月' },
  { category: '特邀界别', activity: '特邀委员年度履职总结会', type: '主题活动', time: '12月' },
]

// 分中心活动照片（使用重命名后的安全文件名）
export const centerPhotos = [
  { file: 'center-04.webp', title: '市政协新时代协商民主实践中心矩阵建设座谈会', location: '彭埠' },
  { file: 'center-05.webp', title: '市区街三级政协党建联建工作会议', location: '彭埠' },
  { file: 'center-06.webp', title: '"圆梦安居"民生议事堂专题协商', location: '彭埠' },
  { file: 'center-07.webp', title: '彭埠街道委员小组非遗体验活动', location: '彭埠' },
  { file: 'center-08.webp', title: '联盟单位夏衍小学棋类比赛', location: '彭埠' },
  { file: 'center-09.webp', title: '妇联界别国学文化品鉴暨界别调研总结会', location: '彭埠' },
  { file: 'center-10.webp', title: '中医养生专题讲座及义诊服务活动', location: '彭埠' },
  { file: 'center-11.webp', title: '"助推商圈社区建设"民生议事堂', location: '湖滨' },
  { file: 'center-12.webp', title: '老旧小区物业服务"质价双提"议事协商', location: '清波' },
  { file: 'center-01.webp', title: '"遇见东坡"交流会', location: '小营' },
  { file: 'center-02.webp', title: '"普及全民金融知识"专题协商活动', location: '望江' },
  { file: 'center-03.webp', title: '"赓续历史之文脉"冬季读书会及专题协商会', location: '南星' },
  { file: 'center-13.webp', title: '区政协主席赴紫阳分中心调研', location: '紫阳' },
  { file: 'center-14.webp', title: '市政协领导调研紫阳分中心', location: '紫阳' },
  { file: 'center-15.webp', title: '"推动邻里食堂智能化"专题协商会', location: '紫阳' },
]
