/* eslint-disable import/no-extraneous-dependencies */
import { useLocation } from 'react-router-dom'
import { HomeIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline'
import SidebarLink from './SidebarLink'

const Sidebar = () => {
  const { pathname } = useLocation()

  return (
    <aside className="col-span-2 flex flex-row justify-end">
      <div className="p-[10px]">
        <h1 className="font-chakra text-4xl px-4 mb-[20px]">snippet.</h1>
        <nav className="flex flex-col gap-[5px]">
          <SidebarLink
            Icon={HomeIcon}
            title="Home"
            active={pathname === '/home'}
          />
          <SidebarLink
            Icon={UserIcon}
            title="Profile"
            active={pathname === '/profile'}
          />
          <SidebarLink
            Icon={BellIcon}
            title="Notifications"
            active={pathname === '/notifications'}
          />
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
