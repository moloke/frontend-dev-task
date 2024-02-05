import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoE from '../../assets/images/efitter_logo.png'
import DashboardIcon from '../../assets/images/dashboard_icon.svg'
import ResultsIcon from '../../assets/images/results_icon.svg'
import DesignsIcon from '../../assets/images/designs_icon.svg'
import SetupIcon from '../../assets/images/setup_icon.svg'
import UsersIcon from '../../assets/images/users_icon.svg'
import RightChevron from '../../assets/images/right_chevron.svg'


const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoE} alt="efitter logo" />
    </Link>
    <nav>
      <NavLink exact='true' activeclassname='active' className='dashboard-link' to='/'>
        <div className='menu-logo'><img src={DashboardIcon} alt='dashboard' /></div>
        <span>Dashboard</span>
        <div className='right-chevron'><img src={RightChevron} alt=''/></div>
      </NavLink>
      <NavLink exact='true' activeclassname='active' className='results-link' to='/results'>
        <div className='menu-logo'><img src={ResultsIcon} alt='results' /></div>
        <span>Results</span>
        <div className='right-chevron'><img src={RightChevron} alt=''/></div>
      </NavLink>
      <NavLink exact='true' activeclassname='active' className='designs-link' to='/designs'>
      <div className='menu-logo'><img src={DesignsIcon} alt='designs' /></div>
        <span>Designs</span>
        <div className='right-chevron'><img src={RightChevron} alt=''/></div>
      </NavLink>
      <NavLink exact='true' activeclassname='active' className='setup-link' to='/setup'>
      <div className='menu-logo'><img src={SetupIcon} alt='setup' /></div>
        <span>Setup</span>
        <div className='right-chevron'><img src={RightChevron} alt=''/></div>
      </NavLink>
      <NavLink exact='true' activeclassname='active' className='users-link' to='/manage-users'>
      <div className='menu-logo'><img src={UsersIcon} alt='users' /></div>
        <span>Users</span>
        <div className='right-chevron'><img src={RightChevron} alt=''/></div>
      </NavLink>
    </nav>
  </div>
)

export default Sidebar