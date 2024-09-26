export const getNavLinkClass = (isActive) => {
    return isActive
      ? 'border-b-2 border-white px-3 py-2 rounded-md shadow-sm'
      : '';
};