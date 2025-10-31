import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLink({ to, children, onClick, className }) {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const checkActive = () => {
      if (to.startsWith('#')) {
        // For hash links on home page
        if (location.pathname !== '/') return false;
        
        const section = document.getElementById(to.substring(1));
        if (!section) return false;
        
        const rect = section.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.top <= window.innerHeight / 2;
        setIsActive(isInView);
      } else {
        // For regular links
        setIsActive(
          to === '/' ? location.pathname === '/' : // Exact match for home
          location.pathname.startsWith(to) && to !== '/' // Partial match for other pages
        );
      }
    };

    checkActive();
    if (to.startsWith('#')) {
      window.addEventListener('scroll', checkActive);
      return () => window.removeEventListener('scroll', checkActive);
    }
  }, [to, location.pathname]);

  const baseStyles = "transition-colors";
  const activeStyles = isActive 
    ? "text-blue-600 dark:text-blue-400 font-medium"
    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400";
  const combinedStyles = `${baseStyles} ${activeStyles} ${className || ''}`;

  if (to.startsWith('#')) {
    return (
      <a
        href={to}
        onClick={onClick}
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className={combinedStyles}
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default NavLink;