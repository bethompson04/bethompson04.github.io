import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
  isExiting: boolean;
  pathname: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, pathname }) => {
  const location = useLocation();
  const [direction, setDirection] = React.useState<number>(0);
  const prevPathRef = React.useRef(pathname);

  React.useEffect(() => {
    // Define the navigation order based on the header buttons
    const navigationOrder = ['/', '/games', '/artwork', '/software', '/contact'];
    const currentIndex = navigationOrder.indexOf(location.pathname);
    const prevIndex = navigationOrder.indexOf(prevPathRef.current);
    
    // Set direction based on the position in the navigation order
    // If moving to a later position in the order, slide left (-1)
    // If moving to an earlier position in the order, slide right (1)
    setDirection(currentIndex > prevIndex ? -1 : 1);
    prevPathRef.current = pathname;
  }, [location.pathname, pathname]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        willChange: 'transform'
      }}
      initial={{ x: 0 }}
      animate={{ 
        x: direction === -1 ? '-100%' : '100%'
      }}
      transition={{
        type: "tween",
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 