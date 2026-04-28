import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import {
  Home, Users, Grid3x3, Building2, MapPin, CalendarDays, Menu, X, ChevronRight
} from 'lucide-react'

const navItems = [
  { to: '/', label: '首页', icon: Home },
  { to: '/members', label: '委员名单', icon: Users },
  { to: '/categories', label: '界别风采', icon: Grid3x3 },
  { to: '/studios', label: '委员工作室', icon: Building2 },
  { to: '/practice-center', label: '协商民主实践', icon: MapPin },
  { to: '/plans', label: '2026履职计划', icon: CalendarDays },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const currentPage = navItems.find(n => n.to === location.pathname)?.label || '政协委员通'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 顶部导航栏 */}
      <header className="bg-primary-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-900 font-bold text-sm">政</span>
              </div>
              <div>
                <div className="font-bold text-base leading-tight">政协委员通</div>
                <div className="text-primary-200 text-xs leading-tight">杭州市上城区政协</div>
              </div>
            </div>

            {/* 桌面导航 */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'text-primary-100 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  <Icon size={15} />
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* 移动端汉堡菜单 */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {mobileOpen && (
          <div className="md:hidden border-t border-primary-700 bg-primary-800">
            <nav className="px-4 py-3 space-y-1">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'text-primary-100 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  <Icon size={18} />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* 面包屑 */}
      {location.pathname !== '/' && (
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <NavLink to="/" className="hover:text-primary-700 transition-colors">首页</NavLink>
              <ChevronRight size={14} />
              <span className="text-gray-800 font-medium">{currentPage}</span>
            </div>
          </div>
        </div>
      )}

      {/* 主内容区 */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* 底部 */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-6 bg-gold-400 rounded flex items-center justify-center">
              <span className="text-gray-900 font-bold text-xs">政</span>
            </div>
            <span className="font-semibold text-white">政协委员通</span>
          </div>
          <p className="text-sm">杭州市上城区政协委员服务平台</p>
          <p className="text-xs text-gray-500 mt-2">© 2026 杭州市上城区政协 版权所有</p>
        </div>
      </footer>
    </div>
  )
}
