export const getNavLinkClass = (isActive) => {
    return isActive
      ? 'border-b-2 border-customBlue px-3 py-2 rounded-md shadow-sm'
      : '';
};

export const navLinks = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About Us',
    url: '/about',
  },
  {
    name: 'Contact Us',
    url: '/contact',
  },
  // {
  //   name: 'Media',
  //   url: '/media',
  // },
  {
    name: 'Volunteer',
    url: '/volunteer',
  },
  {
    name: 'News & Events',
    url: '/news-events',
  }
]