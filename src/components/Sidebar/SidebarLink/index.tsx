import { Link } from 'react-router-dom'
import './sidebarLink.scss'

interface SidebarLinkProps {
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >
  title: string
}

const SidebarLink = ({ Icon, title }: SidebarLinkProps) => {
  return (
    <Link
      to="/"
      className="flex flex-row items-center gap-[15px] max-w-fit px-4 py-3 rounded-full hover:bg-gray-200 transition-all duration-300"
    >
      <Icon className="w-7 h-7" />
      <p className="text-xl">{title}</p>
    </Link>
  )
}

export default SidebarLink
