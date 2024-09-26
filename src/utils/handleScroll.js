export const handleScroll = (setIsScrolled) => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
};