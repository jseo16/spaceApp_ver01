import { useState, useEffect } from 'react';

const useNav = () => {
  const MOBILE_BREAKING_POINT = 576;
  const [isMobileView, setIsMobileView] = useState(false);

  const getScreenSize = () => {
    setIsMobileView(window.innerWidth < MOBILE_BREAKING_POINT ? true : false);
  };

  // Viewport
  useEffect(() => {
    getScreenSize();
    window.addEventListener('resize', getScreenSize);
    return () => window.removeEventListener('resize', getScreenSize);
  }, []);

  return isMobileView;
};

export default useNav;
