import { Link } from 'react-router-dom'

interface SidebarLinkProps {
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >
  title: string
  active: boolean
}

const SidebarLink = ({ Icon, title, active }: SidebarLinkProps) => {
  return (
    <Link
      to={`/${title.toLowerCase()}`}
      className="flex flex-row items-center gap-[15px] max-w-fit px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300"
    >
      <Icon className="w-7 h-7" />
      <p className={active ? 'text-lg font-bold' : 'text-lg'}>{title}</p>
    </Link>
  )
}

export default SidebarLink
