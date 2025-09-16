import {
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineChartBar,
  HiOutlineUser
} from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, isActive, onClick }) => {
  const iconClasses = `
    w-6 h-6 transition-colors duration-300
    ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'}
  `;

  const backgroundClasses = `
    flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
    ${isActive ? 'bg-blue-600 shadow-lg' : 'group-hover:bg-blue-100'}
  `;

  return (
    <button onClick={onClick} aria-label={label} className="group focus:outline-none">
      <div className={backgroundClasses}>
        <Icon className={iconClasses} />
      </div>
    </button>
  );
};

const BottomNavBar: React.FC = () => {
  const navigate = useNavigate();

  const navItems = [
    { id: 'Home', icon: HiOutlineHome, label: 'Home', path: '/' },
    { id: 'Stats', icon: HiOutlineChartBar, label: 'Stats', path: '/statistic' },
    { id: 'Profile', icon: HiOutlineUser, label: 'Profile', path: '/profile' },
    { id: 'Comming', icon: HiOutlineFolder, label: 'Comming', path: '/comming' },
  ];

  return (
    <nav
      className="
        fixed bottom-2 left-0 right-0 
        mx-2 w-auto px-4
        bg-white/70 backdrop-blur-lg 
        rounded-lg shadow-lg border border-gray-200/80"
    >
      <div className="flex justify-around items-center h-16 space-x-4">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.path}
            onClick={() => navigate((item.path === undefined) ? '/' : item.path)}
          />
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;