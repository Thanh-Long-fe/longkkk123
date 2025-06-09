// src/layouts/AdminLayout.tsx
import { Outlet, Link } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-200 p-4 h-screen">
        <nav className="flex flex-col gap-2">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/users">Người dùng</Link>
        </nav>
      </aside>

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  )
}
