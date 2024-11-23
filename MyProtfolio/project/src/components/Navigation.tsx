import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Home, User, Code2, Briefcase, Phone, FileText, Wrench, Settings } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'Home', icon: <Home className="w-5 h-5" />, to: '/' },
  { name: 'Blog', icon: <FileText className="w-5 h-5" />, to: '/blog' },
  { name: 'Services', icon: <Wrench className="w-5 h-5" />, to: '/services' },
  { name: 'Dashboard', icon: <Settings className="w-5 h-5" />, to: '/dashboard' },
];

const scrollItems = [
  { name: 'About', icon: <User className="w-5 h-5" />, to: 'about' },
  { name: 'Skills', icon: <Code2 className="w-5 h-5" />, to: 'skills' },
  { name: 'Projects', icon: <Briefcase className="w-5 h-5" />, to: 'projects' },
  { name: 'Contact', icon: <Phone className="w-5 h-5" />, to: 'contact' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const NavLink = ({ item }: { item: typeof navItems[0] }) => (
    <RouterLink
      to={item.to}
      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
    >
      {item.icon}
      <span>{item.name}</span>
    </RouterLink>
  );

  const ScrollItem = ({ item }: { item: typeof scrollItems[0] }) => (
    <ScrollLink
      to={item.to}
      spy={true}
      smooth={true}
      offset={-64}
      duration={500}
      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
    >
      {item.icon}
      <span>{item.name}</span>
    </ScrollLink>
  );

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <RouterLink to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              SJ
            </RouterLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.to} item={item} />
            ))}
            {isHome && scrollItems.map((item) => (
              <ScrollItem key={item.to} item={item} />
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.to} item={item} />
            ))}
            {isHome && scrollItems.map((item) => (
              <ScrollItem key={item.to} item={item} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}