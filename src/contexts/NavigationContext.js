import React, { createContext, useState, useEffect } from 'react';

export const NavigationContext = createContext();

export function NavigationProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile, ] = useState(false)

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) { // Adjust breakpoint as needed
            setIsMobile(true);
          } else {
            setIsMobile(false);
            setIsOpen(false);
          }
        };
    
        // Call handleResize on initial render
        handleResize();
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

      return (
        <NavigationContext.Provider value={{ isOpen, setIsOpen, handleToggle, isMobile  }}>
          {children}
        </NavigationContext.Provider>
      );
}