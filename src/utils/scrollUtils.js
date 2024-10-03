import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const ScrollManager = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      // Save the scroll position before navigating away
      window.onbeforeunload = () => {
        sessionStorage.setItem('scrollPosition', window.scrollY);
      };
  
      // Scroll to the top for new page loads
      if (!sessionStorage.getItem(pathname)) {
        window.scrollTo(0, 0);
      } else {
        // Restore the previous scroll position
        const savedPosition = sessionStorage.getItem('scrollPosition');
        window.scrollTo(0, parseInt(savedPosition, 10) || 0);
      }
    }, [pathname]);
  
    return null;
};