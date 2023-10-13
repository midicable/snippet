/* eslint-disable import/no-extraneous-dependencies */
import { HomeIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline'
import SidebarLink from './SidebarLink'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <aside className="col-span-2 flex flex-row justify-end">
      <div className="p-[10px]">
        <h1 className="font-chakra text-4xl px-4 mb-[20px]">snippet.</h1>
        <nav className="flex flex-col gap-[5px]">
          <SidebarLink Icon={HomeIcon} title="Home" />
          <SidebarLink Icon={BellIcon} title="Notifications" />
          <SidebarLink Icon={UserIcon} title="Profile" />
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
