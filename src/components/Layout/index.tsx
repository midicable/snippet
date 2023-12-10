import { PropsWithChildren } from 'react'
import Sidebar from '../Sidebar'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full grid grid-cols-[31%_31%_38%]">
      <Sidebar />
      <main className="min-h-screen border border-solid border-gray-100">
        {children}
      </main>
      <div>
        <div className="fixed top-0">additional content</div>
      </div>
    </div>
  )
}

export default Layout
